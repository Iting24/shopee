/* ═══════════════════════════════════════════
   game.js · 在遇見妳之後
   ═══════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════════
   ↓↓↓  替換文案區  ↓↓↓
   所有需要個人化的文字都在這個區塊
   ════════════════════════════════════════════ */

// 第一章：信件內容
// \n 代表換行；空白行 = \n\n
const LETTER_TEXT =
`你醒來了。

房間是對的，
但有什麼東西不見了。

那個東西是我。

你不用到很遠的地方找——
去那些你還記得的角落看看。

我都在那裡等你。`;

// 三個回憶碎片
// icon:  emoji 圖示（或替換成 <img> 路徑）
// title: 地點／場景名稱
// text:  點開後顯示的回憶內容（支援 \n 換行）
const MEMORIES = [
  {
    icon:  '☕',
    title: '那間咖啡廳',
    text:
`那杯咖啡你說太苦，喝了一口就推開了。

但後來趁我說話的時候，
你又偷偷喝了幾口。

我看見了。
沒有說。`,
  },
  {
    icon:  '🌸',
    title: '公園的角落',
    text:
`你說你喜歡看天空，
說天空讓你覺得自己變小了，
就不用想那麼多事。

我問你：「有沒有好一點？」

你說：「有。不過不是因為天空。」`,
  },
  {
    icon:  '🌙',
    title: '深夜的通話',
    text:
`凌晨兩點多，你說睡不著。

我也是，但我說「我也是」。

我們就這樣各自拿著手機，
誰都沒再說話。

你先睡著的。
我等你睡了才掛掉。`,
  },
];

// 最後的生日祝福（吹完蠟燭後出現）
// ↓ 替換：這裡寫你最想對他說的話
const BIRTHDAY_TEXT =
`生日快樂。

我知道你不喜歡太熱鬧的事，
所以只有這裡，
只有你和我。

謝謝你讓我陪著你，
也謝謝你陪著我。

你是很好的人。
我說真的。

♡`;

// 影片連結
// ↓ 替換：把這裡換成你的影片 URL（YouTube / Google Drive / 任何連結）
// 如果不需要影片按鈕，把這行設為 null
const VIDEO_URL = null;
// const VIDEO_URL = 'https://youtu.be/你的影片ID';

/* ════════════════════════════════════════════
   ↑↑↑  替換文案區結束  ↑↑↑
   以下是遊戲邏輯，通常不需要修改
   ════════════════════════════════════════════ */

// ── 遊戲狀態 ──
const state = {
  memoriesFound: 0,
  companionValue: 0,
};

// ── 打字機效果 ──
// el: 目標元素, text: 字串, speed: 毫秒/字, cb: 完成後的 callback
function typewriter(el, text, speed, cb) {
  el.textContent = '';
  let i = 0;
  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed);
    } else if (cb) {
      cb();
    }
  };
  tick();
}

// ── 場景切換（帶淡出黑幕） ──
function goTo(fromId, toId, afterFn) {
  const fade = document.getElementById('fade');
  fade.classList.add('fading');
  setTimeout(() => {
    document.getElementById(fromId).classList.remove('active');
    document.getElementById(toId).classList.add('active');
    fade.classList.remove('fading');
    if (afterFn) afterFn();
  }, 480);
}

// ── 數字滾動動畫 ──
function countUp(el, from, to, duration, cb) {
  const start = performance.now();
  const run = (now) => {
    const t = Math.min((now - start) / duration, 1);
    // ease-in-out
    const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    el.textContent = Math.floor(from + (to - from) * eased);
    if (t < 1) {
      requestAnimationFrame(run);
    } else {
      el.textContent = to;
      if (cb) cb();
    }
  };
  requestAnimationFrame(run);
}

// ── HUD 更新 ──
function setCompanion(val) {
  state.companionValue = val;
  document.getElementById('hud-value').textContent = val;
}

/* ════════════════════════════
   星空（開始畫面）
   ════════════════════════════ */
function buildStars() {
  const canvas = document.getElementById('star-canvas');
  for (let i = 0; i < 90; i++) {
    const el = document.createElement('div');
    el.className = 'star';
    const size = Math.random() * 2.4 + 0.4;
    el.style.cssText = [
      `left:${(Math.random() * 100).toFixed(1)}%`,
      `top:${(Math.random()  * 100).toFixed(1)}%`,
      `width:${size.toFixed(1)}px`,
      `height:${size.toFixed(1)}px`,
      `--dur:${(Math.random() * 2 + 1.4).toFixed(1)}s`,
    ].join(';');
    canvas.appendChild(el);
  }
}

/* ════════════════════════════
   場景 1 · 開始畫面
   ════════════════════════════ */
function initStart() {
  buildStars();

  document.getElementById('btn-start').addEventListener('click', () => {
    goTo('scene-start', 'scene-chapter1', initChapter1);
  });
}

/* ════════════════════════════
   場景 2 · 第一章
   ════════════════════════════ */
function initChapter1() {
  // 顯示 HUD
  document.getElementById('hud').classList.remove('hidden');

  const letter  = document.getElementById('letter');
  const overlay = document.getElementById('letter-overlay');
  const body    = document.getElementById('letter-body');
  const btnClose = document.getElementById('btn-letter-close');

  // 點擊信件
  letter.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    typewriter(body, LETTER_TEXT, 38);
  });

  // 關閉信件 → 前往回憶收集
  btnClose.addEventListener('click', () => {
    overlay.classList.add('hidden');
    goTo('scene-chapter1', 'scene-memories', initMemories);
  });
}

/* ════════════════════════════
   場景 3 · 回憶收集
   ════════════════════════════ */
// 三個灰階等級：找到 0 / 1 / 2 / 3 個回憶
const WORLD_CLASSES = ['grayscale-full', 'grayscale-2', 'grayscale-1', 'color-full'];

function setWorldColor(found) {
  const world = document.getElementById('world');
  world.className = `world ${WORLD_CLASSES[found]}`;
}

function initMemories() {
  setWorldColor(0);

  const popup    = document.getElementById('mem-popup');
  const popIcon  = document.getElementById('popup-icon');
  const popTitle = document.getElementById('popup-title');
  const popText  = document.getElementById('popup-text');
  const btnClose = document.getElementById('btn-popup-close');
  const countEl  = document.getElementById('mem-count');
  const btnNext  = document.getElementById('btn-to-birthday');

  // 設定每個碎片的點擊事件
  document.querySelectorAll('.memory-spot').forEach(spot => {
    spot.addEventListener('click', () => {
      if (spot.classList.contains('found')) return;

      const idx = parseInt(spot.dataset.idx, 10);
      const m   = MEMORIES[idx];

      // 填入彈出卡片
      popIcon.textContent  = m.icon;
      popTitle.textContent = m.title;
      popText.textContent  = '';

      popup.classList.remove('hidden');
      typewriter(popText, m.text, 38);

      // 「放入心裡」按鈕
      const closeOnce = () => {
        popup.classList.add('hidden');
        spot.classList.add('found');

        state.memoriesFound++;
        const companion = state.memoriesFound * 10;
        setCompanion(companion);
        countEl.textContent = state.memoriesFound;
        setWorldColor(state.memoriesFound);

        if (state.memoriesFound === 3) {
          // 全部找到 → 出現前往按鈕
          setTimeout(() => btnNext.classList.remove('gone'), 500);
        }

        btnClose.removeEventListener('click', closeOnce);
      };
      btnClose.addEventListener('click', closeOnce);
    });
  });

  btnNext.addEventListener('click', () => {
    goTo('scene-memories', 'scene-birthday', initBirthday);
  });
}

/* ════════════════════════════
   場景 4 · 生日房間
   ════════════════════════════ */
function initBirthday() {
  const btnBlow   = document.getElementById('btn-blow');
  const cake      = document.getElementById('cake');
  const msg       = document.getElementById('bday-msg');
  const textEl    = document.getElementById('bday-text');
  const counterEl = document.getElementById('final-counter');
  const btnVideo  = document.getElementById('btn-video');

  // 設定影片連結
  if (VIDEO_URL) {
    btnVideo.href = VIDEO_URL;
  } else {
    btnVideo.remove(); // 沒有設定連結就移除按鈕
  }

  btnBlow.addEventListener('click', () => {
    // 蛋糕動畫
    cake.classList.add('blown');
    btnBlow.style.display = 'none';

    // 顯示祝福區
    msg.classList.remove('hidden');

    // 打字機 → 完成後計數到 999
    typewriter(textEl, BIRTHDAY_TEXT, 50, () => {
      setTimeout(() => {
        countUp(counterEl, 0, 999, 2400, () => {
          // 計數完成 → 顯示影片按鈕（如果有設定）
          if (VIDEO_URL) {
            setTimeout(() => btnVideo.classList.remove('gone'), 300);
          }
        });
      }, 400);
    });
  }, { once: true });
}

/* ════════════════════════════
   啟動
   ════════════════════════════ */
initStart();
