// ===== STORAGE.JS — работа с localStorage: какие дни открыты, какой статус у ячейки =====

function getToday() {
return new Date();
}

function getDateKey(date) {
return date.toISOString().split('T')[0];
}

function getOpenedDays() {
try {
const stored = localStorage.getItem('advent_varya2');
return stored ? JSON.parse(stored) : [];
} catch {
return [];
}
}

function saveOpenedDay(dateStr) {
const opened = getOpenedDays();
if (!opened.includes(dateStr)) {
opened.push(dateStr);
localStorage.setItem('advent_varya2', JSON.stringify(opened));
}
}

function getDayStatus(dateStr) {
const today = getToday();
const todayClean = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const cellDate = new Date(dateStr);
const cellClean = new Date(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
const opened = getOpenedDays().includes(dateStr);

if (opened) return 'opened';
if (cellClean > todayClean) return 'locked';
return 'available';
}
