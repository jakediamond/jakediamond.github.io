library(whisker)
library(httr)
library(lubridate)
tpl <- '
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{{#links}}
<url>
<loc>{{{loc}}}</loc>
<lastmod>{{{lastmod}}}</lastmod>
<changefreq>{{{changefreq}}}</changefreq>
<priority>{{{priority}}}</priority>
</url>
{{/links}}
</urlset>
'

links <- c("https://jakediamond.science",
           # "https://www.jakediamond.science",
           "https://jakediamond.science/index.html", 
           "https://jakediamond.science/about.html",
           "https://jakediamond.science/research.html")


map_links <- function(l) {
  tmp <- GET(l)
  d <- tmp$headers[['last-modified']]
  
  list(loc=l,
       lastmod=as_date(dmy_hms(d)),
       changefreq="monthly",
       priority="0.8")
}

links <- lapply(links, map_links)

cat(whisker.render(tpl))
