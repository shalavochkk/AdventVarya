// ===== FROST.JS — ледяной эффект для 13-го дня (метель, иней, лёгкое покачивание на ветру) =====

let frostElements = [];
let frostRAF = null;

function createFrostEffects() {
const modal = document.querySelector('.modal.frost');
if (!modal) return;

const oldEffects = document.querySelector('.frost-effects');
if (oldEffects) oldEffects.remove();

const effectsContainer = document.createElement('div');
effectsContainer.className = 'frost-effects';
effectsContainer.style.cssText = `
position: fixed;
inset: 0;
pointer-events: none;
z-index: 10000;
overflow: hidden;
`;
document.body.appendChild(effectsContainer);
frostElements.push(effectsContainer);

// Морозная дымка по краям экрана, наплывает плавно
const vignette = document.createElement('div');
vignette.style.cssText = `
position: fixed;
inset: 0;
background: radial-gradient(ellipse at center, transparent 30%, rgba(180, 220, 255, 0.16) 100%);
opacity: 0;
transition: opacity 1.1s ease;
pointer-events: none;
z-index: 9998;
`;
document.body.appendChild(vignette);
frostElements.push(vignette);
requestAnimationFrame(() => { vignette.style.opacity = '1'; });

const glow = document.createElement('div');
glow.style.cssText = `
position: fixed;
inset: 0;
background: radial-gradient(ellipse at center, rgba(160, 220, 255, 0.14) 0%, rgba(90, 160, 220, 0.07) 40%, transparent 70%);
animation: frostGlowPulse 4s ease-in-out infinite;
opacity: 0;
transition: opacity 1s ease;
pointer-events: none;
z-index: 10000;
`;
document.body.appendChild(glow);
frostElements.push(glow);
requestAnimationFrame(() => { glow.style.opacity = '1'; });

// Ледяные кристаллы/снежинки — медленный дрейф, покачивание, без рывков
const crystals = ['❄', '❅', '❆', '✻', '✽', '·'];
for (let i = 0; i < 18; i++) {
const el = document.createElement('div');
el.textContent = crystals[i % crystals.length];
const size = 14 + Math.random() * 22;
const dur = 8 + Math.random() * 6;
const delay = Math.random() * -dur;
el.style.cssText = `
position: fixed;
font-size: ${size}px;
color: rgba(210, 235, 255, ${0.35 + Math.random() * 0.35});
text-shadow: 0 0 16px rgba(160, 220, 255, 0.7), 0 0 32px rgba(120, 190, 255, 0.35);
animation: frostCrystalDrift ${dur}s ease-in-out ${delay}s infinite;
left: ${Math.random() * 100}%;
top: ${10 + Math.random() * 60}%;
pointer-events: none;
user-select: none;
z-index: 10000;
will-change: transform, opacity;
`;
document.body.appendChild(el);
frostElements.push(el);
}

// Снег падает мягкой волной сверху вниз, лёгкий снос ветром через переменную --drift
// Два слоя: дальний (мелкий, медленный) и ближний (крупный, быстрый, чуть смазанный) — для глубины метели
for (let i = 0; i < 70; i++) {
const flake = document.createElement('div');
const size = 1.5 + Math.random() * 3;
const dur = 5 + Math.random() * 5;
const delay = Math.random() * -dur;
const drift = (Math.random() - 0.5) * 110;
flake.style.setProperty('--drift', `${drift}px`);
flake.style.cssText += `
position: fixed;
width: ${size}px;
height: ${size}px;
border-radius: 50%;
background: radial-gradient(circle, #ffffff, #cfe9ff 70%, transparent 100%);
box-shadow: 0 0 ${size * 2.5}px rgba(200, 230, 255, 0.5);
animation: frostSnowFall ${dur}s linear ${delay}s infinite;
left: ${Math.random() * 100}%;
top: -5%;
opacity: 0.55;
pointer-events: none;
z-index: 10000;
will-change: transform, opacity;
`;
document.body.appendChild(flake);
frostElements.push(flake);
}

for (let i = 0; i < 35; i++) {
const flake = document.createElement('div');
const size = 4 + Math.random() * 6;
const dur = 2.5 + Math.random() * 2.5;
const delay = Math.random() * -dur;
const drift = (Math.random() - 0.5) * 220;
flake.style.setProperty('--drift', `${drift}px`);
flake.style.cssText += `
position: fixed;
width: ${size}px;
height: ${size}px;
border-radius: 50%;
background: radial-gradient(circle, #ffffff, #e4f3ff 60%, transparent 100%);
box-shadow: 0 0 ${size * 2}px rgba(210, 235, 255, 0.7);
animation: frostSnowFallFast ${dur}s linear ${delay}s infinite;
left: ${Math.random() * 100}%;
top: -8%;
filter: blur(${0.5 + Math.random() * 0.8}px);
pointer-events: none;
z-index: 10001;
will-change: transform, opacity;
`;
document.body.appendChild(flake);
frostElements.push(flake);
}

// Редкие, мягкие вспышки — будто свет играет на льду
const flashInterval = setInterval(() => {
if (!document.querySelector('.modal.frost')) {
clearInterval(flashInterval);
return;
}
const flash = document.createElement('div');
const fx = 15 + Math.random() * 70;
const fy = 15 + Math.random() * 70;
flash.style.cssText = `
position: fixed;
inset: 0;
background: radial-gradient(circle at ${fx}% ${fy}%,
rgba(200, 235, 255, ${0.08 + Math.random() * 0.09}) 0%,
transparent 55%);
pointer-events: none;
opacity: 0;
animation: frostFlashSoft 2.8s ease-out forwards;
z-index: 10000;
`;
document.body.appendChild(flash);
setTimeout(() => {
if (flash.parentNode) flash.remove();
}, 2800);
}, 3000);

frostElements.push({
cleanup: () => {
clearInterval(flashInterval);
}
});

// Порывы ветра с почти полным вайтаутом — метель иногда закрывает обзор
const gustInterval = setInterval(() => {
if (!document.querySelector('.modal.frost')) {
clearInterval(gustInterval);
return;
}
const gust = document.createElement('div');
const gustDur = 1.6 + Math.random() * 1.2;
gust.style.cssText = `
position: fixed;
inset: -10%;
background: linear-gradient(100deg, transparent 0%, rgba(235, 248, 255, 0.85) 50%, transparent 100%);
pointer-events: none;
opacity: 0;
z-index: 10002;
animation: frostWhiteout ${gustDur}s ease-in-out forwards;
`;
document.body.appendChild(gust);
setTimeout(() => {
if (gust.parentNode) gust.remove();
}, gustDur * 1000 + 100);
}, 7000 + Math.random() * 5000);

frostElements.push({
cleanup: () => {
clearInterval(gustInterval);
}
});

// Сияющие полосы света, будто северное сияние — дышат медленно и не в фазе
for (let i = 0; i < 6; i++) {
const beam = document.createElement('div');
const x = (i / 6) * 100 + (Math.random() * 6 - 3);
const dur = 4 + Math.random() * 3;
const delay = Math.random() * -dur;
beam.style.cssText = `
position: fixed;
top: 0;
left: ${x}%;
width: ${4 + Math.random() * 6}px;
height: ${25 + Math.random() * 45}%;
background: linear-gradient(to bottom, rgba(160, 220, 255, 0.16), transparent);
box-shadow: 0 0 50px rgba(160, 220, 255, 0.12);
animation: frostBeamBreathe ${dur}s ease-in-out ${delay}s infinite;
pointer-events: none;
z-index: 9999;
will-change: opacity, transform;
`;
document.body.appendChild(beam);
frostElements.push(beam);
}

// Порывистое покачивание на ветру — сцена мягко "дышит", но иногда бросает резче, как при порыве
let t = 0;
const driftLoop = () => {
t += 0.006;
const dx = Math.sin(t) * 5 + Math.sin(t * 2.7 + 1.3) * 3.5 + Math.sin(t * 0.31) * 4;
const dy = Math.cos(t * 0.6) * 2;
effectsContainer.style.transform = `translate(${dx}px, ${dy}px)`;
frostRAF = requestAnimationFrame(driftLoop);
};
driftLoop();
}

function startFrostEffect() {
stopFrostEffect();

const modal = document.querySelector('.modal');
if (modal) {
modal.classList.add('frost');
}

createFrostEffects();

localStorage.setItem('advent_varya2_day13_frost', 'true');
}

function stopFrostEffect() {
const modal = document.querySelector('.modal');
if (modal) {
modal.classList.remove('frost');
modal.style.transform = '';
}

if (frostRAF) {
cancelAnimationFrame(frostRAF);
frostRAF = null;
}

frostElements.forEach(el => {
if (el && el.parentNode) {
el.parentNode.removeChild(el);
}
if (el && typeof el.cleanup === 'function') {
el.cleanup();
}
});
frostElements = [];

const effectsContainer = document.querySelector('.frost-effects');
if (effectsContainer && effectsContainer.parentNode) {
effectsContainer.parentNode.removeChild(effectsContainer);
}
}