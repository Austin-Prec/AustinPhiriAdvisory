/*
  # Create blog publishing system

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `slug` (text, unique, not null) — used in the public URL /insights/:slug
      - `excerpt` (text) — short summary shown on the Insights grid
      - `content` (text) — rich HTML content produced by the editor
      - `cover_image_url` (text) — hero image shown on the article page and card
      - `category` (text) — e.g. Governance, Forensic Finance
      - `status` (text, default 'draft') — 'draft' or 'published'
      - `read_time` (text) — e.g. "5 min read", auto-estimated by the editor
      - `published_at` (timestamptz) — when the post went live; null while draft
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Storage
    - `blog-images` public bucket for cover images and in-post images pasted/dropped
      into the editor.

  3. Security
    - Enable RLS on `blog_posts`.
    - Public (anon) can SELECT only rows where status = 'published'. Drafts are
      invisible to the public site.
    - Only authenticated users (i.e. Austin, logged into /admin) can INSERT,
      UPDATE, DELETE, or SELECT drafts. This mirrors the ApexSuite pattern:
      every policy has both USING and WITH CHECK, nothing relies on a
      FOR ALL policy silently defaulting a missing clause to false.
    - Storage bucket: public read (so images render on the live site), writes
      restricted to authenticated users.

  4. Notes
    - No `company_id` scoping is needed here — this is a single-author site,
      not a multi-tenant product. Auth alone (are you logged in as the site
      owner) is the entire authorization model for writes.
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text NOT NULL DEFAULT '',
  cover_image_url text DEFAULT '',
  category text DEFAULT 'Governance',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  read_time text DEFAULT '',
  published_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published_at
  ON blog_posts (status, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug
  ON blog_posts (slug);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Public can read only published posts
CREATE POLICY "Public can view published posts"
  ON blog_posts FOR SELECT
  TO anon
  USING (status = 'published');

-- Authenticated (Austin, logged into /admin) can read everything including drafts
CREATE POLICY "Authenticated can view all posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated can create posts
CREATE POLICY "Authenticated can create posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Authenticated can update posts
CREATE POLICY "Authenticated can update posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated can delete posts
CREATE POLICY "Authenticated can delete posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

-- Keep updated_at current on every edit
CREATE OR REPLACE FUNCTION set_blog_post_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER trg_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION set_blog_post_updated_at();

-- Storage bucket for cover images and in-post images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public can view blog images"
  ON storage.objects FOR SELECT
  TO anon
  USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated can upload blog images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated can update blog images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'blog-images')
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated can delete blog images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');

NOTIFY pgrst, 'reload schema';
