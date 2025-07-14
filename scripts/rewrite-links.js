const fs = require('fs');
const path = require('path');

const buildDir = process.argv[2] || path.join(__dirname, '../.output/public');
const domain = 'https://www.kunstkanne.de';

function rewriteLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Ersetze alle internen Links (href="/xyz") durch die Live-Domain
  content = content.replace(/href="\/(?!\/|#)([^"]*)"/g, `href="${domain}/$1"`);
  // Optional: src="/xyz" (z.B. für Bilder)
  content = content.replace(/src="\/(?!\/|#)([^"]*)"/g, `src="${domain}/$1"`);
  fs.writeFileSync(filePath, content, 'utf8');
}

function rewriteNuxtPathsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Ersetze alle /_nuxt/ durch /kunstkanne/_nuxt/
  content = content.replace(/\/_nuxt\//g, '/kunstkanne/_nuxt/');
  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.html')) {
      rewriteLinksInFile(fullPath);
      rewriteNuxtPathsInFile(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.json')) {
      rewriteNuxtPathsInFile(fullPath);
    }
  });
}

walk(buildDir);
console.log('Alle internen Links wurden auf die Live-Domain umgebogen.'); 