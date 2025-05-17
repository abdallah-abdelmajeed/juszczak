# Migration Example: Converting Publications from Quarto to Hugo

## Original Quarto Publication Data (publications/publications.yml)

```yaml
- path: https://doi.org/10.1016/j.scitotenv.2022.154294
  title: Impact of climate change-induced alterations in peatland vegetation phenology and composition on carbon balance
  subtitle: Science of The Total Environment
  date: '2022'
  author: Antala M., Juszczak R., van der Tol Ch., Rastogi A.
  description: ''
- path: https://doi.org/10.1111/gcb.16060
  title: Global maps of soil temperature
  subtitle: Global Change Biology
  date: '2022'
  author: Lembrechts, J. J., ... Juszczak R., ... Lenoir, J.
  description: ''
```

## Original Quarto Featured Publication (publications/featured.yml)

```yaml
- path: https://doi.org/10.1016/j.scitotenv.2022.154294
  image: ../static/img/reversal.png
  title: Impact of climate change-induced alterations in peatland vegetation phenology and composition on carbon balance
  subtitle: Science of The Total Environment
  date: '2022'
  author: Antala M., Juszczak R., van der Tol Ch., Rastogi A.
  description: 'Research on peatland vegetation and carbon balance.'
```

## Converted Hugo Publication Files

### First Publication (content/publication/climate-change-peatland/index.md)

```yaml
---
title: "Impact of climate change-induced alterations in peatland vegetation phenology and composition on carbon balance"
authors:
  - Antala M.
  - admin
  - van der Tol Ch.
  - Rastogi A.
date: "2022-01-01"
doi: "10.1016/j.scitotenv.2022.154294"

publication_types: ["2"] # 2 represents journal article

publication: "Science of The Total Environment"
publication_short: ""

abstract: ""

featured: true
featured_image:
  placement: 1
  caption: ""
  focal_point: "Center"
  preview_only: false
  alt_text: ""
  filename: "reversal.png"

tags:
  - Peatland
  - Climate Change
  - Carbon Balance

links:
  - name: URL
    url: https://doi.org/10.1016/j.scitotenv.2022.154294
---

Research on peatland vegetation and carbon balance.
```

### Second Publication (content/publication/soil-temperature/index.md)

```yaml
---
title: "Global maps of soil temperature"
authors:
  - Lembrechts, J. J.
  - "..."
  - admin
  - "..."
  - Lenoir, J.
date: "2022-01-01"
doi: "10.1111/gcb.16060"

publication_types: ["2"] # 2 represents journal article

publication: "Global Change Biology"
publication_short: ""

abstract: ""

featured: false

tags:
  - Soil Temperature
  - Global Mapping

links:
  - name: URL
    url: https://doi.org/10.1111/gcb.16060
---
```

## Key Differences Explained

1. **Data Structure**:
   - Quarto: Uses YAML data files to list all publications
   - Hugo: Uses individual Markdown files for each publication

2. **File Organization**:
   - Quarto: `publications/publications.yml` and `publications/featured.yml`
   - Hugo: `content/publication/[slug]/index.md` for each publication

3. **YAML Front Matter Changes**:
   - Added `publication_types` to categorize the type of publication
   - Changed `author` field to `authors` array with `admin` representing the site owner
   - Expanded date format to include month and day (required by Hugo Academic)
   - Separated DOI from the full URL
   - Added structured `featured_image` for featured publications
   - Added `tags` for better categorization and filtering

4. **Content**:
   - Added the description as content below the front matter

## Migration Script Approach

To automate this conversion process, a Python script could be created that:

1. Reads the YAML data files from the Quarto site
2. Creates appropriate folder structure for Hugo
3. Generates individual Markdown files for each publication
4. Converts author lists to include `admin` for the site owner
5. Extracts DOIs from full URLs
6. Copies and renames associated images

Example pseudocode for the script:

```python
import yaml
import os
import re
from pathlib import Path

# Load publication data
with open('publications/publications.yml', 'r') as f:
    publications = yaml.safe_load(f)

with open('publications/featured.yml', 'r') as f:
    featured = yaml.safe_load(f)

# Create a lookup for featured publications
featured_lookup = {item['path']: item for item in featured}

# Process each publication
for pub in publications:
    # Create slug from title
    slug = create_slug(pub['title'])
    
    # Create directory
    os.makedirs(f'content/publication/{slug}', exist_ok=True)
    
    # Check if publication is featured
    is_featured = pub['path'] in featured_lookup
    
    # Prepare front matter
    front_matter = {
        'title': pub['title'],
        'authors': format_authors(pub['author']),
        'date': format_date(pub['date']),
        'doi': extract_doi(pub['path']),
        'publication_types': ['2'],  # Assuming journal articles
        'publication': pub['subtitle'],
        'featured': is_featured
    }
    
    # Add featured image if available
    if is_featured:
        featured_data = featured_lookup[pub['path']]
        if 'image' in featured_data:
            image_filename = os.path.basename(featured_data['image'])
            front_matter['featured_image'] = {
                'filename': image_filename,
                'placement': 1,
                'focal_point': 'Center'
            }
            
            # Copy image file
            copy_image(featured_data['image'], f'assets/media/{image_filename}')
    
    # Write markdown file
    with open(f'content/publication/{slug}/index.md', 'w') as f:
        f.write('---\n')
        f.write(yaml.dump(front_matter))
        f.write('---\n\n')
        
        # Add description as content if available
        if is_featured and featured_data.get('description'):
            f.write(featured_data['description'])
```

This approach would ensure a systematic and consistent conversion of all publications from the Quarto format to Hugo's Academic theme format.