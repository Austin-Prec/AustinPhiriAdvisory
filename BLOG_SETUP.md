# Setting up the new blog system

Your Insights section now runs on a live database instead of a hardcoded file.
This means: log into `/admin`, write a post, hit Publish, and it's on the site
immediately — no code, no GitHub, no redeploy.

It uses the **same Supabase project** you already have for the contact form.
You are not creating a new backend; you're adding one table and one storage
bucket to the one you already run.

## One-time setup (about 10 minutes)

### 1. Run the database migration

1. Go to your Supabase project dashboard → **SQL Editor**.
2. Open `supabase/migrations/20260702000001_create_blog_system.sql` from this
   project, copy its full contents, paste into a new SQL Editor query, and
   run it.
3. This creates the `blog_posts` table and a public `blog-images` storage
   bucket, with the same RLS pattern you use elsewhere: public visitors can
   only ever see posts marked "published"; only a logged-in admin can create,
   edit, or see drafts.

If you use the Supabase CLI locally instead, `supabase db push` picks this
migration up automatically since it's in the standard `supabase/migrations`
folder alongside your existing contact-form migration.

### 2. Create your admin login

The `/admin` page is protected by Supabase Auth (email + password) — it is
the login for you, the site owner, not a public signup form.

1. In the Supabase dashboard → **Authentication** → **Users** → **Add user**.
2. Enter the email and password you want to use to log into `/admin`.
3. Untick "Auto Confirm User" is fine to leave checked, or confirm manually —
   either way, no email needs to actually get sent for this to work.

That's your one and only login. There's no public registration page, so this
account is the only way in.

### 3. Add environment variables

Copy `.env.example` to `.env` and fill in your project's URL and anon key
(Supabase dashboard → **Project Settings** → **API**):

```
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

**On Cloudflare Pages** (where this site is deployed), add the same two
variables under your project's **Settings → Environment variables** for both
Production and Preview, then trigger a new deployment so the build picks
them up. Until you do this, the site will build fine but the Insights page
and `/admin` won't be able to reach the database.

### 4. Install the new dependency and deploy

```
npm install
npm run build
```

Then push to GitHub as usual — Cloudflare Pages will pick it up.

## Using it day to day

Go to `yoursite.com/admin`, log in, and:

- **New post** → title, write or paste your content, drop in an image if you
  want (drag it straight into the writing area, or paste it if you copied an
  image from somewhere), pick a category, optionally set a cover image.
- **Save draft** keeps it private while you're still working on it.
- **Publish** puts it live on `/insights` immediately.
- Editing a published post and hitting **Update** changes it live, right away.
- **Delete** removes it from the site immediately — there's a confirmation
  step since this can't be undone.

Pasting works the way it does in Word or Google Docs: paste text with bold,
headings, links, or bullet points from another document, and that formatting
carries over. Paste or drop an image directly, and it uploads and drops into
the post right where your cursor is — no filenames, no HTML, no separate
media step.

## What changed under the hood, if you're curious

- `src/data/articles.json` and `src/data/articleHelpers.ts` are gone — those
  were the hardcoded file this replaces. `src/pages/articles.json`, a stale
  leftover duplicate that had drifted out of sync with the real one, is also
  gone.
- `src/data/blogHelpers.ts` now does the same jobs (fetch posts, look one up,
  pick an icon) but reads from Supabase instead of a bundled file.
- Article URLs changed from `/insights/1` (numeric ID) to
  `/insights/your-post-title` (slug) — better for sharing and for search
  engines, and it's what the editor generates automatically from your title.
- `/admin` is a separate screen bolted onto the same site and build, not
  linked from the navbar, not in the sitemap. It's not a secret exactly —
  it's protected by a real login — but a casual visitor has no reason to
  ever find it.
