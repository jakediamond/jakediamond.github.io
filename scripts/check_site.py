from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit,unquote
root=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self,path):
  super().__init__();self.links=[];self.ids=set();self.images=[];self.h1=0;self.feed(path.read_text())
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.add(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='a' and 'href' in a:self.links.append(a['href'])
  if tag in ('img','script') and 'src' in a:self.links.append(a['src'])
  if tag=='link' and 'href' in a:self.links.append(a['href'])
  if tag=='img':self.images.append(a)
files=['index.html','about.html','business.html','research.html'];issues=[]
for f in files:
 page=Page(root/f)
 if page.h1!=1:issues.append(f'{f}: expected one main heading, found {page.h1}')
 for href in page.links:
  u=urlsplit(href)
  if u.scheme or u.netloc:continue
  target=root/unquote(u.path) if u.path else root/f
  if not target.exists():issues.append(f'{f}: missing {href}')
  elif u.fragment and target.suffix=='.html' and u.fragment!='main-content':
   if unquote(u.fragment) not in Page(target).ids:issues.append(f'{f}: missing anchor {href}')
 for im in page.images:
  if not im.get('alt'):issues.append(f'{f}: missing image alt {im.get("src")}')
 print(f'{f}: checked {len(page.links)} local/external references, {len(page.images)} images')
print('\n'.join(issues) if issues else 'PASS: all local files, anchors, and image descriptions present')
raise SystemExit(bool(issues))
