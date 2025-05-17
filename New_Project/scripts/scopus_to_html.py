import csv
from pathlib import Path

# Path to the CSV file and output HTML file
CSV_PATH = Path(__file__).parent.parent / "scopus.csv"  # Absolute path from script location
OUTPUT_PATH = Path(__file__).parent.parent / "publications/generated_publications.html"

# HTML template for a single publication (Quarto/website style)
PUB_TEMPLATE = '''<div class="publication" data-year="{year}">
  <p class="publication-title">{title}</p>
  <p class="publication-authors">{authors}</p>
  <p class="publication-journal">{journal}, {year}</p>
  {doi_html}
</div>'''

def main():
    with open(CSV_PATH, encoding="utf-8") as f:
        reader = csv.DictReader(f)
        publications = []
        for row in reader:
            title = row.get("Title", "").strip()
            authors = row.get("Authors", "").strip()
            journal = row.get("Source title", "").strip()
            year = row.get("Year", "").strip()
            doi = row.get("DOI", "").strip()
            doi_html = f'<a href="https://doi.org/{doi}" target="_blank">DOI</a>' if doi else ''
            if title and authors and year:
                publications.append(PUB_TEMPLATE.format(
                    title=title,
                    authors=authors,
                    journal=journal,
                    year=year,
                    doi_html=doi_html
                ))
    # Sort by year descending
    publications.sort(reverse=True)
    # Write to HTML file
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as out:
        out.write('\n'.join(publications))
    print(f"Generated {len(publications)} publications to {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
