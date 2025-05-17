# Migration Example: Converting a Project Page from Quarto to Hugo

## Original Quarto File (projects/climate-manipulation.qmd)

```yaml
---
title: "Assessment of warming and drier conditions on peatland vegetation"
date: 2021-01-01
categories: [Research]
image: ../static/img/climate-manipulation.png
---

**Project duration:** 2021-2025  
**Funding:** National Science Centre of Poland (NCN) No. 2020/37/B/ST10/0121  
**Role:** Project contractor

This project assesses the impact of warming and drier conditions on photosynthetic efficiency, productivity, spectral characteristics, and morphology of peatland vegetation under controlled in-situ climate manipulation experiments. The research provides insights into peatland resilience and carbon cycling under future climate scenarios.
```

## Converted Hugo File (content/project/climate-manipulation/index.md)

```yaml
---
title: "Assessment of warming and drier conditions on peatland vegetation"
date: 2021-01-01
summary: "This project assesses the impact of warming and drier conditions on photosynthetic efficiency, productivity, spectral characteristics, and morphology of peatland vegetation under controlled in-situ climate manipulation experiments."

tags:
  - Research

image:
  caption: ""
  focal_point: ""
  placement: 1
  preview_only: false
  alt_text: "Climate manipulation experiment setup"
  filename: "climate-manipulation.png"

authors:
  - admin

links:
  - name: Funding
    url: "#"
    icon_pack: fas
    icon: money-bill

show_related: true
---

**Project duration:** 2021-2025  
**Funding:** National Science Centre of Poland (NCN) No. 2020/37/B/ST10/0121  
**Role:** Project contractor

This project assesses the impact of warming and drier conditions on photosynthetic efficiency, productivity, spectral characteristics, and morphology of peatland vegetation under controlled in-situ climate manipulation experiments. The research provides insights into peatland resilience and carbon cycling under future climate scenarios.
```

## Key Differences Explained

1. **File Location**: 
   - Quarto: `projects/climate-manipulation.qmd`
   - Hugo: `content/project/climate-manipulation/index.md`

2. **YAML Front Matter Changes**:
   - Added `summary` field for Hugo Academic theme's card view
   - Converted `categories` to `tags` (Hugo Academic uses tags for filtering)
   - Expanded `image` from a simple path to a structured object with multiple properties
   - Added `authors` field to link to the author profile
   - Added `links` section for funding information
   - Added `show_related` to enable related projects display

3. **File Extension**:
   - Changed from `.qmd` (Quarto Markdown) to `.md` (standard Markdown)

4. **Content Structure**:
   - The main content remains unchanged
   - Hugo Academic theme will automatically apply appropriate styling

## Additional Configuration Required

In addition to converting individual files, the Hugo implementation would require:

1. Setting up `content/authors/admin/_index.md` with the professor's information
2. Configuring `config/_default/params.yaml` for site-wide settings
3. Creating `config/_default/menus.yaml` to define the navigation structure
4. Moving images to `assets/media/` directory

This example demonstrates how straightforward the content migration process can be while taking advantage of Hugo Academic's enhanced features for academic websites.