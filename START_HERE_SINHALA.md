# PCG STATLAB — GitHub + Vercel + MongoDB Atlas + Clerk (සිංහල)

## මේ ZIP එකේ තියෙන්නේ
- `public/`: Website එකේ HTML/CSS/JavaScript, PCG logo, lessons, calculations, quizzes, visual labs
- `api/config.js`: Browser එකට **public** configuration පමණක් ලබාදෙන Vercel function එක
- `api/progress.js`: Login verify කරලා එක් එක් user ට අදාළ progress save/read කරන server function එක
- `api/_lib/db.js`: MongoDB database connection; password browser එකට යවන්නේ නෑ
- `.env.example`: Password නොමැති example එකක්
- `vercel.json`, `package.json`: Vercel deploy settings සහ server dependencies

**Original course PDF handouts intentionally excluded from the public website** — permission නැතිව university notes public website එකට publish කරන්න එපා. Original PDFs කලින් දුන්න offline ZIP එකේ තියෙනවා.

## Step 0 — Local preview on Mac (cloud නොමැතිව)
ZIP extract කරන්න → `START_MAC_PREVIEW.command` right-click → Open. නැත්නම් Terminal:
```
cd /path/to/PCG_STATLAB_Vercel_Ready
python3 -m http.server 8000 --directory public
```
Browser එකේ `http://localhost:8000/`. මෙහි browser storage පමණයි; cloud features Vercel backend එක deploy කරලා configure කළාම වැඩ.

## Step 1 — GitHub
1. [github.com](https://github.com/) account එක create / login කරන්න.
2. New repository → නම `pcg-statlab` → **Private** (මුලින් private තියාගන්න).
3. මේ folder එකේ `public`, `api`, `package.json`, `vercel.json`, `.gitignore`, `.env.example` සහ documentation repository root එකට දාන්න (parent folder තට්ටුවක් වැඩිපුර තියන්න එපා).
4. GitHub Desktop macOS app එක මඟින් මේ folder එක repository කරලා publish කරන එකත් පුළුවන්.
5. Never upload real `.env`, MongoDB connection password, or Clerk secret keys.

ChatGPT එකට GitHub connector එක connect කළොත් repository setup/code updates වලට උපකාර ගන්න පුළුවන්.

## Step 2 — MongoDB Atlas
1. [mongodb.com/atlas](https://www.mongodb.com/atlas) හි sign up / login කරන්න.
2. New Project → name `PCG STATLAB` → Create cluster (ඔයාට සුදුසු free tier එක තියෙනවා නම් select කරන්න).
3. Database Access → dedicated database user එකක් හදන්න; database `pcg_statlab` සඳහා **readWrite** privilege පමණක් දෙන්න; admin role අවශ්‍ය නෑ.
4. Network Access: Vercel integration / approved connectivity method use කරන්න. Ordinary Vercel dynamic outbound IP එක්ක Atlas sometimes `0.0.0.0/0` allow කිරීම අවශ්‍ය වෙන්න පුළුවන්. ඒක broad exposure එකක්; strong password හා least-privilege user අවශ්‍යයි. Static IP/private network විකල්ප ඇත්නම් ඒවා prefer කරන්න.
5. Connect → Drivers → MongoDB connection string copy කරන්න; placeholder username/password correct කරන්න. **ChatGPT හෝ GitHub වෙත connection string / password paste කරන්න එපා.**

## Step 3 — Clerk student login
1. [clerk.com](https://clerk.com/) හි account එක create කරන්න.
2. Application name `PCG STATLAB`; Google and/or Email sign-in configure කරන්න.
3. Dashboard → API keys: **Publishable Key** සහ **Secret Key** දෙකම ලබාගන්න. Publishable key public, secret key strictly private.
4. Vercel domain එක Clerk app එකේ permitted domain / production configuration වලට අදාළ විදිහට set කරන්න. Test vs live keys matching environment එකේ set කරන්න.

## Step 4 — Vercel online deployment
1. [vercel.com](https://vercel.com/) login → Add New → Project → GitHub repository import කරන්න.
2. Root Directory repository root (`.`); Framework Preset **Other**.
3. Build Command **none / override empty**; Output Directory `public` (the included `vercel.json` sets this).
4. Deploy කරලා generated URL බලන්න. e.g. `https://pcg-statlab.vercel.app` (EXAMPLE ONLY; real URL වෙනස් වෙන්න පුළුවන්).
5. Project → Settings → Environment Variables හි පහත keys එකතු කරන්න:
    - `MONGODB_URI` = private Atlas connection string
    - `MONGODB_DB` = `pcg_statlab`
    - `CLERK_PUBLISHABLE_KEY` = Clerk publishable key
    - `CLERK_SECRET_KEY` = Clerk secret key (private)
    - `APP_ORIGIN` = **your exact live HTTPS origin** e.g. `https://pcg-statlab.vercel.app` (trailing `/` එපා)
6. Environment variables add/update කළ පසු production deployment **Redeploy** කරන්න.
7. Clerk app settings හි live domain/sign-in configuration verify කරන්න.

## Step 5 — Cloud save පරීක්ෂා කරන්න
1. Live website → **Cloud save** → account එකට sign in.
2. Existing local progress සහ cloud progress දෙකම වෙනස් නම් prompt එකෙන් කුමක් keep කරනවද තෝරන්න. පරණ data delete කරන්න කලින් `Export progress JSON` කරගන්න.
3. Lesson එකක් complete කරලා status `Saved ✓` කියනකම් බලන්න.
4. Refresh → bookmarks / notes තියෙනවද බලන්න.
5. වෙන device එකකින් **එම account** එකට login කරලා progress restore වෙනවද බලන්න.

## Troubleshooting
- `Cloud is not configured`: Vercel environment variables missing, `APP_ORIGIN` incorrect, or deployment hasn't been redeployed.
- `Invalid or expired sign-in`: Clerk domain/key mismatch or incorrect `APP_ORIGIN`; sign out and sign in again after fixing.
- `Database temporarily unavailable`: URI, database-user permissions, network access rules, Atlas deployment status check කරන්න.
- `404 /api/config`: Python's local static server cannot serve serverless functions. Cloud works on deployed Vercel (or correctly configured Vercel development environment) only.
- `npm install`: Vercel runs dependency installation from `package.json` automatically.
- `Save conflict`: device and cloud versions differ. Choose the version you want; automatic overwrite is disabled.
- `PDF library missing`: excluded from public deployment on purpose.

## Security and privacy
- Per-user MongoDB document `_id` comes from verified Clerk session token, not any user-submitted ID.
- API rejects unauthenticated reads/writes; trusted domains are restricted by `APP_ORIGIN`.
- MongoDB URI and Clerk Secret Key exist only as server-side environment variables, never in public JavaScript.
- LocalStorage backup works even when not signed in or the network fails.
- Cloud sync uses optimistic versioning to avoid silently overwriting edits from multiple devices.
- Account sign out does not erase browser's local copy. On a shared computer use 'Reset local progress' only after exporting a backup, and remember that resetting while synced also resets the cloud data.
- Do not use this as a health/finance/identity records service; it is intended for study notes and progress.
- The deployment is a prepared starter. Live authentication/database connectivity must be tested with real accounts after setup.

Created by **theMadaa** · PCG team project.
