import fs from 'node:fs';
import path from 'node:path';

// 只检查可从本地文件验证的基础结构，不把它当成线上 SEO 或发布验收。
const rootDir = path.resolve(import.meta.dirname, '..');
const htmlFiles = fs.readdirSync(rootDir).filter((file) => file.endsWith('.html'));
const failures = [];

for (const file of htmlFiles) {
  const body = fs.readFileSync(path.join(rootDir, file), 'utf8');
  const titleCount = (body.match(/<title>/g) ?? []).length;
  const h1Count = (body.match(/<h1[ >]/g) ?? []).length;
  const descriptionCount = (body.match(/<meta name="description"/g) ?? []).length;

  if (titleCount !== 1) failures.push(`${file}: title 数量应为 1，实际为 ${titleCount}`);
  if (h1Count !== 1) failures.push(`${file}: H1 数量应为 1，实际为 ${h1Count}`);
  if (descriptionCount !== 1) failures.push(`${file}: description 数量应为 1，实际为 ${descriptionCount}`);
  if (!body.includes('assets/site.css')) failures.push(`${file}: 缺少共享样式表`);
  if (!body.includes('assets/site.js')) failures.push(`${file}: 缺少共享脚本`);
}

if (failures.length > 0) {
  console.error('静态站校验失败：');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`静态站校验通过：${htmlFiles.length} 个页面均含唯一 title、description、H1 和共享资源。`);
