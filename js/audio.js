const audioPlayers = {};

function initAudio() {
  try {
    audioPlayers.day4 = new Audio('assets/audio/day4.mp3');
    audioPlayers.day8 = new Audio('assets/audio/day8.mp3');
    audioPlayers.day9 = new Audio('assets/audio/day9.mp3');
    audioPlayers.day11 = new Audio('assets/audio/day11.mp3');
    
    // Настройка громкости
    Object.values(audioPlayers).forEach(a => {
      if (a) {
        a.volume = 1.0;
        a.load();
        console.log('✅ Audio loaded:', a.src);
      }
    });
    console.log('🎵 Все аудио инициализированы');
  } catch(e) {
    console.log('❌ Audio init error:', e);
  }
}

function playAudio(day) {
  const audio = audioPlayers[day];
  if (!audio) {
    console.log('❌ Audio not found for day:', day);
    return;
  }
  try {
    audio.currentTime = 0;
    const promise = audio.play();
    if (promise) {
      promise.then(() => {
        console.log('✅ Playing:', day);
      }).catch(e => {
        console.log('❌ Play error for', day, ':', e);
      });
    }
  } catch(e) {
    console.log('❌ Audio error:', e);
  }
}

function stopAudio(day) {
  const audio = audioPlayers[day];
  if (!audio) return;
  try {
    audio.pause();
    audio.currentTime = 0;
  } catch(e) {}
}

function stopAllAudio() {
  Object.keys(audioPlayers).forEach(key => {
    try {
      const audio = audioPlayers[key];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    } catch(e) {}
  });
}
