# Setting up your writing area and page editor

This adds two things: a private area to write and publish blog posts like
WordPress, and a page editor where you can update page content — starting with
About — without touching code: swap the photo, edit the bio, add or remove
certifications, reorder sections.

Follow these steps once to get it running, **in order**. If you skip Step 0 and
go straight to Supabase, `/admin` will just show your homepage instead of a login
screen — that's not a bug, it means the new code isn't live yet.

## 0. Deploy this to Cloudflare Pages

This step is what makes `/admin` exist as a real page at all. Until it's deployed,
Cloudflare is still serving your old site, which has no admin area, so visiting
`/admin` falls through to the homepage.

In Cloudflare Pages, connect this project (or upload it, depending on how you
normally deploy) with these settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

You'll also need to add the two environment variables from Step 1 below inside
Cloudflare Pages itself — **Settings → Environment variables** — not just in a
local `.env` file, since Cloudflare builds your site on its own servers and
won't see a `.env` file that only exists on your computer.

Once the deploy finishes, visiting `/admin` should show a sign-in screen (even
though signing in won't work yet — that's Steps 2 and 4 below).

## 1. Connect to your Supabase project

If you haven't already, open your project at supabase.com. You'll need two things
from **Project Settings → API**:
- Project URL
- `anon` `public` key

Copy `.env.example` to a new file named `.env` in the project root, and paste those
two values in. (This `.env` file is for building locally on your own machine — for
the live site, you also need to add these same two values in Cloudflare Pages,
per Step 0 above.)

## 2. Run the database migrations

In **Supabase Dashboard → SQL Editor**, run these files from
`supabase/migrations/` **in this order** (the filenames start with a timestamp so
they sort correctly — if you already ran the first three for the blog, you only
need the last two now):

1. `20260702194855_create_articles_table.sql` — creates the table that stores posts
2. `20260702194856_create_article_images_bucket.sql` — creates storage for photos
3. `20260702194857_seed_existing_articles.sql` — copies your 3 existing posts in,
   so nothing is lost
4. `20260703072321_create_page_blocks_table.sql` — creates the table that stores
   editable page sections
5. `20260703072342_seed_about_page_blocks.sql` — copies your current About page
   content in, so nothing is lost
6. `20260703074807_seed_home_page_blocks.sql` — copies your current Home page
   content in, so nothing is lost

Just open each file, copy its contents, paste into the SQL Editor, and click Run.

## 3. Deploy the four functions

These power saving, publishing, photo uploads, and page editing. Using the
Supabase CLI:

```bash
supabase functions deploy articles-write
supabase functions deploy articles-upload
supabase functions deploy articles-list
supabase functions deploy pages-write
```

(If you'd rather not use the CLI, you can also paste each function's `index.ts`
into **Dashboard → Edge Functions → Create a new function** with the matching name.
If you already deployed the first three for the blog, you only need `pages-write`
now — but if you deployed `pages-write` before for the About page, you need to
**redeploy** it now, since it was updated to also support Home's block types.)

## 4. Create your login

In **Dashboard → Authentication → Users → Add user**, create one user with your
email and a password. That's the only account — this is your private writing area,
not a public sign-up.

## 5. Try it

Once Steps 0–4 are all done, go to your live site's `/admin/login` (the one on
Cloudflare, e.g. `yoursite.com/admin/login`). Sign in.

For a blog post: click **New post**, try typing or pasting something in, dragging
a photo into the text. Hit **Publish**, then check `/insights` — your post is there.

For the page editor: click **Site pages** at the top of the dashboard, then
**Home** or **About**. Try editing the bio text, replacing the photo, adjusting a
stat number, or changing a button's destination. Hit **Save block**, then check
the live page — the change is there.

(You can also test locally first with `npm install` then `npm run dev`, using the
`.env` file from Step 1 — useful for trying things out before they're live, but
the real target is the Cloudflare URL above.)

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
- **Home and About are wired up so far.** Frameworks and Services will follow the
  same pattern, each with its own block types suited to that page's content —
  that's a separate piece of work.
- **Block types are currently fixed** — About uses header/photo/bio/list, Home
  uses hero/value_cards/stat_bar/link_preview. You can freely add, remove, and
  reorder blocks of these kinds on their respective pages, but a genuinely new
  kind of block (say, a video embed) still needs to be built by a developer once,
  after which it becomes available to add anywhere like the others.
- **Button and link destinations** on the Home page use a dropdown of your real
  pages rather than free text, so a typo can never produce a broken link.
- **Bold text in the bio editor:** select the words you want bold, then click the
  bold icon above that paragraph. No need to type any tags.
