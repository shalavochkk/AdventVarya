// ===== MAIN.JS — точка входа: инициализация после загрузки страницы =====

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
initAudio();
renderGrid();
});

console.log(`✦ Адвент для ${CONFIG.name} загружен (${CONFIG.month + 1}/${CONFIG.year})`);
