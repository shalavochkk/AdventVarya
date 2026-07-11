function renderGrid() {
const grid = document.getElementById('grid');
grid.innerHTML = '';

const { year, month, days } = CONFIG;

const day4DateStr = new Date(2026, 6, 4).toISOString().split('T')[0];
const day8DateStr = new Date(2026, 6, 10).toISOString().split('T')[0];
const day9DateStr = new Date(2026, 6, 9).toISOString().split('T')[0];
const day11DateStr = new Date(2026, 6, 11).toISOString().split('T')[0];

for (let d = 1; d <= days; d++) {
const dateObj = new Date(year, month, d);
const dateStr = getDateKey(dateObj);
const status = getDayStatus(dateStr);
const data = adventData[dateStr];
const opened = status === 'opened';
const available = status === 'available';

const island = document.createElement('div');
island.className = `island ${status}`;
island.dataset.date = dateStr;

if (dateStr === day4DateStr && (opened || localStorage.getItem('advent_varya2_day4_red') === 'true')) {
island.classList.add('red');
}
if (dateStr === day8DateStr && (opened || localStorage.getItem('advent_varya2_day8_red') === 'true')) {
island.classList.add('red');
}
if (dateStr === day9DateStr && (opened || localStorage.getItem('advent_varya2_day9_red') === 'true')) {
island.classList.add('red');
}
if (dateStr === day11DateStr && (opened || localStorage.getItem('advent_varya2_day11_hell') === 'true')) {
island.classList.add('hellfire');
}

if (opened && data) {
const preview = document.createElement('div');
preview.className = 'preview';
preview.style.backgroundImage = `url(${data.image})`;
island.appendChild(preview);
}

const day = document.createElement('div');
day.className = 'day';
day.textContent = String(d).padStart(2, '0');

const state = document.createElement('div');
state.className = 'state';

const label = document.createElement('span');
if (opened) label.textContent = 'открыто';
else if (available) label.textContent = 'сегодня';
else label.textContent = 'скоро';

const icon = document.createElement('i');
icon.className = `icon ${opened ? 'heart' : 'lock'}`;
state.appendChild(label);
state.appendChild(icon);

island.appendChild(day);
island.appendChild(state);

island.style.animationDelay = `${d * 0.025}s`;

island.addEventListener('click', () => handleDayClick(dateStr));

grid.appendChild(island);
}
updateProgress();
}

function updateProgress() {
const { days } = CONFIG;
const opened = getOpenedDays().length;
const available = document.querySelectorAll('.island.available').length;
const locked = days - opened - available;
document.getElementById('progress').textContent =
`✦ ${opened} открыто · ${available} ждут · ${locked} спят`;
}

function handleDayClick(dateStr) {
const status = getDayStatus(dateStr);
const day4DateStr = new Date(2026, 6, 4).toISOString().split('T')[0];
const day8DateStr = new Date(2026, 6, 10).toISOString().split('T')[0];
const day9DateStr = new Date(2026, 6, 9).toISOString().split('T')[0];
const day11DateStr = new Date(2026, 6, 11).toISOString().split('T')[0];

if (status === 'locked') {
const target = document.querySelector(`.island[data-date="${dateStr}"]`);
if (target) {
target.style.animation = 'shake 0.4s ease';
setTimeout(() => target.style.animation = '', 400);
}
return;
}

if (status === 'available') {
saveOpenedDay(dateStr);

if (dateStr === day4DateStr) localStorage.setItem('advent_varya2_day4_red', 'true');
if (dateStr === day8DateStr) localStorage.setItem('advent_varya2_day8_red', 'true');
if (dateStr === day9DateStr) localStorage.setItem('advent_varya2_day9_red', 'true');
if (dateStr === day11DateStr) localStorage.setItem('advent_varya2_day11_hell', 'true');

renderGrid();
openModal(dateStr);

// Эффекты карточек (без playAudio — он теперь в openModal)
if (dateStr === day4DateStr) {
const card = document.querySelector(`.island[data-date="${dateStr}"]`);
if (card) startDay4Effect(card);
}
if (dateStr === day8DateStr) {
const card = document.querySelector(`.island[data-date="${dateStr}"]`);
if (card) startDay8Effect(card);
}
if (dateStr === day9DateStr) {
const card = document.querySelector(`.island[data-date="${dateStr}"]`);
if (card) startDay9Effect(card);
}
if (dateStr === day11DateStr) {
const card = document.querySelector(`.island[data-date="${dateStr}"]`);
if (card) startDay11Effect(card);
}
return;
}

if (status === 'opened') {
openModal(dateStr);
}
}
