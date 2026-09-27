# Jake Diamond's website

An R Markdown site published with GitHub Pages at <https://jakediamond.science>.

## Edit and build

Edit `index.Rmd`, `about.Rmd`, `research.Rmd`, and `business.Rmd`. Shared design is in `styles.css`, the footer in `footer.html`, and accessibility enhancements in `site.js`. Header navigation lives in `site-header.html`; render options live in `_site.yml`.

From the repository root, run `source("build.R")` in RStudio, or `Rscript build.R` with Pandoc available. This requires the `rmarkdown` R package. If Pandoc is bundled with RStudio or Quarto but not detected in a terminal, set `RSTUDIO_PANDOC` to its containing directory. Commit the generated HTML and any generated `site_libs` dependencies together with source changes: GitHub Pages serves these files directly.

Run `python3 scripts/check_site.py` to check local assets, page anchors, image alternatives, and heading structure. To preview, run `python3 -m http.server 8765 --bind 127.0.0.1`, then open <http://127.0.0.1:8765>.

The current biography reflects the UNESCO role. The existing CV PDF is retained as an earlier version and is labeled accordingly.

Research publications are grouped by subject in `research.Rmd`, with citations, short summaries, DOI links, and available local PDFs. The bibliography was reconciled against ORCID and publisher records in September 2026: 22 journal articles, with preprints and supplements not counted separately. Years follow journal issue dates where available.

Contact addresses should be written as `name [at] domain [dot] com`, without raw email addresses or `mailto:` links. This reduces simple address harvesting but is not a guarantee against spam. Personal email is omitted.

Changes to the deployment branch can update the public site. Review redesigns on a separate branch before merging.
