const CONFIG = {
  year: 2026,
  month: 6,
  days: 32,
  name: 'Варюши'
};

const adventData = {};
const DAY4_AUDIO_ID = 'day4-audio';
const DAY8_AUDIO_ID = 'day8-audio';
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
    'Девятый день, девятая картинка, девятый... Я просто напомню, что очень дорожу тобой, очень ценю тебя, и я искренне надеюсь, я искренне верю в то, что у нас все получится, понимай эту фразу как хочешь, я не смогу без тебя',
    'Уже десятый день июля, одна третья прошла, я надеюсь я не заебываю когда напоминаю что люблю тебя, а люблю я тебя ну пиздец сильно, это не описать словами..',
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
    'https://media1.tenor.com/m/pefyE_x0tYoAAAAC/shy-anime-girl-marin-shy.gif',
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

function getDay8Audio() {
  return document.getElementById(DAY8_AUDIO_ID);
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

function startDay8Effect(card) {
  startAudioEffect(card, getDay8Audio());
}

function startDay9Effect(card) {
  startAudioEffect(card, getDay9Audio());
}

// ===== ВЕЧНЫЙ Ч/Б ГЛИТЧ-ЭФФЕКТ С РВАНОСТЬЮ (усиленная версия) =====
let glitchInterval = null;
let glitchElements = [];

function startGlitchEffect() {
  const modal = document.querySelector('.modal');
  if (!modal) return;

  stopGlitchEffect();

  modal.classList.add('glitching');
  modal.style.filter = 'grayscale(1) contrast(1.35)';

  // Резкий стартовый удар — белая вспышка в момент триггера, точно "в такт"
  const impactFlash = document.createElement('div');
  impactFlash.style.cssText = `
    position: absolute;
    inset: -4px;
    pointer-events: none;
    z-index: 1000;
    background: #fff;
    mix-blend-mode: difference;
    opacity: 1;
    border-radius: inherit;
  `;
  modal.appendChild(impactFlash);
  setTimeout(() => { if (impactFlash.parentNode) impactFlash.remove(); }, 45);
  const bigShake = 6;
  modal.style.transform = `translate(${(Math.random()-0.5)*bigShake*2}px, ${(Math.random()-0.5)*bigShake*2}px)`;

  const glitchWrapper = document.createElement('div');
  glitchWrapper.className = 'glitch-wrapper';
  glitchWrapper.style.cssText = `
    position: absolute;
    inset: -4px;
    pointer-events: none;
    z-index: 999;
    border-radius: inherit;
    overflow: hidden;
  `;
  modal.appendChild(glitchWrapper);
  glitchElements.push(glitchWrapper);

  // Резкие ч/б смещённые "двойники" кадра, рывками (steps), без плавности
  const ghostLayers = [
    { shiftX: '-6px', shiftY: '0px', opacity: 0.28, delay: 0, dur: 0.09 },
    { shiftX: '5px', shiftY: '1px', opacity: 0.22, delay: 0.03, dur: 0.11 },
    { shiftX: '-3px', shiftY: '2px', opacity: 0.2, delay: 0.06, dur: 0.08 },
    { shiftX: '4px', shiftY: '-2px', opacity: 0.17, delay: 0.09, dur: 0.1 }
  ];

  ghostLayers.forEach((layer, index) => {
    const div = document.createElement('div');
    div.className = `glitch-ghost-${index}`;
    div.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: rgba(255,255,255,${layer.opacity});
      transform: translate(${layer.shiftX}, ${layer.shiftY});
      animation: ghostShift ${layer.dur}s steps(2) infinite alternate;
      animation-delay: ${layer.delay}s;
      border-radius: inherit;
      mix-blend-mode: difference;
    `;
    glitchWrapper.appendChild(div);
    glitchElements.push(div);
  });

  // Резкая рывковая инверсия всего кадра
  const invertLayer = document.createElement('div');
  invertLayer.className = 'glitch-invert';
  invertLayer.style.cssText = `
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: #fff;
    mix-blend-mode: difference;
    animation: hardInvert 2.2s steps(1) infinite;
    border-radius: inherit;
  `;
  glitchWrapper.appendChild(invertLayer);
  glitchElements.push(invertLayer);

  // Плотные жёсткие сканлайны
  const scanline = document.createElement('div');
  scanline.className = 'glitch-scanline';
  scanline.style.cssText = `
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background: repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 2px,
      rgba(0,0,0,0.35) 2px,
      rgba(0,0,0,0.35) 3px,
      transparent 3px,
      transparent 5px
    );
    animation: scanlineMove 0.35s linear infinite;
    border-radius: inherit;
    mix-blend-mode: overlay;
  `;
  glitchWrapper.appendChild(scanline);
  glitchElements.push(scanline);

  // Жёсткий ч/б телевизионный шум, высокая интенсивность
  const noise = document.createElement('div');
  noise.className = 'glitch-noise';
  noise.style.cssText = `
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
    opacity: 0.2;
    background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3CfeColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E');
    background-size: 96px 96px;
    animation: noiseShift 0.07s steps(2) infinite;
    border-radius: inherit;
    mix-blend-mode: overlay;
  `;
  glitchWrapper.appendChild(noise);
  glitchElements.push(noise);

  // Широкие рванные горизонтальные полосы — "выпадение" строк кадра
  for (let i = 0; i < 16; i++) {
    const strip = document.createElement('div');
    const top = Math.random() * 100;
    const height = 2 + Math.random() * 14;
    const width = 30 + Math.random() * 90;
    const left = Math.random() * 60 - 20;
    const dark = Math.random() > 0.5;
    strip.style.cssText = `
      position: absolute;
      left: ${left}%;
      width: ${width}%;
      height: ${height}px;
      top: ${top}%;
      pointer-events: none;
      z-index: 5;
      background: ${dark ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.4)'};
      mix-blend-mode: difference;
      animation: hardStripGlitch ${0.15 + Math.random() * 0.35}s steps(1) infinite;
      animation-delay: ${Math.random() * 1}s;
      border-radius: 0;
    `;
    glitchWrapper.appendChild(strip);
    glitchElements.push(strip);
  }

  // Вертикальные рванные полосы-сдвиги
  for (let i = 0; i < 6; i++) {
    const strip = document.createElement('div');
    const left = Math.random() * 96;
    const width = 3 + Math.random() * 10;
    const height = 40 + Math.random() * 60;
    const top = Math.random() * 40;
    strip.style.cssText = `
      position: absolute;
      top: ${top}%;
      height: ${height}%;
      width: ${width}px;
      left: ${left}%;
      pointer-events: none;
      z-index: 5;
      background: rgba(255,255,255,0.3);
      mix-blend-mode: difference;
      animation: hardStripGlitchV ${0.2 + Math.random() * 0.3}s steps(1) infinite;
      animation-delay: ${Math.random() * 0.8}s;
      border-radius: 0;
    `;
    glitchWrapper.appendChild(strip);
    glitchElements.push(strip);
  }

  // Рваные углы, резкие вспышки
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
    cornerDiv.style.cssText = `
      position: absolute;
      ${Object.keys(pos).filter(k => k !== 'clip').map(k => `${k}: ${pos[k]}`).join('; ')};
      width: ${size + 8}px;
      height: ${size + 8}px;
      pointer-events: none;
      z-index: 6;
      background: rgba(0,0,0,0.5);
      clip-path: ${pos.clip};
      animation: cornerGlitchHard ${0.3 + Math.random() * 0.4}s steps(1) infinite;
      animation-delay: ${Math.random() * 0.5}s;
      mix-blend-mode: difference;
    `;
    glitchWrapper.appendChild(cornerDiv);
    glitchElements.push(cornerDiv);
  }

  // Вспышки строго в такт — каждая четверть при 179 BPM (60/179 ≈ 335.2ms)
  const QUARTER_MS = 60000 / 179;
  glitchInterval = setInterval(() => {
    const flash = document.createElement('div');
    const white = Math.random() > 0.5;
    flash.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 10;
      background: ${white ? '#fff' : '#000'};
      border-radius: inherit;
      mix-blend-mode: difference;
      opacity: ${0.55 + Math.random() * 0.35};
    `;
    glitchWrapper.appendChild(flash);
    glitchElements.push(flash);

    setTimeout(() => {
      if (flash.parentNode) flash.remove();
      const idx = glitchElements.indexOf(flash);
      if (idx > -1) glitchElements.splice(idx, 1);
    }, 60);
  }, QUARTER_MS);

  // Резкая рывковая тряска кадра (без плавного ease)
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

function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
      background: transparent;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }
    
    * {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    @keyframes ghostShift {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes hardInvert {
      0%, 92% { opacity: 0; }
      93%, 96% { opacity: 1; }
      97%, 100% { opacity: 0; }
    }

    @keyframes scanlineMove {
      0% { transform: translateY(0); }
      100% { transform: translateY(6px); }
    }

    @keyframes noiseShift {
      0% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(-1px, 0.5px) scale(1.01); }
      50% { transform: translate(1px, -0.5px) scale(0.99); }
      75% { transform: translate(-0.5px, 1px) scale(1.005); }
      100% { transform: translate(0.5px, -1px) scale(0.995); }
    }

    @keyframes hardStripGlitch {
      0% { transform: translateX(0); opacity: 0; }
      10% { transform: translateX(-14px); opacity: 1; }
      20% { transform: translateX(10px); opacity: 0.8; }
      30% { transform: translateX(-6px); opacity: 0; }
      100% { transform: translateX(0); opacity: 0; }
    }

    @keyframes hardStripGlitchV {
      0% { transform: translateY(0); opacity: 0; }
      15% { transform: translateY(-10px); opacity: 1; }
      30% { transform: translateY(8px); opacity: 0.7; }
      45% { transform: translateY(0); opacity: 0; }
      100% { transform: translateY(0); opacity: 0; }
    }

    @keyframes cornerGlitchHard {
      0% { opacity: 0; transform: scale(1); }
      20% { opacity: 1; transform: scale(1.5); }
      40% { opacity: 0; transform: scale(0.7); }
      100% { opacity: 0; transform: scale(1); }
    }

    .modal.glitching {
      animation: modalGlitchSubtle 0.3s steps(2) infinite;
      transition: none;
    }

    @keyframes modalGlitchSubtle {
      0% { transform: translate(0, 0); }
      50% { transform: translate(1px, -1px); }
      100% { transform: translate(-1px, 1px); }
    }

    .modal.glitching .modal-image {
      animation: imageGlitchHard 0.18s steps(2) infinite;
    }

    @keyframes imageGlitchHard {
      0% { transform: translate(0,0); filter: none; }
      25% { transform: translate(-2px, 1px); filter: invert(1) grayscale(1); }
      50% { transform: translate(2px, -1px); filter: grayscale(1) brightness(1.4); }
      75% { transform: translate(-1px, 2px); filter: grayscale(1) brightness(0.6); }
      100% { transform: translate(0,0); filter: none; }
    }

    .modal.glitching h2,
    .modal.glitching .modal-content p,
    .modal.glitching .modal-kicker {
      animation: textGlitchHard 0.15s steps(2) infinite;
    }

    @keyframes textGlitchHard {
      0% { transform: translate(0); text-shadow: none; }
      50% { transform: translate(-2px, 1px); text-shadow: 2px 0 rgba(0,0,0,0.4), -2px 0 rgba(255,255,255,0.3); }
      100% { transform: translate(2px, -1px); text-shadow: -2px 0 rgba(0,0,0,0.4), 2px 0 rgba(255,255,255,0.3); }
    }

    .modal.glitching::before,
    .modal.glitching::after {
      animation: borderGlitchHard 0.25s steps(2) infinite;
    }

    @keyframes borderGlitchHard {
      0% { opacity: 1; transform: translate(0); }
      50% { opacity: 0.4; transform: translate(2px, -2px); }
      100% { opacity: 1; transform: translate(-2px, 2px); }
    }

    .modal.glitching .modal-close {
      animation: closeGlitchHard 0.3s steps(2) infinite;
    }

    @keyframes closeGlitchHard {
      0% { transform: rotate(0deg) scale(1); }
      50% { transform: rotate(3deg) scale(1.05); }
      100% { transform: rotate(-3deg) scale(0.95); }
    }
  `;
  document.head.appendChild(style);
}

injectStyles();

function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  const { year, month, days } = CONFIG;
  const day4DateStr = new Date(2026, 6, 4).toISOString().split('T')[0];
  const day8DateStr = new Date(2026, 6, 10).toISOString().split('T')[0];
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

    if (dateStr === day8DateStr && (opened || localStorage.getItem('advent_varya2_day8_red') === 'true')) {
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
  const day8DateStr = new Date(2026, 6, 10).toISOString().split('T')[0];
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
    if (dateStr === day8DateStr) {
      localStorage.setItem('advent_varya2_day8_red', 'true');
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

    if (dateStr === day8DateStr) {
      const card = document.querySelector(`.island[data-date="${dateStr}"]`);
      if (card) startDay8Effect(card);
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

    if (dateStr === day8DateStr) {
      const card = document.querySelector(`.island[data-date="${dateStr}"]`);
      if (card) startDay8Effect(card);
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

  if (day === 9) {
    setTimeout(() => {
      startGlitchEffect();
    }, 2900);
    setTimeout(() => {
      stopGlitchEffect();
    }, 24000);
  }
}

function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  const day4Audio = document.getElementById('day4-audio');
  if (day4Audio) {
    day4Audio.pause();
    day4Audio.currentTime = 0;
  }

  const day8Audio = document.getElementById('day8-audio');
  if (day8Audio) {
    day8Audio.pause();
    day8Audio.currentTime = 0;
  }

  const day9Audio = document.getElementById('day9-audio');
  if (day9Audio) {
    day9Audio.pause();
    day9Audio.currentTime = 0;
  }

  stopGlitchEffect();
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
