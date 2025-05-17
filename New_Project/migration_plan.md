# Migration Plan: Converting Quarto Academic Website to Hugo

## Executive Summary

This document outlines a comprehensive plan to migrate Prof. Dr hab. inż. Radosław Juszczak's academic website from Quarto to Hugo. The migration will preserve all content, design elements, and functionality while providing a more sustainable and maintainable framework for future updates.

## Framework Selection

After analyzing the current website structure and requirements, **Hugo** is recommended as the optimal replacement for Quarto based on the following considerations:

### Why Hugo?

1. **Academic-focused themes**: Hugo offers several high-quality academic website themes, particularly [Hugo Academic/Hugo Blox](https://hugoblox.com/templates/) which is specifically designed for researchers and academics.

2. **Performance**: Hugo is known for its exceptional speed in generating static sites, which will improve build times compared to Quarto.

3. **Active community**: Hugo has a large, active community and is widely used for academic websites, ensuring long-term support and resources.

4. **Simplified maintenance**: Hugo's single binary distribution makes it easier to maintain compared to Quarto's more complex dependencies.

5. **Flexible content organization**: Hugo's content management system allows for similar organization of publications, projects, and blog posts as the current Quarto site.

### Alternatives Considered

- **Jekyll**: While also suitable for academic websites, Jekyll has slower build times and requires Ruby dependencies. However, it remains a viable alternative if Hugo presents unexpected challenges.

- **Gatsby/Next.js**: These React-based frameworks offer more dynamic features but would require significantly more development effort and JavaScript expertise to implement.

## Content Migration Strategy

### Site Structure

The current Quarto site has the following main sections that need to be preserved:

- Home/About page with academic profile
- Projects (active and past)
- Blog posts
- Publications (featured and complete list)

The Hugo Academic theme provides similar sections out-of-the-box, making it an ideal match for content migration.

### Content Conversion Process

#### 1. YAML Front Matter Conversion

Quarto and Hugo both use YAML front matter, but with different field names and structures. The conversion will involve:

- Mapping Quarto-specific YAML fields to Hugo equivalents
- Preserving metadata like dates, categories, and tags
- Ensuring image references are updated to Hugo's path structure

Example conversion:

```yaml
# Quarto format
---
title: "Assessment of warming and drier conditions on peatland vegetation"
date: 2021-01-01
categories: [Research]
image: ../static/img/climate-manipulation.png
---

# Hugo format
---
title: "Assessment of warming and drier conditions on peatland vegetation"
date: 2021-01-01
categories: ["Research"]
image: 
  placement: 1
  focal_point: "Center"
  preview_only: false
  caption: ""
  alt_text: ""
  filename: "climate-manipulation.png"
---
```

#### 2. Content Files Organization

Hugo uses a different content organization structure:

- Convert `/projects/climate-manipulation.qmd` to `/content/project/climate-manipulation/index.md`
- Convert `/blog/index.qmd` to `/content/post/_index.md`
- Convert `/publications/index.qmd` to `/content/publication/_index.md`

#### 3. Data Files Migration

The current site uses YAML data files for projects, publications, and blog posts:

- Convert `projects/active.yml` and `projects/past.yml` to Hugo's data format or individual content files
- Convert `publications/publications.yml` and `publications/featured.yml` to Hugo's publication format
- Convert `blog/professional.yml` to individual post files

#### 4. Assets Migration

- Move images from `/static/img/` to `/assets/media/` (Hugo Academic convention)
- Move custom fonts from `/static/fonts/` to `/assets/media/fonts/`
- Update all references in content files

#### 5. Styling Migration

- Convert `styles.scss` and `styles-dark.scss` to Hugo's theme customization format
- Implement custom CSS variables to maintain the current color scheme and typography

## Implementation Plan

### Phase 1: Setup and Initial Configuration (1-2 days)

1. Install Hugo and create a new site with the Academic theme
2. Configure `config.yaml` with basic site information
3. Set up the navigation menu structure to match the current site
4. Implement custom styling to match the current design

### Phase 2: Content Migration (3-5 days)

1. Migrate the home/about page content
2. Convert and migrate projects (active and past)
3. Convert and migrate blog posts
4. Convert and migrate publications

### Phase 3: Special Features Migration (2-3 days)

1. Implement the publication automation scripts (convert Python scripts to Hugo-compatible format)
2. Set up GitHub Actions workflows for automated builds and publication updates
3. Configure redirects to ensure old URLs continue to work

### Phase 4: Testing and Refinement (2-3 days)

1. Test all pages and navigation
2. Verify mobile responsiveness
3. Check all links and references
4. Optimize performance

### Phase 5: Deployment (1 day)

1. Deploy to GitHub Pages or current hosting provider
2. Set up continuous integration/deployment
3. Verify domain configuration

## Technical Requirements

### Software Requirements

- Hugo (latest version)
- Git for version control
- Python (for any custom scripts)

### Hosting Requirements

- GitHub Pages (current hosting solution)
- GitHub Actions for CI/CD

## Maintenance Considerations

The new Hugo-based website will offer several maintenance advantages:

1. **Simplified updates**: Hugo's single binary makes updates straightforward
2. **Better documentation**: Hugo has extensive documentation and community resources
3. **Theme stability**: Academic theme is mature and well-maintained
4. **Content management**: Easier separation of content and presentation

## Conclusion

Migrating from Quarto to Hugo will preserve all the current website's content and functionality while providing a more sustainable and maintainable framework. The Hugo Academic theme is particularly well-suited for academic websites, offering built-in support for publications, projects, and other scholarly content types.

The estimated timeline for complete migration is 9-14 days, depending on the complexity of custom features and the amount of content to be migrated.