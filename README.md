# Jake Diamond's website

An R Markdown site published with GitHub Pages at <https://jakediamond.science>.

## Edit and build

Edit `index.Rmd`, `about.Rmd`, `research.Rmd`, and `business.Rmd`. Shared design is in `styles.css`, the footer in `footer.html`, and the research topic filter and accessibility enhancements in `site.js`. Navigation and render options live in `_site.yml`.

From the repository root, run `source("build.R")` in RStudio, or `Rscript build.R` with Pandoc available. This requires the `rmarkdown` R package. If Pandoc is bundled with RStudio or Quarto but not detected in a terminal, set `RSTUDIO_PANDOC` to its containing directory. Commit the generated HTML and any generated `site_libs` dependencies together with source changes: GitHub Pages serves these files directly.

Run `python3 scripts/check_site.py` to check local assets, page anchors, image alternatives, and heading structure. To preview, run `python3 -m http.server 8765 --bind 127.0.0.1`, then open <http://127.0.0.1:8765>.

The research topic index uses a small client-side filter. The full research text and topic links remain available without JavaScript. Add a topic's descriptive keywords to its `data-keywords` attribute in `research.Rmd` to make it searchable.

Changes to the deployment branch can update the public site. Review redesigns on a separate branch before merging.
