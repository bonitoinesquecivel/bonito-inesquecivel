const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, 'public');
const SRC_DIR = path.join(__dirname, 'src');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const withoutExt = fullPath.substring(0, fullPath.lastIndexOf('.'));
        const newPath = withoutExt + '.webp';

        try {
          await sharp(fullPath).webp({ quality: 80 }).toFile(newPath);
          console.log(`Converted: ${file} -> ${path.basename(newPath)}`);
          fs.unlinkSync(fullPath);
        } catch (err) {
          console.error(`Error converting ${file}:`, err);
        }
      }
    }
  }
}

function processSourceFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processSourceFiles(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.js', '.jsx', '.css', '.html'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Simple string replace for common extensions used in the project
        const newContent = content
          .replace(/\.jpg/g, '.webp')
          .replace(/\.jpeg/g, '.webp')
          .replace(/\.png/g, '.webp');

        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Updated references in: ${fullPath}`);
        }
      }
    }
  }
}

async function run() {
  console.log('Converting public directory images to WebP...');
  await processDirectory(PUBLIC_DIR);
  
  console.log('Updating file references in src...');
  processSourceFiles(SRC_DIR);

  // Also check index.html in public or root if needed
  const indexHtml = path.join(__dirname, 'index.html');
  if (fs.existsSync(indexHtml)) {
    let content = fs.readFileSync(indexHtml, 'utf8');
    const newContent = content.replace(/\.jpg/g, '.webp').replace(/\.jpeg/g, '.webp').replace(/\.png/g, '.webp');
    if (content !== newContent) {
      fs.writeFileSync(indexHtml, newContent, 'utf8');
      console.log('Updated index.html');
    }
  }
  
  console.log('Done!');
}

run();
