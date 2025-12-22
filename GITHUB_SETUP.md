# GitHub Setup Guide

Your code is ready to push to GitHub! Here are your options:

## Option 1: Create Repository via GitHub Website (Easiest)

1. **Go to GitHub**: Visit [github.com/new](https://github.com/new)

2. **Create Repository**:
   - Repository name: `executive-digital-twin-landing` (or your preferred name)
   - Description: `Premium landing page for Executive Digital Twin service`
   - Choose: **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

3. **Push Your Code**:
   ```bash
   cd /Users/vinos/.gemini/antigravity/playground/quantum-nadir
   
   # Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/executive-digital-twin-landing.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

---

## Option 2: Use GitHub CLI (Fastest)

If you want to use the command line:

1. **Install GitHub CLI**:
   ```bash
   brew install gh
   ```

2. **Authenticate**:
   ```bash
   gh auth login
   ```

3. **Create and Push**:
   ```bash
   cd /Users/vinos/.gemini/antigravity/playground/quantum-nadir
   gh repo create executive-digital-twin-landing --public --source=. --push
   ```

---

## ⚠️ Important Note About Video File

Your repository includes a **69MB video file** (`public/demo-video.mov`). GitHub has file size limits:
- **Warning at 50MB**
- **Hard limit at 100MB**

### Recommendations:

1. **Compress the video** before pushing:
   ```bash
   # Using ffmpeg (install with: brew install ffmpeg)
   ffmpeg -i public/demo-video.mov -vcodec h264 -acodec aac public/demo-video.mp4
   ```

2. **Or use Git LFS** (Large File Storage):
   ```bash
   # Install Git LFS
   brew install git-lfs
   git lfs install
   
   # Track video files
   git lfs track "*.mov"
   git lfs track "*.mp4"
   
   # Add and commit
   git add .gitattributes
   git commit -m "Add Git LFS tracking"
   git push
   ```

3. **Or host video elsewhere** (Recommended for production):
   - Upload to Vimeo, YouTube, or Cloudinary
   - Update the video source in `LandingPage.jsx`
   - This will make your site load much faster

---

## Current Git Status

✅ Git initialized in project directory  
✅ Initial commit created (17 files)  
✅ Ready to push to GitHub

**Your local repository is at:**
`/Users/vinos/.gemini/antigravity/playground/quantum-nadir`

---

## After Pushing to GitHub

Once your code is on GitHub, you can easily deploy to:
- **Vercel**: Connect your GitHub repo at [vercel.com](https://vercel.com)
- **Netlify**: Connect at [netlify.com](https://netlify.com)
- **Cloudflare Pages**: Connect at [pages.cloudflare.com](https://pages.cloudflare.com)

All of these platforms offer free hosting with automatic deployments whenever you push to GitHub!
