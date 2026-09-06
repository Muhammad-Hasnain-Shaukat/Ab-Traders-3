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

async function processSlide(srcFile, outDesktop, outMobile, bgRgb, seamWidth = 250) {
  const srcPath = path.join(rootDir, srcFile);

  // 1. Mobile (800x1060): Sharp, high-res, perfectly framed for mobile screen
  await sharp(srcPath)
    .resize(800, 1060, {
      fit: 'cover',
      position: 'center'
    })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(heroDir, outMobile));
  console.log(`Generated ${outMobile}`);

  // 2. Desktop (1600x900):
  // Resize photo to height 900
  const photoBuf = await sharp(srcPath)
    .resize({ height: 900, fit: 'contain' })
    .toBuffer();

  const photoMeta = await sharp(photoBuf).metadata();
  const photoW = photoMeta.width;
  const leftPos = Math.max(0, 1600 - photoW);

  // Gradient strip over the seam: from bgRgb opaque to bgRgb transparent
  const seamSvg = Buffer.from(`
    <svg width="${seamWidth}" height="900">
      <defs>
        <linearGradient id="seam" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgb(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b})" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b})" stop-opacity="0" />
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
  console.log('Composing all 3 hero slides for Pistachio theme...');

  // Slide 1: Golden Botanicals & Pump Dispensers - smooth transition to light pistachio cream
  await processSlide(
    'pexels-mearlywan-307951439-16378446.jpg',
    'hero-slide-1-desktop.jpg',
    'hero-slide-1-mobile.jpg',
    PISTACHIO_BG,
    280
  );

  // Slide 2: Royal Purple Luxury Cosmetic Glass Collection on Pistachio
  // Sampled matching pistachio background: rgb(194, 196, 157)
  await processSlide(
    'pmv-chamara-OXYOFT9gTOE-unsplash.jpg',
    'hero-slide-2-desktop.jpg',
    'hero-slide-2-mobile.jpg',
    { r: 194, g: 196, b: 157 },
    240
  );

  // Slide 3: Frosted Droppers & Glass Bottles on Natural Zen Stones
  // Sampled matching warm stone background: rgb(180, 119, 74)
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
