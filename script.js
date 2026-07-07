const CONFIG = {
  year: 2026,
  month: 6,
  days: 32,
  name: 'Варюши'
};

const adventData = {};
const DAY4_AUDIO_ID = 'day4-audio';
const DAY9_AUDIO_ID = 'day9-audio';

function generateAdventData() {
  const { year, month, days } = CONFIG;

  const messages = [
    'Был ошибкой, стал бонусом. Ты мое солнышко блин!!!',
    'Первый день июля. А я люблю тебя до ужаса сильно',
    'День второй. Каждый момент что мы провели, я храню в сердце.',
    'Третий. Ой, правда думала что просто картинки? не посчитай манипуляцией, напиши что любишь меня мяу, я умру от милостей пхпхп',
    'Четвёртый. Я ошень соскучився... ты не представляешь как, я очень хочу провести с тобой хоть чуть чуть времени, будь ласка... кстати эта мы котики такие мяу',
    'Пятый день твоего адвент календарика, я правда очень ценю тебя, ты очень важна для меня, а еще я очень жду когда смогу обнять тебя и не отпускать, воздушни поцелуйчик вылетел к тебе!!!!',
    'Шестой день, а я люблю тебя безгранично сильно',
    'Седьмой. МЫ ПОЖЕНИМСЯ!!!',
    'День восемь, последнии дни ты грустни... мне плохо от того что я не могу сделать тебя веселей, поднять настроение.. прости',
    'Девятый. ты меня все еще любишь? напиши...',
    'Вроде день десятый, а ты так-то сто из десяти!',
    'Одиннадцатый. Ты лечишь мою грусть кстати',
    'Двенадцатый. Я счастлив что познакомился с тобой, и что ты есть в моей жизни.',
    'Тринадцатый. Жаль не пятница, сходи на кладбище , нужен вайб тринадцатого дня!!',
    'Четырнадцатый. Я хочу разделить с тобой каждую секунду.',
    'Пятнадцатый. Я очень очень очень очень очень сильно сильно тебя люблюююююю',
    'Шестнадцатый. Хочу обнимашек... пиздец как хочу',
    'Семнадцатый. Я надеюсь у тебя все прекрасно, помни, я люблю тебя до жути сильно',
    'Восемнадцатый. Ты, то сокровище, что радует меня каждый день.',
    'Девятнадцатый. ВМЕСТЕ НАВСЕГДА. Я ТЕБЯ ЛЮБЛЮ.',
    'Двадцатый. Когда же мы уже блять будем тискаться, я не могггггуууу',
    'Двадцать первый. Семь плюс семь плюс семь, это двадцать один, а я люблю тебя до ужаса сильно',
    'Двадцать второй. Я слушаю наш плейлист, ты еще помнишь как мы его делали, давно ты песенки не добавляв',
    'Двадцать третий. Я очень стараюсь для тебя, и хочу чтобы ты была счастлива, я люблю тебя до ужаса сильно',
    'Двадцать четвёртый. Напомнююю... ЛЮБЛЮ ТЕБЯЯЯЯЯ ОЧЕНЬ ОЧЕНЬ СИЛЬНО',
    'Двадцать пятый. Я надеюсь, что я тебе не надоевв.. мяу мяу??',
    'Двадцать шестой. Я верю в нас, и в наше будущее',
    'Двадцать седьмой. С тобой я чувствую себя самым счастливым человеком на свете.',
    'Двадцать восьмой. Я соскучився блин',
    'Двадцать девятый. Давай правда навсегда, я хочу быть с тобой всегда',
    'Тридцатый. Почти все( а я люблю тебя капец',
    'Тридцать первый. Последний день июля. Я надеюсь тебе понравилось блин'
  ];

  const images = [
    'https://i.pinimg.com/736x/6d/4b/66/6d4b660f27ee4aa407390833a812f81b.jpg',
    'https://i.pinimg.com/736x/b1/e9/f4/b1e9f460e1a1eaea59dcec420db26515.jpg',
    'https://i.pinimg.com/736x/01/1b/ec/011beccb74e0b67ccdec111d223e7d1b.jpg',
    'https://i.pinimg.com/736x/f5/0a/77/f50a77e1d341a50296be8b850e309cfe.jpg',
    'https://media1.tenor.com/m/ac3otYT77RcAAAAC/wildfireuv.gif',
    'https://media1.tenor.com/m/ukBByoKUNFEAAAAC/cuddle-anime.gif',
    'https://i.pinimg.com/736x/91/ab/b9/91abb9cf40258e38c131c14b6d4daa61.jpg',
    'https://i.pinimg.com/736x/0e/69/e9/0e69e94e2831e662be761b54eb7aaed8.jpg',
    'imsadohblin.png',
    'https://i.pinimg.com/736x/f3/5e/75/f35e75382882924521c064b439492e75.jpg',
    'https://i.pinimg.com/736x/5f/76/9e/5f769e6bcb024aceaa59f600b4342bb3.jpg',
    'https://i.pinimg.com/736x/64/4a/b5/644ab5daef38066a9de5f572b63c519c.jpg',
    'https://i.pinimg.com/736x/e6/08/dd/e608dde96db0f0435a4ffc7a581a9aa7.jpg',
    'https://i.pinimg.com/736x/21/4d/ae/214daea0c51695dae4f12244dd15fb48.jpg',
    'https://i.pinimg.com/736x/d1/e8/ba/d1e8ba5da723b97b7d1faa796949f3e2.jpg',
    'https://i.pinimg.com/736x/8a/f5/21/8af521bacd6e0f7fc9b129ed9d1327d5.jpg',
    'https://i.pinimg.com/736x/b9/84/6e/b9846e6d3c63057d588c5de2b11c47f0.jpg',
    'https://i.pinimg.com/736x/b0/2a/8f/b02a8faef346277cef06e8f33e625765.jpg',
    'https://i.pinimg.com/736x/d0/0f/b5/d00fb51e6186abe232d06a8439f2e2c0.jpg',
    'https://i.pinimg.com/736x/de/5b/7a/de5b7a97e53fc5d72fd07dab3a1b581b.jpg',
    'https://i.pinimg.com/736x/7f/a6/96/7fa696287db9155872844bf88434ec98.jpg',
    'https://i.pinimg.com/736x/e9/a9/3c/e9a93c93286e98757b90c79e39082adb.jpg',
    'https://i.pinimg.com/474x/e2/0d/f8/e20df81a470b35ca54002680fb402fa8.jpg',
    'https://i.pinimg.com/736x/cc/73/d9/cc73d9096b31c615c53552a07750e256.jpg',
    'https://i.pinimg.com/736x/de/57/e7/de57e7f9cef15b714b7892e7ac373df3.jpg',
    'https://i.pinimg.com/736x/8f/e9/83/8fe98384656a3a0961dfdcd2270f7bcf.jpg',
    'https://i.pinimg.com/736x/e7/dc/1d/e7dc1d603b12820dfe277adb78f837f9.jpg',
    'https://i.pinimg.com/736x/09/ab/0a/09ab0af8d6a0fae6f9a25fb1279d485b.jpg',
    'https://i.pinimg.com/736x/7f/c9/ff/7fc9ff13526581669288745b9c43a9cf.jpg',
    'https://i.pinimg.com/736x/f6/0e/44/f60e4422b4eefd75c44f6a03b67b8cec.jpg',
    'https://i.pinimg.com/736x/31/17/50/311750c2b82b6ef57b73fa42b4c86e71.jpg',
    'https://i.pinimg.com/736x/1f/39/d2/1f39d2d660fccdba86a997d33e76dd3c.jpg'
  ];

  for (let d = 1; d <= days; d++) {
    const dateObj = new Date(year, month, d);
    const dateStr = dateObj.toISOString().split('T')[0];
    adventData[dateStr] = {
      image: images[(d - 1) % images.length],
      text: messages[(d - 1) % messages.length]
    };
  }
}

generateAdventData();

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

function getDay4Audio() {
  return document.getElementById(DAY4_AUDIO_ID);
}

function getDay9Audio() {
  return document.getElementById(DAY9_AUDIO_ID);
}

function startAudioEffect(card, audio) {
  if (!card) return;

  card.classList.add('red');

  if (audio) {
    try {
      audio.currentTime = 0;
      const p = audio.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } catch {}
  }
}

function startDay4Effect(card) {
  startAudioEffect(card, getDay4Audio());
}

function startDay9Effect(card) {
  startAudioEffect(card, getDay9Audio());
}

function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  const { year, month, days } = CONFIG;
  const day4DateStr = new Date(2026, 6, 4).toISOString().split('T')[0];
  const day9DateStr = new Date(2026, 6, 9).toISOString().split('T')[0];

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

    if (dateStr === day9DateStr && (opened || localStorage.getItem('advent_varya2_day9_red') === 'true')) {
      island.classList.add('red');
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
  const day9DateStr = new Date(2026, 6, 9).toISOString().split('T')[0];

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
    if (dateStr === day4DateStr) {
      localStorage.setItem('advent_varya2_day4_red', 'true');
    }
    if (dateStr === day9DateStr) {
      localStorage.setItem('advent_varya2_day9_red', 'true');
    }
    renderGrid();
    openModal(dateStr);

    if (dateStr === day4DateStr) {
      const card = document.querySelector(`.island[data-date="${dateStr}"]`);
      if (card) startDay4Effect(card);
      renderGrid();
    }

    if (dateStr === day9DateStr) {
      const card = document.querySelector(`.island[data-date="${dateStr}"]`);
      if (card) startDay9Effect(card);
      renderGrid();
    }

    return;
  }

  if (status === 'opened') {
    openModal(dateStr);

    if (dateStr === day4DateStr) {
      const card = document.querySelector(`.island[data-date="${dateStr}"]`);
      if (card) startDay4Effect(card);
    }

    if (dateStr === day9DateStr) {
      const card = document.querySelector(`.island[data-date="${dateStr}"]`);
      if (card) startDay9Effect(card);
    }
  }
}

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
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  const day4Audio = document.getElementById('day4-audio');
  if (day4Audio) {
    day4Audio.pause();
    day4Audio.currentTime = 0;
  }

  const day9Audio = document.getElementById('day9-audio');
  if (day9Audio) {
    day9Audio.pause();
    day9Audio.currentTime = 0;
  }
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', renderGrid);

console.log(`✦ Адвент для ${CONFIG.name} загружен (${CONFIG.month + 1}/${CONFIG.year})`);
