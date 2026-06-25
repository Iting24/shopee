'use strict';

const chapters = [
  {
    id: 'origins',
    theme: 'origins',
    era: '2005 · 08 / 04',
    kicker: 'Chapter 1',
    title: '出生',
    summary: '故事從 2005.08.04 開始。',
    chipCopy: '出生、小時候、那句關於 20 歲的預言',
    hotspotCount: 3,
    memories: [
      {
        id: 'birth',
        label: '出生',
        title: '2005.08.04',
        caption: '吳秉穎出生了。這一頁，從你開始。',
        asset: 'assets/photos/01-birth.jpg',
        x: 22,
        y: 64,
      },
      {
        id: 'fortune',
        label: '那句話',
        title: '20 歲會有很多難關',
        caption: '這句話很早就出現了。但你不是被它定義的人。',
        asset: 'assets/photos/02-childhood.jpg',
        x: 71,
        y: 28,
      },
      {
        id: 'before-us',
        label: '撐過來',
        title: '因為你沒有放棄自己',
        caption: '謝謝你撐過那些日子。這樣我們後來才會遇見。',
        asset: 'assets/photos/03-before-us.jpg',
        x: 82,
        y: 73,
      },
    ],
  },
  {
    id: 'skill',
    theme: 'skill',
    era: '國中 → 國高中',
    kicker: 'Chapter 2',
    title: '選手',
    summary: '技藝班、雲端運算、一路比賽。',
    chipCopy: '技藝班、雲端運算、一路比賽',
    hotspotCount: 4,
    memories: [
      {
        id: 'skill-class',
        label: '技藝班',
        title: '國中開始進入技藝班',
        caption: '那不是一條輕鬆的路，但你很早就走進去了。',
        asset: 'assets/photos/04-skill-class.jpg',
        x: 18,
        y: 70,
      },
      {
        id: 'cloud',
        label: '專項',
        title: '雲端運算',
        caption: '你把一件看起來很難的事，做成了你擅長的語言。',
        asset: 'assets/photos/05-cloud.jpg',
        x: 46,
        y: 48,
      },
      {
        id: 'awards',
        label: '得獎',
        title: '國高中陸續得獎',
        caption: '那些成績不是運氣，是你一次次把自己撐起來。',
        asset: 'assets/photos/06-awards.jpg',
        x: 76,
        y: 34,
      },
      {
        id: 'lecturer',
        label: '講師',
        title: '後來也能把經驗分享出去',
        caption: '你不只是會做，也慢慢成為能教別人的人。',
        asset: 'assets/photos/07-lecturer.jpg',
        x: 82,
        y: 74,
      },
    ],
  },
  {
    id: 'nights',
    theme: 'nights',
    era: '那些年',
    kicker: 'Chapter 3',
    title: '夜晚',
    summary: '很多事沒被說破，但你沒有放棄自己。',
    chipCopy: '麻將、社交、唱歌，還有一個人撐過去的夜晚',
    hotspotCount: 4,
    memories: [
      {
        id: 'scars',
        label: '那些事',
        title: '很多人很多事留下了傷',
        caption: '我不想揭開它們。只想記得，你真的很辛苦。',
        asset: 'assets/photos/08-silhouette.jpg',
        x: 19,
        y: 68,
      },
      {
        id: 'mahjong',
        label: '麻將',
        title: '有時候靠打麻將、跟朋友出去',
        caption: '你用自己的方式，把快撐不住的日子撐過去。',
        asset: 'assets/photos/09-mahjong.jpg',
        x: 42,
        y: 72,
      },
      {
        id: 'singing',
        label: '唱歌',
        title: '唱歌也是你的一個出口',
        caption: '有些情緒沒有說出口，但你把它唱過去了。',
        asset: 'assets/photos/10-singing.jpg',
        x: 74,
        y: 42,
      },
      {
        id: 'alone',
        label: '深夜',
        title: '還有很多低落的夜晚',
        caption: '很多時候是一個人。但你還是走到今天了。',
        asset: 'assets/photos/11-late-night.jpg',
        x: 84,
        y: 76,
      },
    ],
  },
  {
    id: 'pride',
    theme: 'pride',
    era: '2023 → 後來',
    kicker: 'Chapter 4',
    title: '轉身',
    summary: '銀牌、轉學、工作，也替下一段路留白。',
    chipCopy: '第 53 屆全國技能競賽銀牌、台科大、工作、休息',
    hotspotCount: 4,
    memories: [
      {
        id: 'silver',
        label: '銀牌',
        title: '2023 第五十三屆全國技能競賽銀牌',
        caption: '這一幕很亮。因為你真的很值得。',
        asset: 'assets/photos/12-silver-medal.jpg',
        x: 50,
        y: 30,
      },
      {
        id: 'ntust',
        label: '台科大',
        title: '成功轉學到台科大',
        caption: '你轉進新的地方，也把人生轉進新的方向。',
        asset: 'assets/photos/13-ntust.jpg',
        x: 21,
        y: 72,
      },
      {
        id: 'job',
        label: '工作',
        title: '找到一份不錯的工作',
        caption: '你一直都很會讓自己往前。',
        asset: 'assets/photos/14-job.jpg',
        x: 78,
        y: 66,
      },
      {
        id: 'rest',
        label: '留白',
        title: '現在待業中，但不是停下來',
        caption: '這比較像下一段旅途開始前，給自己的休息。',
        asset: 'assets/photos/15-rest.jpg',
        x: 86,
        y: 28,
      },
    ],
  },
  {
    id: 'meet',
    theme: 'meet',
    era: '台科大 · 我們相遇',
    kicker: 'Chapter 5',
    title: '相遇',
    summary: '後來，在台科大，你遇見了我。',
    chipCopy: '借筆、IG、唱歌、陪看醫生、北海岸告白',
    hotspotCount: 5,
    memories: [
      {
        id: 'group',
        label: '分組',
        title: '原本只是分組報告',
        caption: '學長問我要不要同組。那時候我還不知道組上有誰。',
        asset: 'assets/photos/16-group-project.jpg',
        x: 20,
        y: 70,
      },
      {
        id: 'pen',
        label: '借筆',
        title: '我跟你借了一支筆',
        caption: '那是我們第一次講話。也是故事開始的地方。',
        asset: 'assets/photos/17-pen.jpg',
        x: 56,
        y: 44,
      },
      {
        id: 'ig',
        label: 'IG',
        title: '第一次被男生要 IG',
        caption: '我很害羞。但我們就這樣開始有了聯繫。',
        asset: 'assets/photos/18-ig.jpg',
        x: 81,
        y: 22,
      },
      {
        id: 'karaoke',
        label: '唱歌',
        title: '三個人的唱歌局',
        caption: '我發現你唱歌超好聽，騎車也很安全，還會注意我會不會冷。',
        asset: 'assets/photos/19-karaoke.jpg',
        x: 75,
        y: 72,
      },
      {
        id: 'late-chat',
        label: '凌晨三點',
        title: '那天後來聊到凌晨三點',
        caption: '試探、丟直球、關心彼此，一切慢慢變得不一樣。',
        asset: 'assets/photos/20-late-chat.jpg',
        x: 46,
        y: 76,
      },
      {
        id: 'doctor',
        label: '照顧',
        title: '你陪我看醫生，也先幫我付了費用',
        caption: '那份被放在心上的感覺，真的很讓人心動。',
        asset: 'assets/photos/21-doctor.jpg',
      },
      {
        id: 'choco',
        label: '巧克力',
        title: '偷偷送到宿舍樓下的巧克力',
        caption: '很甜，而且是那種會記很久的甜。',
        asset: 'assets/photos/22-chocolate.jpg',
      },
      {
        id: 'dentist',
        label: '牙套',
        title: '陪你回診看牙醫',
        caption: '本來只是吃晚餐，最後變成在你家過夜。',
        asset: 'assets/photos/23-dentist.jpg',
      },
      {
        id: 'sea',
        label: '北海岸',
        title: '你記得我說海很浪漫',
        caption: '所以你開車帶我去看海，然後在那裡告白。',
        asset: 'assets/photos/24-sea-confession.jpg',
      },
    ],
  },
  {
    id: 'together',
    theme: 'together',
    era: '在一起之後',
    kicker: 'Chapter 6',
    title: '陪伴',
    summary: '再後來，我們一起把生活過成很多小小的閃光。',
    chipCopy: '三峽的家、家人、旅行、照顧、展覽、演出、遠距離支持',
    hotspotCount: 5,
    memories: [
      {
        id: 'sanxia-home',
        label: '三峽的家',
        title: '最常待著的地方，是三峽的家',
        caption: '現在我住在那裡。你家人也把我照顧得很好。',
        asset: 'assets/photos/25-sanxia-home.jpg',
        x: 16,
        y: 72,
      },
      {
        id: 'huashan',
        label: '玩具展',
        title: '下班還陪我去華山逛玩具展',
        caption: '還一起抽盲盒。很普通，但也很可愛。',
        asset: 'assets/photos/26-huashan.jpg',
        x: 38,
        y: 66,
      },
      {
        id: 'family',
        label: '家人',
        title: '你會陪伴我，也陪伴我的家人',
        caption: '甚至開車載我爸走南橫、去環島。',
        asset: 'assets/photos/27-family-roadtrip.jpg',
        x: 72,
        y: 34,
      },
      {
        id: 'philippines',
        label: '菲律賓',
        title: '我在菲律賓受傷時，你飛來找我',
        caption: '照顧我，也和我的同學一起出去玩。',
        asset: 'assets/photos/28-philippines.jpg',
        x: 83,
        y: 70,
      },
      {
        id: 'hospital',
        label: '照顧',
        title: '你總是耐心陪我回診',
        caption: '我生病、我餓、我累，你都真的有放在心上。',
        asset: 'assets/photos/29-hospital.jpg',
        x: 48,
        y: 44,
      },
      {
        id: 'tasks',
        label: '幫我',
        title: '會教我，也會幫我做不會的作業',
        caption: '你從來不是只說加油的人，你會真的一起處理。',
        asset: 'assets/photos/30-study.jpg',
      },
      {
        id: 'shows',
        label: '一起去',
        title: '脫口秀、美術館、Gummy B、羽球、保齡球',
        caption: '你很常把我說過的喜歡，悄悄記起來。',
        asset: 'assets/photos/31-shows.jpg',
      },
      {
        id: 'nails',
        label: '漂亮',
        title: '你會讓我去做漂亮的指甲，也一直誇我漂亮',
        caption: '謝謝你讓我慢慢長出更多自信。',
        asset: 'assets/photos/32-nails.jpg',
      },
      {
        id: 'support-america',
        label: '現在',
        title: '我在美國，也是你一直鼓勵我',
        caption: '你讓我更有力氣待下去。',
        asset: 'assets/photos/33-america-support.jpg',
      },
    ],
  },
  {
    id: 'future',
    theme: 'future',
    era: '現在 → 下一頁',
    kicker: 'Chapter 7',
    title: '下一頁',
    summary: '這不是結束，是新的開始。',
    chipCopy: '休息、整理、生日房間、未來',
    hotspotCount: 3,
    finalRoom: true,
    memories: [
      {
        id: 'pause',
        label: '休息',
        title: '先讓自己慢一點',
        caption: '不是退後，是在新的旅程前，先把自己安放好。',
        asset: 'assets/photos/34-pause.jpg',
        x: 18,
        y: 72,
      },
      {
        id: 'next-page',
        label: '下一頁',
        title: '後來遇見我，也是故事的一部分',
        caption: '不是全部，但一定是很重要的一章。',
        asset: 'assets/photos/35-next-page.jpg',
        x: 49,
        y: 46,
      },
      {
        id: 'future-door',
        label: '未來',
        title: '接下來的人生，也一起慢慢走',
        caption: '生日快樂。接下來的篇章，我也想在。',
        asset: 'assets/photos/36-future-door.jpg',
        x: 82,
        y: 66,
      },
    ],
  },
];

const finalRoomCards = [
  {
    id: 'final-1',
    title: '最後一張合照',
    note: '放你最想讓他停下來看很久的那張。',
    asset: 'assets/photos/final-01.jpg',
  },
  {
    id: 'final-2',
    title: '想寫給他的那句話',
    note: '也可以做成字卡照片放進來。',
    asset: 'assets/photos/final-02.jpg',
  },
  {
    id: 'final-3',
    title: '未來想一起去的地方',
    note: '把下一段旅途也留在這裡。',
    asset: 'assets/photos/final-03.jpg',
  },
];

const finalVideoPath = 'assets/video/birthday-message.mp4';

const state = {
  chapterIndex: 0,
  viewed: new Set(),
  expandedChapters: new Set(),
};

const tiltClasses = ['tilt-left', 'tilt-right', 'tilt-soft-left', 'tilt-soft-right'];

const elements = {
  startScreen: document.getElementById('start-screen'),
  startButton: document.getElementById('start-button'),
  gameShell: document.getElementById('game-shell'),
  chapterList: document.getElementById('chapter-list'),
  chapterProgressLabel: document.getElementById('chapter-progress-label'),
  sceneFrame: document.getElementById('scene-frame'),
  sceneEra: document.getElementById('scene-era'),
  sceneTitle: document.getElementById('scene-title'),
  sceneSubtitle: document.getElementById('scene-subtitle'),
  toggleStoryButton: document.getElementById('toggle-story-button'),
  sceneHotspots: document.getElementById('scene-hotspots'),
  sceneMemoryRibbon: document.getElementById('scene-memory-ribbon'),
  prevButton: document.getElementById('prev-button'),
  nextButton: document.getElementById('next-button'),
  finalRoomButton: document.getElementById('final-room-button'),
  memoryModal: document.getElementById('memory-modal'),
  memoryClose: document.getElementById('memory-close'),
  memoryImage: document.getElementById('memory-image'),
  memoryPlaceholder: document.getElementById('memory-placeholder'),
  memoryPlaceholderLabel: document.getElementById('memory-placeholder-label'),
  memoryKicker: document.getElementById('memory-kicker'),
  memoryTitle: document.getElementById('memory-title-text'),
  memoryCaption: document.getElementById('memory-caption'),
  finalModal: document.getElementById('final-modal'),
  finalClose: document.getElementById('final-close'),
  finalVideo: document.getElementById('final-video'),
  finalVideoPlaceholder: document.getElementById('final-video-placeholder'),
  finalGallery: document.getElementById('final-gallery'),
};

function createThumb(path, title, className) {
  const wrapper = document.createElement('div');
  wrapper.className = className;

  const img = document.createElement('img');
  img.alt = title;
  img.src = path;
  img.addEventListener('error', () => {
    wrapper.innerHTML = '';
    wrapper.appendChild(createThumbPlaceholder(title));
  }, { once: true });

  wrapper.appendChild(img);
  return wrapper;
}

function createThumbPlaceholder(title) {
  const box = document.createElement('div');
  box.className = 'thumb-placeholder';
  box.innerHTML = `
    <span class="placeholder-chip">先留白</span>
    <small>${title}</small>
  `;
  return box;
}

function createSlotPlaceholder(message) {
  const box = document.createElement('div');
  box.className = 'photo-placeholder';
  box.innerHTML = `
    <span class="placeholder-chip">先留白</span>
    <strong>${message}</strong>
  `;
  return box;
}

function applyTiltClass(card, index) {
  card.classList.add(tiltClasses[index % tiltClasses.length]);
}

function buildMemoryThumb(memory, className) {
  return memory.asset
    ? createThumb(memory.asset, memory.title, className)
    : createThumbPlaceholder(memory.title);
}

function updateProgress() {
  return state.viewed.size;
}

function getHotspotPosition(memory, index) {
  if (typeof memory.x === 'number' && typeof memory.y === 'number') {
    return { x: memory.x, y: memory.y };
  }

  const fallbackPositions = [
    { x: 18, y: 72 },
    { x: 36, y: 52 },
    { x: 55, y: 30 },
    { x: 74, y: 62 },
    { x: 50, y: 78 },
    { x: 26, y: 28 },
    { x: 68, y: 24 },
    { x: 84, y: 76 },
    { x: 12, y: 44 },
    { x: 60, y: 56 },
  ];

  return fallbackPositions[index % fallbackPositions.length];
}

function buildChapterList() {
  elements.chapterList.innerHTML = '';

  chapters.forEach((chapter, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'chapter-chip';
    button.dataset.index = String(index);
    button.setAttribute('aria-label', `${chapter.kicker} ${chapter.title} ${chapter.era}`);
    button.innerHTML = `
      <small>${String(index + 1).padStart(2, '0')}</small>
      <strong>${chapter.title}</strong>
    `;
    button.addEventListener('click', () => {
      state.chapterIndex = index;
      render();
    });
    elements.chapterList.appendChild(button);
  });
}

function setActiveChapterChip() {
  const chips = elements.chapterList.querySelectorAll('.chapter-chip');
  chips.forEach((chip, index) => {
    const isActive = index === state.chapterIndex;
    chip.classList.toggle('active', isActive);
    if (isActive) {
      chip.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
  });
}

function openMemory(memory, chapter) {
  state.viewed.add(memory.id);
  updateProgress();
  renderHotspots(chapter);
  renderSceneMemoryRibbon(chapter);

  elements.memoryKicker.textContent = `${chapter.kicker} · ${memory.label}`;
  elements.memoryTitle.textContent = memory.title;
  elements.memoryCaption.textContent = memory.caption;
  elements.memoryPlaceholderLabel.textContent = '等你把這張照片放進來。';

  elements.memoryImage.classList.add('hidden');
  elements.memoryPlaceholder.classList.remove('hidden');
  elements.memoryImage.removeAttribute('src');
  elements.memoryImage.alt = memory.title;

  if (memory.asset) {
    elements.memoryImage.src = memory.asset;
    elements.memoryImage.onload = () => {
      elements.memoryPlaceholder.classList.add('hidden');
      elements.memoryImage.classList.remove('hidden');
    };
    elements.memoryImage.onerror = () => {
      elements.memoryPlaceholder.classList.remove('hidden');
      elements.memoryImage.classList.add('hidden');
    };
  }

  elements.memoryModal.classList.remove('hidden');
}

function renderHotspots(chapter) {
  elements.sceneHotspots.innerHTML = '';
  const viewedInChapter = chapter.memories.filter((memory) => state.viewed.has(memory.id)).length;
  const revealCount = Math.min(viewedInChapter + 1, chapter.memories.length);

  chapter.memories.slice(0, revealCount).forEach((memory, index) => {
    const position = getHotspotPosition(memory, index);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'hotspot';
    button.style.animationDelay = `${120 + (index * 90)}ms`;
    button.style.left = `${position.x}%`;
    button.style.top = `${position.y}%`;
    button.innerHTML = `
      <span class="hotspot-core"></span>
      <span class="hotspot-label">${state.viewed.has(memory.id) ? '已收' : String(index + 1).padStart(2, '0')}</span>
    `;
    button.addEventListener('click', () => openMemory(memory, chapter));
    elements.sceneHotspots.appendChild(button);
  });
}

function renderGallery(chapter) {
  return chapter;
}

function renderSceneMemoryRibbon(chapter) {
  elements.sceneMemoryRibbon.innerHTML = '';
  const unlocked = chapter.memories.filter((memory) => state.viewed.has(memory.id));
  const visibleMemories = unlocked.slice(-3);

  if (visibleMemories.length === 0) {
    const note = document.createElement('div');
    note.className = 'scene-memory-note';
    note.innerHTML = `
      <span class="scene-memory-note-chip">先碰一下發亮的地方</span>
      <p>這一章留下來的回憶，會慢慢貼上來。</p>
    `;
    elements.sceneMemoryRibbon.appendChild(note);
    return;
  }

  visibleMemories.forEach((memory, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = `scene-memory-card stack-${index + 1}`;
    applyTiltClass(card, index);

    const thumb = buildMemoryThumb(memory, 'scene-memory-thumb');
    const caption = document.createElement('div');
    caption.className = 'scene-memory-caption';
    caption.innerHTML = `
      <strong>${memory.label}</strong>
      <span>${memory.title}</span>
    `;

    card.appendChild(thumb);
    card.appendChild(caption);
    card.addEventListener('click', () => openMemory(memory, chapter));
    elements.sceneMemoryRibbon.appendChild(card);
  });
}

function renderFinalGallery() {
  elements.finalGallery.innerHTML = '';

  finalRoomCards.forEach((cardData, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'final-card';
    applyTiltClass(card, index);

    const thumb = createThumb(cardData.asset, cardData.title, 'final-thumb');
    const body = document.createElement('div');
    body.className = 'final-body';
    body.innerHTML = `
      <p class="final-title-small">${cardData.title}</p>
      <p class="final-note-small">${cardData.note}</p>
    `;

    card.appendChild(thumb);
    card.appendChild(body);
    card.addEventListener('click', () => {
      openMemory(
        {
          id: cardData.id,
          label: 'Final Slot',
          title: cardData.title,
          caption: cardData.note,
          asset: cardData.asset,
        },
        {
          kicker: 'Final Room',
        },
      );
    });
    elements.finalGallery.appendChild(card);
  });
}

function prepareFinalVideo() {
  elements.finalVideo.classList.add('hidden');
  elements.finalVideoPlaceholder.classList.remove('hidden');
  elements.finalVideo.removeAttribute('src');

  elements.finalVideo.src = finalVideoPath;
  elements.finalVideo.load();

  elements.finalVideo.onloadeddata = () => {
    elements.finalVideoPlaceholder.classList.add('hidden');
    elements.finalVideo.classList.remove('hidden');
  };

  elements.finalVideo.onerror = () => {
    elements.finalVideo.classList.add('hidden');
    elements.finalVideoPlaceholder.classList.remove('hidden');
  };
}

function render() {
  const chapter = chapters[state.chapterIndex];
  const chapterNumber = state.chapterIndex + 1;
  const isExpanded = state.expandedChapters.has(chapter.id);

  setActiveChapterChip();
  elements.chapterProgressLabel.textContent = `${chapterNumber} / ${chapters.length}`;

  elements.sceneFrame.dataset.theme = chapter.theme;
  elements.sceneEra.textContent = chapter.era;
  elements.sceneTitle.textContent = chapter.title;
  elements.sceneSubtitle.textContent = chapter.summary;
  elements.sceneSubtitle.classList.toggle('hidden', !isExpanded);
  elements.toggleStoryButton.textContent = isExpanded ? '收起這章文字' : '顯示這章文字';

  renderHotspots(chapter);
  renderSceneMemoryRibbon(chapter);

  elements.prevButton.disabled = state.chapterIndex === 0;
  elements.nextButton.disabled = state.chapterIndex === chapters.length - 1;
  elements.finalRoomButton.classList.toggle('hidden', !chapter.finalRoom);
}

function goToPrevChapter() {
  if (state.chapterIndex > 0) {
    state.chapterIndex -= 1;
    render();
  }
}

function goToNextChapter() {
  if (state.chapterIndex < chapters.length - 1) {
    state.chapterIndex += 1;
    render();
  }
}

function closeOverlays() {
  elements.memoryModal.classList.add('hidden');
  elements.finalModal.classList.add('hidden');
}

function openFinalRoom() {
  renderFinalGallery();
  prepareFinalVideo();
  elements.finalModal.classList.remove('hidden');
}

function wireEvents() {
  elements.startButton.addEventListener('click', () => {
    elements.startScreen.classList.add('hidden');
    elements.gameShell.classList.remove('hidden');
  });

  elements.prevButton.addEventListener('click', goToPrevChapter);
  elements.nextButton.addEventListener('click', goToNextChapter);
  elements.finalRoomButton.addEventListener('click', openFinalRoom);
  elements.toggleStoryButton.addEventListener('click', () => {
    const chapter = chapters[state.chapterIndex];
    if (state.expandedChapters.has(chapter.id)) {
      state.expandedChapters.delete(chapter.id);
    } else {
      state.expandedChapters.add(chapter.id);
    }
    render();
  });

  elements.memoryClose.addEventListener('click', () => {
    elements.memoryModal.classList.add('hidden');
  });

  elements.finalClose.addEventListener('click', () => {
    elements.finalModal.classList.add('hidden');
    elements.finalVideo.pause();
  });

  document.querySelectorAll('[data-close]').forEach((backdrop) => {
    backdrop.addEventListener('click', () => {
      closeOverlays();
      elements.finalVideo.pause();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (!elements.gameShell.classList.contains('hidden')) {
      if (event.key === 'ArrowLeft') {
        goToPrevChapter();
      }
      if (event.key === 'ArrowRight') {
        goToNextChapter();
      }
    }

    if (event.key === 'Escape') {
      closeOverlays();
      elements.finalVideo.pause();
    }
  });

  window.addEventListener('resize', () => {
    render();
  });
}

buildChapterList();
updateProgress();
render();
wireEvents();
