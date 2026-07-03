# Setting up your writing area

This adds a private area where you can write and publish blog posts the way you'd
use WordPress — type or paste content directly in, drag photos straight into the
post, and it goes live on the Insights page immediately. No code, no redeploying.

Follow these steps once to get it running.

## 1. Connect to your Supabase project

If you haven't already, open your project at supabase.com. You'll need two things
from **Project Settings → API**:
- Project URL
- `anon` `public` key

Copy `.env.example` to a new file named `.env` in the project root, and paste those
two values in.

## 2. Run the database migrations

In **Supabase Dashboard → SQL Editor**, run the three files in
`supabase/migrations/` **in this order** (the filenames start with a timestamp so
they sort correctly):

1. `20260702194855_create_articles_table.sql` — creates the table that stores posts
2. `20260702194856_create_article_images_bucket.sql` — creates storage for photos
3. `20260702194857_seed_existing_articles.sql` — copies your 3 existing posts in,
   so nothing is lost

Just open each file, copy its contents, paste into the SQL Editor, and click Run.

## 3. Deploy the three new functions

These power saving, publishing, and photo uploads. Using the Supabase CLI:

```bash
supabase functions deploy articles-write
supabase functions deploy articles-upload
supabase functions deploy articles-list
```

(If you'd rather not use the CLI, you can also paste each function's `index.ts`
into **Dashboard → Edge Functions → Create a new function** with the matching name.)

## 4. Create your login

In **Dashboard → Authentication → Users → Add user**, create one user with your
email and a password. That's the only account — this is your private writing area,
not a public sign-up.

## 5. Try it

Run the site (`npm install` then `npm run dev`), and go to `/admin/login`. Sign in,
click **New post**, and try typing or pasting something in, dragging a photo into
the text. Hit **Publish**, then check `/insights` — your post is there.

---

### A couple of things worth knowing

- **Drafts stay private.** Save draft vs. Publish is a real distinction — a draft
  never appears on the public site until you publish it, so you can write over
  several sessions without anything going live early.
- **Clean web addresses.** Posts now get a readable URL from the title, like
  `/insights/why-governance-frameworks-fail`, instead of a plain number. Good for
  sharing on LinkedIn and for search engines.
- **Accented letters in titles** (é, ñ, etc.) currently get dropped from the web
  address rather than converted — the post itself displays correctly either way,
  only the URL looks a little rougher. Worth a fix later if you write titles with
  those often; not urgent otherwise.
- **Cover images are optional.** If you skip one, the post falls back to a simple
  icon tile on the Insights page, same as before.
