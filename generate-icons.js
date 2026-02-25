const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Ensure icons directory exists
if (!fs.existsSync('./icons')) {
    fs.mkdirSync('./icons');
}

sizes.forEach(size => {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Draw gear icon
    ctx.fillStyle = 'white';
    ctx.font = `${size * 0.6}px "Font Awesome 6 Free"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚙️', size/2, size/2);
    
    // Save icon
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`./icons/icon-${size}x${size}.png`, buffer);
    
    console.log(`Generated icon-${size}x${size}.png`);
});

console.log('All icons generated successfully!');
