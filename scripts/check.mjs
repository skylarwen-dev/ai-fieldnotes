import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const notes=JSON.parse(fs.readFileSync(path.join(root,'content/notes.json'),'utf8'));
const slugs=new Set();
for(const n of notes){
  for(const key of ['slug','title','category','level','minutes','date','summary','takeaway','sections','sources','related']) assert.ok(n[key],`Missing ${key}: ${n.slug}`);
  assert.match(n.slug,/^[a-z0-9]+(?:-[a-z0-9]+)*$/); assert.ok(!slugs.has(n.slug),`Duplicate slug ${n.slug}`); slugs.add(n.slug);
  assert.ok(['文字生成','圖像生成','知識整理'].includes(n.category));
  assert.ok(Number.isInteger(n.minutes)&&n.minutes>0);
  assert.match(n.date,/^\d{4}-\d{2}-\d{2}$/); assert.ok(!Number.isNaN(Date.parse(n.date)));
  assert.deepEqual(n.sections.map(s=>s.heading),['核心概念','實作範例','常見誤區','動手練習']);
  assert.ok(n.sections.every(s=>s.body.trim().length>0));
  assert.ok(n.sources.length>0);for(const s of n.sources){assert.ok(s.title);if(s.url)assert.match(s.url,/^https:\/\//);}
}
for(const n of notes)for(const slug of n.related)assert.ok(slugs.has(slug)&&slug!==n.slug,`Bad related slug ${slug}`);
const dist=path.join(root,'dist');
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(p,e.name)):[path.join(p,e.name)]);
const html=walk(dist).filter(p=>p.endsWith('.html'));
assert.equal(html.length,notes.length+2,'Page count does not match content');
for(const file of html){
 const text=fs.readFileSync(file,'utf8'); assert.ok(!text.includes('{{'),'Unresolved template');assert.ok(text.includes('lang="zh-Hant"'));
 const ids=[...text.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,`Duplicate id in ${file}`);
 for(const [,ref]of text.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|mailto:|data:)/.test(ref))continue;
  const [rel,fragment]=ref.split('#');const target=rel?path.resolve(path.dirname(file),decodeURIComponent(rel)):file;
  assert.ok(target.startsWith(dist+path.sep)||target===dist,`Link escapes dist: ${ref}`);
  assert.ok(fs.existsSync(target),`Broken link in ${file}: ${ref}`);
  if(fragment&&target.endsWith('.html'))assert.ok(fs.readFileSync(target,'utf8').includes(`id="${fragment}"`),`Broken anchor: ${ref}`);
 }
}
console.log(`PASS: ${notes.length} article schemas, unique slugs, related notes, ${html.length} pages, local assets and anchors.`);
