# Run from the repository root (or use RStudio's Knit button for a single page).
if (!requireNamespace("rmarkdown", quietly = TRUE)) {
  stop('Install the build dependency first: install.packages("rmarkdown")')
}
if (!rmarkdown::pandoc_available()) {
  stop("Pandoc is required. Run this script in RStudio or set RSTUDIO_PANDOC to the directory containing Pandoc.")
}
for (page in c("index.Rmd", "about.Rmd", "business.Rmd", "research.Rmd")) {
  rmarkdown::render(page, quiet = TRUE)
}
