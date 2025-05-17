# Implementation Guide: Quarto to Hugo Migration

## Overview

This document provides practical, step-by-step instructions for implementing the migration from Quarto to Hugo Academic (Hugo Blox) for Prof. Dr hab. inż. Radosław Juszczak's academic website. It complements the migration plan by focusing on specific technical steps and commands.

## Prerequisites

1. **Install Hugo**
   ```bash
   # Windows (using Chocolatey)
   choco install hugo-extended
   
   # Verify installation
   hugo version
   ```

2. **Install Required Tools**
   ```bash
   # Install Git if not already installed
   choco install git
   
   # Install Python for migration scripts
   choco install python
   ```

## Step 1: Create New Hugo Site

```bash
# Create a new Hugo site in a separate directory
mkdir ../Hugo_Migration
cd ../Hugo_Migration
hugo new site . --format yaml

# Initialize Git repository
git init
```

## Step 2: Install Hugo Academic Theme

```bash
# Clone the Hugo Academic theme (Hugo Blox)
git submodule add https://github.com/HugoBlox/hugo-blox-builder.git themes/hugo-blox-builder

# Copy example site content as a starting point
cp -r themes/hugo-blox-builder/exampleSite/* .
```

## Step 3: Configure Site Settings

1. **Edit `config/_default/config.yaml`**
   ```yaml
   title: "Prof. Dr hab. inż. Radosław Juszczak"
   baseURL: "/"
   defaultContentLanguage: en
   
   # Other settings...
   ```

2. **Edit `config/_default/params.yaml`**
   ```yaml
   # Site header
   header:
     navbar:
       enable: true
       align: r
       show_logo: true
       show_language: false
       show_search: true
   
   # Site footer
   footer:
     copyright:
       notice: '© {year} Prof. Dr hab. inż. Radosław Juszczak'
   
   # Localization
   locale:
     date_format: 'Jan 2, 2006'
     time_format: '3:04 PM'
   ```

3. **Edit `config/_default/menus.yaml`**
   ```yaml
   main:
     - name: Home
       url: '/'
       weight: 10
     - name: Projects
       url: '/project/'
       weight: 20
     - name: Blog
       url: '/post/'
       weight: 30
     - name: Publications
       url: '/publication/'
       weight: 40
   ```

## Step 4: Set Up Author Profile

1. **Create `content/authors/admin/_index.md`**
   ```yaml
   ---
   title: Prof. Dr hab. inż. Radosław Juszczak
   role: Professor of Environmental Science
   bio: |
     Full Professor, environmental scientist specializing in greenhouse gas exchange, carbon and GHG balances, ecosystem responses to climate change, and remote sensing of peatlands. Member of the Polish Academy of Sciences, Committee on Environmental Engineering.
   
   interests:
     - Greenhouse gas exchange
     - Carbon and GHG balances
     - Ecosystem responses to climate change
     - Climate manipulation experiments
     - Remote sensing of peatlands
   
   education:
     courses:
       - course: Professor
         institution: Poznań University of Life Sciences
         year: ""
   
   social:
     - icon: envelope
       icon_pack: fas
       link: mailto:radoslaw.juszczak@up.poznan.pl
     - icon: researchgate
       icon_pack: ai
       link: https://www.researchgate.net/profile/Radoslaw_Juszczak
     - icon: graduation-cap
       icon_pack: fas
       link: https://publons.com/researcher/3298853/radoslaw-juszczak/
     - icon: google-scholar
       icon_pack: ai
       link: https://scholar.google.com/citations?user=V18nqg0AAAAJ
   ---
   
   Poznań University of Life Sciences  
   Faculty of Environmental Engineering and Spatial Planning  
   Laboratory of Bioclimatology, Department of Ecology and Environmental Protection  
   Piątkowska 94, 60-649 Poznań, POLAND  
   Tel: +48 61 846 65 52  
   ```

2. **Copy profile image**
   ```bash
   mkdir -p content/authors/admin/
   cp ../New_Project/static/img/headshot.jpg content/authors/admin/avatar.jpg
   ```

## Step 5: Migrate Projects

1. **Create project section structure**
   ```bash
   mkdir -p content/project
   touch content/project/_index.md
   ```

2. **Edit `content/project/_index.md`**
   ```yaml
   ---
   title: Projects
   subtitle: A selection of projects I'm currently working on or have contributed to in the past.
   
   content:
     filters:
       folders:
         - project
       kinds:
         - page
     sort_by: Date
     sort_order: desc
   
   design:
     columns: "1"
     view: card
     flip_alt_rows: true
   ---
   ```

3. **Convert each project**
   
   For each project in `projects/active.yml` and `projects/past.yml`:
   
   ```bash
   # Example for climate-manipulation project
   mkdir -p content/project/climate-manipulation
   # Create index.md file with converted content
   # Copy associated image
   cp ../New_Project/static/img/climate-manipulation.png assets/media/climate-manipulation.png
   ```

## Step 6: Migrate Publications

1. **Create publication section structure**
   ```bash
   mkdir -p content/publication
   touch content/publication/_index.md
   ```

2. **Edit `content/publication/_index.md`**
   ```yaml
   ---
   title: Publications
   subtitle: My recent research publications
   
   content:
     filters:
       folders:
         - publication
       kinds:
         - page
     sort_by: Date
     sort_order: desc
   
   design:
     columns: "1"
     view: citation
   ---
   ```

3. **Create Python script to convert publications**
   
   Create a script `convert_publications.py` that reads from `publications/publications.yml` and `publications/featured.yml` and generates individual publication files in `content/publication/`.

## Step 7: Migrate Blog Posts

1. **Create blog section structure**
   ```bash
   mkdir -p content/post
   touch content/post/_index.md
   ```

2. **Edit `content/post/_index.md`**
   ```yaml
   ---
   title: Blogposts
   subtitle: Posts I have (co-)authored in my professional capacity
   
   content:
     filters:
       folders:
         - post
       kinds:
         - page
     sort_by: Date
     sort_order: desc
   
   design:
     columns: "1"
     view: card
   ---
   ```

3. **Convert each blog post from `blog/professional.yml`**

## Step 8: Migrate Assets

1. **Copy and organize images**
   ```bash
   mkdir -p assets/media
   cp -r ../New_Project/static/img/* assets/media/
   ```

2. **Copy and organize fonts**
   ```bash
   mkdir -p assets/media/fonts
   cp -r ../New_Project/static/fonts/* assets/media/fonts/
   ```

## Step 9: Implement Custom Styling

1. **Create `assets/scss/custom.scss`**
   ```scss
   // Import fonts
   @import 'fonts';
   
   // Variables
   $primary: #18bc9c;
   
   // Custom styles
   .navbar {
     padding-top: 0.5rem;
     padding-bottom: 0.5rem;
   }
   ```

2. **Create `assets/scss/_fonts.scss`**
   ```scss
   /* barlow-regular - latin_latin-ext */
   @font-face {
     font-display: swap;
     font-family: 'Barlow';
     font-style: normal;
     font-weight: 400;
     src: url('/media/fonts/barlow-v12-latin_latin-ext-regular.woff2') format('woff2');
   }
   /* barlow-italic - latin_latin-ext */
   @font-face {
     font-display: swap;
     font-family: 'Barlow';
     font-style: italic;
     font-weight: 400;
     src: url('/media/fonts/barlow-v12-latin_latin-ext-italic.woff2') format('woff2'); 
   }
   /* barlow-700 - latin_latin-ext */
   @font-face {
     font-display: swap;
     font-family: 'Barlow';
     font-style: normal;
     font-weight: 700;
     src: url('/media/fonts/barlow-v12-latin_latin-ext-700.woff2') format('woff2'); 
   }
   /* barlow-700italic - latin_latin-ext */
   @font-face {
     font-display: swap;
     font-family: 'Barlow';
     font-style: italic;
     font-weight: 700;
     src: url('/media/fonts/barlow-v12-latin_latin-ext-700italic.woff2') format('woff2'); 
   }
   ```

## Step 10: Set Up GitHub Actions for Deployment

1. **Create `.github/workflows/hugo.yml`**
   ```yaml
   name: Deploy Hugo site to GitHub Pages
   
   on:
     push:
       branches: [main]
     workflow_dispatch:
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
           with:
             submodules: true
             fetch-depth: 0
   
         - name: Setup Hugo
           uses: peaceiris/actions-hugo@v2
           with:
             hugo-version: 'latest'
             extended: true
   
         - name: Build
           run: hugo --minify
   
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./public
   ```

2. **Create `.github/workflows/update_publications.yml`**
   ```yaml
   name: Update publications
   
   on:
     workflow_dispatch:
     schedule:
       - cron: '0 8 1 * *' # 8:00 UTC on the 1st of every month
   
   jobs:
     update:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout repo
           uses: actions/checkout@v3
           with:
             fetch-depth: 0
   
         - name: Set up Python
           uses: actions/setup-python@v4
           with:
             python-version: '3.11'
   
         - name: Install dependencies
           run: |
             python -m pip install --upgrade pip
             pip install -r scripts/requirements.txt
   
         - name: Run publication fetch script
           run: python scripts/fetch_publications.py
   
         - name: Create pull request if publications updated
           uses: peter-evans/create-pull-request@v5
           with:
             commit-message: "chore: update publications"
             title: "Update publications"
             body: |
               This PR updates the publications list using the OpenAlex API.
               Triggered by the monthly schedule or manual dispatch.
             branch: update-publications
             delete-branch: true
   ```

## Step 11: Test Locally

```bash
# Start Hugo server with drafts enabled
hugo server -D
```

Visit http://localhost:1313/ to preview the site.

## Step 12: Deploy

1. **Push to GitHub repository**
   ```bash
   git add .
   git commit -m "Initial migration from Quarto to Hugo"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Set source to "GitHub Actions"

## Additional Resources

- [Hugo Academic Documentation](https://docs.hugoblox.com/)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)

## Troubleshooting

- **Missing images**: Check file paths and ensure images are in the correct location
- **Styling issues**: Verify custom SCSS is properly loaded
- **Build failures**: Check Hugo version compatibility with theme
- **Deployment issues**: Verify GitHub Actions permissions

## Post-Migration Tasks

1. Update any external links to the website
2. Set up redirects for any changed URLs
3. Test all functionality on mobile devices
4. Verify all publications and projects are correctly displayed
5. Test the publication update automation

This implementation guide provides the technical steps needed to execute the migration plan. Adjust commands and paths as needed for your specific environment.