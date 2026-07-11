let glitchInterval = null;
let glitchElements = [];

function startGlitchEffect() {
const modal = document.querySelector('.modal');
if (!modal) return;

stopGlitchEffect();

modal.classList.add('glitching');
modal.style.filter = 'grayscale(1) contrast(1.35)';

const impactFlash = document.createElement('div');
impactFlash.style.cssText = `position: absolute; inset: -4px; pointer-events: none; z-index: 1000; background: #fff; mix-blend-mode: difference; opacity: 1; border-radius: inherit;`;
modal.appendChild(impactFlash);
setTimeout(() => { if (impactFlash.parentNode) impactFlash.remove(); }, 45);

const bigShake = 6;
modal.style.transform = `translate(${(Math.random()-0.5)*bigShake*2}px, ${(Math.random()-0.5)*bigShake*2}px)`;

const glitchWrapper = document.createElement('div');
glitchWrapper.className = 'glitch-wrapper';
glitchWrapper.style.cssText = `position: absolute; inset: -4px; pointer-events: none; z-index: 999; border-radius: inherit; overflow: hidden;`;
modal.appendChild(glitchWrapper);
glitchElements.push(glitchWrapper);

const ghostLayers = [
{ shiftX: '-6px', shiftY: '0px', opacity: 0.28, delay: 0, dur: 0.09 },
{ shiftX: '5px', shiftY: '1px', opacity: 0.22, delay: 0.03, dur: 0.11 },
{ shiftX: '-3px', shiftY: '2px', opacity: 0.2, delay: 0.06, dur: 0.08 },
{ shiftX: '4px', shiftY: '-2px', opacity: 0.17, delay: 0.09, dur: 0.1 }
];

ghostLayers.forEach((layer, index) => {
const div = document.createElement('div');
div.className = `glitch-ghost-${index}`;
div.style.cssText = `position: absolute; inset: 0; pointer-events: none; background: rgba(255,255,255,${layer.opacity}); transform: translate(${layer.shiftX}, ${layer.shiftY}); animation: ghostShift ${layer.dur}s steps(2) infinite alternate; animation-delay: ${layer.delay}s; border-radius: inherit; mix-blend-mode: difference;`;
glitchWrapper.appendChild(div);
glitchElements.push(div);
});

const invertLayer = document.createElement('div');
invertLayer.className = 'glitch-invert';
invertLayer.style.cssText = `position: absolute; inset: 0; pointer-events: none; background: #fff; mix-blend-mode: difference; animation: hardInvert 2.2s steps(1) infinite; border-radius: inherit;`;
glitchWrapper.appendChild(invertLayer);
glitchElements.push(invertLayer);

const scanline = document.createElement('div');
scanline.className = 'glitch-scanline';
scanline.style.cssText = `position: absolute; inset: 0; pointer-events: none; z-index: 1; background: repeating-linear-gradient( 0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.35) 2px, rgba(0,0,0,0.35) 3px, transparent 3px, transparent 5px ); animation: scanlineMove 0.35s linear infinite; border-radius: inherit; mix-blend-mode: overlay;`;
glitchWrapper.appendChild(scanline);
glitchElements.push(scanline);

const noise = document.createElement('div');
noise.className = 'glitch-noise';
noise.style.cssText = `position: absolute; inset: 0; pointer-events: none; z-index: 2; opacity: 0.2; background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3CfeColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.9 0"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E'); background-size: 96px 96px; animation: noiseShift 0.07s steps(2) infinite; border-radius: inherit; mix-blend-mode: overlay;`;
glitchWrapper.appendChild(noise);
glitchElements.push(noise);

for (let i = 0; i < 16; i++) {
const strip = document.createElement('div');
const top = Math.random() * 100;
const height = 2 + Math.random() * 14;
const width = 30 + Math.random() * 90;
const left = Math.random() * 60 - 20;
const dark = Math.random() > 0.5;
strip.style.cssText = `position: absolute; left: ${left}%; width: ${width}%; height: ${height}px; top: ${top}%; pointer-events: none; z-index: 5; background: ${dark ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.4)'}; mix-blend-mode: difference; animation: hardStripGlitch ${0.15 + Math.random() * 0.35}s steps(1) infinite; animation-delay: ${Math.random() * 1}s; border-radius: 0;`;
glitchWrapper.appendChild(strip);
glitchElements.push(strip);
}

for (let i = 0; i < 6; i++) {
const strip = document.createElement('div');
const left = Math.random() * 96;
const width = 3 + Math.random() * 10;
const height = 40 + Math.random() * 60;
const top = Math.random() * 40;
strip.style.cssText = `position: absolute; top: ${top}%; height: ${height}%; width: ${width}px; left: ${left}%; pointer-events: none; z-index: 5; background: rgba(255,255,255,0.3); mix-blend-mode: difference; animation: hardStripGlitchV ${0.2 + Math.random() * 0.3}s steps(1) infinite; animation-delay: ${Math.random() * 0.8}s; border-radius: 0;`;
glitchWrapper.appendChild(strip);
glitchElements.push(strip);
}

for (let i = 0; i < 6; i++) {
const size = 15 + Math.random() * 40;
const positions = [
{ top: 0, left: 0, clip: `polygon(0 0, ${size}px 0, 0 ${size}px)` },
{ top: 0, right: 0, clip: `polygon(100% 0, 100% ${size}px, calc(100% - ${size}px) 0)` },
{ bottom: 0, left: 0, clip: `polygon(0 100%, ${size}px 100%, 0 calc(100% - ${size}px))` },
{ bottom: 0, right: 0, clip: `polygon(100% 100%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%)` }
];
const pos = positions[i % positions.length];
const cornerDiv = document.createElement('div');
cornerDiv.style.cssText = `position: absolute; ${Object.keys(pos).filter(k => k !== 'clip').map(k => `${k}: ${pos[k]}`).join('; ')}; width: ${size + 8}px; height: ${size + 8}px; pointer-events: none; z-index: 6; background: rgba(0,0,0,0.5); clip-path: ${pos.clip}; animation: cornerGlitchHard ${0.3 + Math.random() * 0.4}s steps(1) infinite; animation-delay: ${Math.random() * 0.5}s; mix-blend-mode: difference;`;
glitchWrapper.appendChild(cornerDiv);
glitchElements.push(cornerDiv);
}

const QUARTER_MS = 60000 / 179;
glitchInterval = setInterval(() => {
const flash = document.createElement('div');
const white = Math.random() > 0.5;
flash.style.cssText = `position: absolute; inset: 0; pointer-events: none; z-index: 10; background: ${white ? '#fff' : '#000'}; border-radius: inherit; mix-blend-mode: difference; opacity: ${0.55 + Math.random() * 0.35};`;
glitchWrapper.appendChild(flash);
glitchElements.push(flash);
setTimeout(() => {
  if (flash.parentNode) flash.remove();
  const idx = glitchElements.indexOf(flash);
  if (idx > -1) glitchElements.splice(idx, 1);
}, 60);
}, QUARTER_MS);

let shakeCount = 0;
const shakeInterval = setInterval(() => {
if (!modal.classList.contains('glitching')) {
clearInterval(shakeInterval);
return;
}
const big = Math.random() > 0.85;
const intensity = big ? 4 : 0.8;
const x = (Math.random() - 0.5) * intensity * 2;
const y = (Math.random() - 0.5) * intensity * 2;
modal.style.transform = `translate(${x}px, ${y}px)`;
shakeCount++;
if (shakeCount > 100) shakeCount = 0;
}, 70);

glitchElements.push({
cleanup: () => {
clearInterval(shakeInterval);
modal.style.transform = '';
modal.style.filter = '';
}
});
}

function stopGlitchEffect() {
if (glitchInterval) {
clearInterval(glitchInterval);
glitchInterval = null;
}
const modal = document.querySelector('.modal');
if (modal) {
modal.classList.remove('glitching');
modal.style.transform = '';
modal.style.filter = '';
}
glitchElements.forEach(el => {
if (el && el.parentNode) {
el.parentNode.removeChild(el);
}
if (el && typeof el.cleanup === 'function') {
el.cleanup();
}
});
glitchElements = [];
}
