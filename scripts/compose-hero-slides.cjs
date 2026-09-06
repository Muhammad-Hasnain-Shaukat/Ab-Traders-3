const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const heroDir = path.join(rootDir, 'public', 'images', 'hero');

if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

// Background for theme: Soft clean pistachio tint
const PISTACHIO_BG = { r: 244, g: 247, b: 242 }; // #F4F7F2

async function processSlide1() {
  const srcPath = path.join(rootDir, 'pexels-mearlywan-307951439-16378446.jpg');

  // 1. Mobile (800x1060): Kept identical (PC view only adjustment requested)
  await sharp(srcPath)
    .resize(800, 1060, {
      fit: 'cover',
      position: 'center'
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(heroDir, 'hero-slide-1-mobile.jpg'));
  console.log('Generated hero-slide-1-mobile.jpg');

  // 2. Desktop (1600x900): Shifted a bit UP and a bit LEFT
  // Extracting from top: 1600 elevates the bottles, full width 4340 ensures natural right reach
  const photoBuf = await sharp(srcPath)
    .extract({ left: 0, top: 1600, width: 4340, height: 4700 })
    .resize({ height: 900, fit: 'contain' })
    .toBuffer();

  const photoMeta = await sharp(photoBuf).metadata();
  const photoW = photoMeta.width;
  const leftPos = Math.max(0, 1600 - photoW);

  const seamSvg = Buffer.from(`
    <svg width="280" height="900">
      <defs>
        <linearGradient id="seam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(244, 247, 242)" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(244, 247, 242)" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#seam)" />
    </svg>
  `);

  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: PISTACHIO_BG
    }
  })
  .composite([
    { input: photoBuf, left: leftPos, top: 0 },
    { input: seamSvg, left: leftPos - 10, top: 0 }
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(heroDir, 'hero-slide-1-desktop.jpg'));

  console.log('Generated hero-slide-1-desktop.jpg (shifted a bit up and left)');
}

async function processSlide(srcFile, outDesktop, outMobile, bgRgb, seamWidth = 250) {
  const srcPath = path.join(rootDir, srcFile);

  // 1. Mobile (800x1060)
  await sharp(srcPath)
    .resize(800, 1060, {
      fit: 'cover',
      position: 'center'
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(heroDir, outMobile));
  console.log(`Generated ${outMobile}`);

  // 2. Desktop (1600x900)
  const photoBuf = await sharp(srcPath)
    .resize({ height: 900, fit: 'contain' })
    .toBuffer();

  const photoMeta = await sharp(photoBuf).metadata();
  const photoW = photoMeta.width;
  const leftPos = Math.max(0, 1600 - photoW);

  const seamSvg = Buffer.from(`
    <svg width="${seamWidth}" height="900">
      <defs>
        <linearGradient id="seam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b})" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b})" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="${seamWidth}" height="100%" fill="url(#seam)" />
    </svg>
  `);

  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: bgRgb
    }
  })
  .composite([
    { input: photoBuf, left: leftPos, top: 0 },
    { input: seamSvg, left: Math.max(0, leftPos - 20), top: 0 }
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(heroDir, outDesktop));

  console.log(`Generated ${outDesktop}`);
}

async function run() {
  console.log('Composing hero slides...');

  // Slide 1: Golden Botanicals (moved a bit up and a bit left on PC view)
  await processSlide1();

  // Slide 2: Royal Purple Luxury Cosmetic Glass Collection on Pistachio
  await processSlide(
    'pmv-chamara-OXYOFT9gTOE-unsplash.jpg',
    'hero-slide-2-desktop.jpg',
    'hero-slide-2-mobile.jpg',
    { r: 194, g: 196, b: 157 },
    240
  );

  // Slide 3: Frosted Droppers & Glass Bottles on Natural Zen Stones
  await processSlide(
    'beauty-products-recipients-arrangement-beige-stones.jpg',
    'hero-slide-3-desktop.jpg',
    'hero-slide-3-mobile.jpg',
    { r: 180, g: 119, b: 74 },
    240
  );

  console.log('Done composing all hero slides!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
