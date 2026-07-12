// ===== MODAL.JS — модалка с текстом/картинкой дня: открытие, закрытие, слушатели =====

const overlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');
const modalKicker = document.getElementById('modalKicker');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');

function openModal(dateStr) {
const data = adventData[dateStr];
if (!data) return;

const day = new Date(dateStr).getDate();
const opened = getOpenedDays().includes(dateStr);

modalImage.style.backgroundImage = `url(${data.image})`;
modalKicker.textContent = `✦ ВРАТА ${String(day).padStart(2, '0')} · ${opened ? 'ОТКРЫТЫ' : 'ДОСТУПНЫ'}`;
modalTitle.textContent = `День ${day} июля`;
modalText.textContent = data.text;

overlay.classList.add('active');
document.body.style.overflow = 'hidden';

// ===== ИСПРАВЛЕНО: playAudio вызывается здесь, в контексте клика =====
if (day === 4) {
playAudio('day4');
}
if (day === 8) {
playAudio('day8');
}
if (day === 9) {
playAudio('day9');
setTimeout(() => {
startGlitchEffect();
}, 2900);
setTimeout(() => {
stopGlitchEffect();
}, 24000);
}

if (day === 11) {
startHellfireEffect();
}

if (day === 13) {
startFrostEffect();
}
}

function closeModal() {
overlay.classList.remove('active');
document.body.style.overflow = '';

stopAllAudio();
stopGlitchEffect();
stopHellfireEffect();
stopFrostEffect();
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') closeModal();
});
