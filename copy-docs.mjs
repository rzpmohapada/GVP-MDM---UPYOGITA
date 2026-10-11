import fs from 'fs';
import path from 'path';

const srcDir = './dist';
const destDir = './docs';

if (fs.existsSync(srcDir)) {
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  fs.cpSync(srcDir, destDir, { recursive: true });
  fs.writeFileSync(path.join(srcDir, '.nojekyll'), '');
  fs.writeFileSync(path.join(destDir, '.nojekyll'), '');
  console.log('✓ Successfully copied dist/ to docs/ and created .nojekyll for GitHub Pages');
}
