library(whisker)
library(httr)
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

links <- c("http://jakediamond.science",
           "http://www.jakediamond.science",
           "http://jakediamond.science/index.html", 
           "http://jakediamond.science/about.html",
           "http://jakediamond.science/research.html")


map_links <- function(l) {
  tmp <- GET(l)
  d <- tmp$headers[['last-modified']]
  
  list(loc=l,
       lastmod=format(as.Date(d,format="%a, %d %b %Y %H:%M:%S")),
       changefreq="monthly",
       priority="0.8")
}

links <- lapply(links, map_links)

cat(whisker.render(tpl))
