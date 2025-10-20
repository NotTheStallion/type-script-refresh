# ✅ GitHub Pages Deployment Checklist

## Pre-Deployment Checklist

### 1. Test Locally
- [ ] Run `make rebuild` - Ensure clean build works
- [ ] Run `make serve` - Test app at http://localhost:8080
- [ ] Test all interactive features
- [ ] Check browser console for errors
- [ ] Test on different browsers if possible

### 2. Verify Files
- [ ] Run `make verify` - Check all files exist
- [ ] Ensure `.nojekyll` file exists
- [ ] Check `.github/workflows/static.yml` is present
- [ ] Verify `package-lock.json` is committed

### 3. Check Git Status
```bash
git status
# Should show all changes staged or committed
```

## Deployment Steps

### Step 1: Enable GitHub Pages
- [ ] Go to: https://github.com/NotTheStallion/type-script-refresh/settings/pages
- [ ] Under "Source", select **GitHub Actions**
- [ ] Save changes

### Step 2: Commit and Push
```bash
# Stage all changes
git add .

# Commit with meaningful message
git commit -m "Configure GitHub Pages deployment with TypeScript build"

# Push to master
git push origin master
```

### Step 3: Monitor Deployment
- [ ] Go to: https://github.com/NotTheStallion/type-script-refresh/actions
- [ ] Watch the "Build and Deploy TypeScript Refresher to Pages" workflow
- [ ] Wait for green checkmark (✓) - usually 1-2 minutes

### Step 4: Verify Live Site
- [ ] Visit: https://notthestallion.github.io/type-script-refresh/
- [ ] Check that page loads
- [ ] Test all interactive demos:
  - [ ] Square Calculator
  - [ ] String Reverser
  - [ ] Greeting Generator
  - [ ] Fibonacci Sequence
  - [ ] Todo List
- [ ] Check browser console for errors
- [ ] Verify all learning topics display

## Post-Deployment Checklist

### Functionality
- [ ] All interactive features work
- [ ] No 404 errors in browser console
- [ ] CSS styling loads correctly
- [ ] All JavaScript modules load
- [ ] Page is responsive on mobile

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No broken links
- [ ] Images load correctly (if any)

### SEO & Sharing
- [ ] Page title is correct
- [ ] Meta description is present
- [ ] Site works when shared on social media

## Troubleshooting

### If Deployment Fails

1. **Check GitHub Actions logs:**
   - Go to Actions tab
   - Click on failed workflow
   - Read error messages

2. **Common fixes:**
   ```bash
   # Fix TypeScript errors locally
   make rebuild
   
   # Ensure dependencies are correct
   npm ci
   
   # Re-commit and push
   git add .
   git commit -m "Fix deployment issues"
   git push origin master
   ```

### If Site Loads but JS Doesn't Work

1. **Check browser console for errors**
2. **Verify all files deployed:**
   - index.html
   - dist/ folder with .js files
   - styles/style.css

3. **Check module imports:**
   - Ensure all imports have `.js` extensions
   - Example: `import { foo } from "./bar.js"`

### If Changes Don't Appear

1. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
   - Or open in incognito/private mode

2. **Wait a few minutes:**
   - GitHub Pages caching can take 5-10 minutes to update

3. **Check deployment completed:**
   - Verify workflow finished successfully in Actions tab

## Ongoing Maintenance

### Making Updates

```bash
# 1. Make changes locally
# Edit files in your editor

# 2. Test locally
make rebuild
make serve

# 3. Commit and push
git add .
git commit -m "Describe your changes"
git push origin master

# 4. Wait for auto-deployment (1-2 minutes)
# 5. Verify changes on live site
```

### Monitoring

- [ ] Check Actions tab regularly for failed deployments
- [ ] Monitor site uptime
- [ ] Review GitHub Pages analytics (Settings → Pages)

## Quick Commands Reference

```bash
# Local testing
make rebuild     # Clean build
make serve       # Test locally
make check       # Verify setup

# Deployment
git add .
git commit -m "Your message"
git push origin master

# Check status
# Visit: https://github.com/NotTheStallion/type-script-refresh/actions
```

## Success Indicators

✅ Workflow shows green checkmark  
✅ Site accessible at https://notthestallion.github.io/type-script-refresh/  
✅ All interactive features work  
✅ No console errors  
✅ Page loads quickly  
✅ Responsive on mobile  

## Next Steps After Deployment

1. Share your live URL!
2. Add the badge to other documentation
3. Test on different devices
4. Consider custom domain (optional)
5. Monitor for issues

---

## Emergency Rollback

If deployment breaks the site:

1. **Revert the commit:**
   ```bash
   git revert HEAD
   git push origin master
   ```

2. **Or push a known good commit:**
   ```bash
   git reset --hard <good-commit-hash>
   git push --force origin master
   ```

3. **Wait for re-deployment**

---

**Remember:** Always test locally before pushing to production! 🚀
