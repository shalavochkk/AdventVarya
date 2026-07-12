// ===== DAY-GLOW.JS — лёгкая подсветка карточки (класс .red) для дней 4, 8, 9, 11 =====
// (playAudio теперь вызывается из modal.js в openModal, не отсюда)
function startDay4Effect(card) {
if (!card) return;
card.classList.add('red');
console.log('🔴 Day 4 effect START');
}

function startDay8Effect(card) {
if (!card) return;
card.classList.add('red');
console.log('🔴 Day 8 effect START');
}

function startDay9Effect(card) {
if (!card) return;
card.classList.add('red');
console.log('🔴 Day 9 effect START');
}

function startDay11Effect(card) {
if (!card) return;
card.classList.add('red');
console.log('🔴 Day 11 effect START');
}

function startDay13Effect(card) {
if (!card) return;
card.classList.add('frost');
console.log('❄️ Day 13 effect START');
}
