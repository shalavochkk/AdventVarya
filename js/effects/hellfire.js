// ===== HELLFIRE.JS — адский эффект для 11-го дня (огонь, руны, тряска) =====
let hellfireInterval = null;
let hellfireElements = [];
let hellfireRAF = null;

function createHellfireEffects() {
const modal = document.querySelector('.modal.hellfire');
if (!modal) return;

const oldEffects = document.querySelector('.hellfire-effects');
if (oldEffects) oldEffects.remove();

const effectsContainer = document.createElement('div');
effectsContainer.className = 'hellfire-effects';
effectsContainer.style.cssText = `
position: fixed;
inset: 0;
pointer-events: none;
z-index: 10000;
overflow: hidden;
`;
document.body.appendChild(effectsContainer);
hellfireElements.push(effectsContainer);

// Плавное затемнение-виньетка появляется первой, чтобы сцена не «прыгала» в глаза
const vignette = document.createElement('div');
vignette.style.cssText = `
position: fixed;
inset: 0;
background: radial-gradient(ellipse at center, transparent 35%, rgba(10, 2, 2, 0.55) 100%);
opacity: 0;
transition: opacity 1.1s ease;
pointer-events: none;
z-index: 9998;
`;
document.body.appendChild(vignette);
hellfireElements.push(vignette);
requestAnimationFrame(() => { vignette.style.opacity = '1'; });

const glow = document.createElement('div');
glow.style.cssText = `
position: fixed;
inset: 0;
background: radial-gradient(ellipse at center, rgba(255, 60, 0, 0.16) 0%, rgba(139, 0, 0, 0.08) 40%, transparent 70%);
animation: hellGlowPulse 3.2s ease-in-out infinite;
opacity: 0;
transition: opacity 1s ease;
pointer-events: none;
z-index: 10000;
`;
document.body.appendChild(glow);
hellfireElements.push(glow);
requestAnimationFrame(() => { glow.style.opacity = '1'; });

// Руны — плавный дрейф, без резких скачков, каждая на своей орбите
const runes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛊ', 'ᛏ'];
for (let i = 0; i < 16; i++) {
const runeEl = document.createElement('div');
runeEl.textContent = runes[i % runes.length];
const size = 22 + Math.random() * 30;
const dur = 7 + Math.random() * 5;
const delay = Math.random() * -dur;
runeEl.style.cssText = `
position: fixed;
font-size: ${size}px;
color: rgba(255, ${90 + Math.random() * 60}, ${20 + Math.random() * 30}, ${0.22 + Math.random() * 0.28});
text-shadow: 0 0 24px rgba(255, 70, 0, 0.5), 0 0 50px rgba(255, 30, 0, 0.25);
animation: hellRuneDrift ${dur}s ease-in-out ${delay}s infinite;
left: ${Math.random() * 100}%;
top: ${20 + Math.random() * 70}%;
pointer-events: none;
user-select: none;
font-family: "UnifrakturMaguntia", serif;
z-index: 10000;
will-change: transform, opacity;
`;
document.body.appendChild(runeEl);
hellfireElements.push(runeEl);
}

// Угли поднимаются мягкой волной, с покачиванием по синусоиде, а не рандомным дёрганьем
for (let i = 0; i < 45; i++) {
const ember = document.createElement('div');
const size = 2.5 + Math.random() * 5;
const dur = 4 + Math.random() * 4;
const delay = Math.random() * -dur;
const drift = (Math.random() - 0.5) * 60;
ember.style.setProperty('--drift', `${drift}px`);
ember.style.cssText += `
position: fixed;
width: ${size}px;
height: ${size}px;
border-radius: 50%;
background: radial-gradient(circle, #ffb27a, #ff5a1f 60%, transparent 100%);
box-shadow: 0 0 ${size * 3}px rgba(255, 90, 0, 0.55), 0 0 ${size * 6}px rgba(255, 40, 0, 0.25);
animation: hellEmberRise ${dur}s ease-in-out ${delay}s infinite;
left: ${Math.random() * 100}%;
top: 100%;
pointer-events: none;
z-index: 10000;
will-change: transform, opacity;
`;
document.body.appendChild(ember);
hellfireElements.push(ember);
}

// Мягкие вспышки-зарницы вдалеке, редкие и плавные, а не стробоскоп
const flashInterval = setInterval(() => {
if (!document.querySelector('.modal.hellfire')) {
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
rgba(255, 100, 40, ${0.08 + Math.random() * 0.1}) 0%,
transparent 55%);
pointer-events: none;
opacity: 0;
animation: hellFlashSoft 2.4s ease-out forwards;
z-index: 10000;
`;
document.body.appendChild(flash);
setTimeout(() => {
if (flash.parentNode) flash.remove();
}, 2400);
}, 2600);

hellfireElements.push({
cleanup: () => {
clearInterval(flashInterval);
}
});

// Столбы света дышат медленно и рассинхронизированно
for (let i = 0; i < 8; i++) {
const pillar = document.createElement('div');
const x = (i / 8) * 100 + (Math.random() * 6 - 3);
const dur = 3 + Math.random() * 3;
const delay = Math.random() * -dur;
pillar.style.cssText = `
position: fixed;
bottom: 0;
left: ${x}%;
width: ${3 + Math.random() * 5}px;
height: ${25 + Math.random() * 45}%;
background: linear-gradient(to top, rgba(255, 70, 0, 0.16), transparent);
box-shadow: 0 0 50px rgba(255, 60, 0, 0.12);
animation: hellPillarBreathe ${dur}s ease-in-out ${delay}s infinite;
pointer-events: none;
z-index: 9999;
will-change: opacity, transform;
`;
document.body.appendChild(pillar);
hellfireElements.push(pillar);
}

// Едва заметное покачивание всей сцены камерой — не тряска, а плавный "дых"
let t = 0;
const driftLoop = () => {
t += 0.006;
const dx = Math.sin(t) * 3;
const dy = Math.cos(t * 0.7) * 2;
effectsContainer.style.transform = `translate(${dx}px, ${dy}px)`;
hellfireRAF = requestAnimationFrame(driftLoop);
};
driftLoop();
}

function startHellfireEffect() {
stopHellfireEffect();

const modal = document.querySelector('.modal');
if (modal) {
modal.classList.add('hellfire');
}

createHellfireEffects();
playAudio('day11');

localStorage.setItem('advent_varya2_day11_hell', 'true');
}

function stopHellfireEffect() {
const modal = document.querySelector('.modal');
if (modal) {
modal.classList.remove('hellfire');
modal.style.transform = '';
}

if (hellfireRAF) {
cancelAnimationFrame(hellfireRAF);
hellfireRAF = null;
}

hellfireElements.forEach(el => {
if (el && el.parentNode) {
el.parentNode.removeChild(el);
}
if (el && typeof el.cleanup === 'function') {
el.cleanup();
}
});
hellfireElements = [];

const effectsContainer = document.querySelector('.hellfire-effects');
if (effectsContainer && effectsContainer.parentNode) {
effectsContainer.parentNode.removeChild(effectsContainer);
}

document.querySelectorAll('.hellfire-glow-full').forEach(el => el.remove());

stopAudio('day11');
}
