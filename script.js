/* ============================================================
   링크 설정 — 주소를 모르는 항목은 url을 ''(빈칸)으로 두면
   "준비 중"으로 표시됩니다. 주소가 생기면 이 파일에서 url만 채우세요.
   ============================================================ */

const SUNDAY_SERMON = { url: 'https://www.youtube.com/@%EC%83%9D%EB%AA%85%EC%9D%98%EB%A7%90%EC%94%80%EC%84%A0%EA%B5%90%ED%9A%8C%EC%9D%98%EC%A0%95' };   // 주일말씀 유튜브 링크

// 교회학교 암송수첩 — 받기 화면에 나오는 두 버튼의 주소
const SHEETS = {
  memo: {
    title: '교회학교 암송수첩',
    options: [
      { name: '안드로이드(갤럭시) 버전', desc: '휴대폰에 설치해서 사용해요', icon: 'phone', url: 'https://play.google.com/store/apps/details?id=com.church.memory.app' },
      { name: '아이폰 버전',     desc: '휴대폰에 설치해서 사용해요', icon: 'phone', url: 'https://apps.apple.com/kr/app/%EA%B5%90%ED%9A%8C%ED%95%99%EA%B5%90-%EC%95%94%EC%86%A1-%EC%88%98%EC%B2%A9/id6802671002' },
    ],
  },
};

const SECTIONS = [
  {
    title: '교회 소식',
    items: [
      { name: '의정부교회 홈페이지',          desc: '깨사모 의정부교회 홈페이지',                   icon: 'news',   url: 'https://ujb.jbch.org/' },
      { name: '주일포토 스토리', desc: '주일소식',    icon: 'camera', url: 'https://ujb.jbch.org/newsnotice/news/list.php?flag=1&chId=87' },
      { name: '블로그 _주일말씀 소식',     desc: '주일말씀 리마인드',        icon: 'blog',   url: 'https://blog.naver.com/soguem26' },
      { name: '생명기도수첩',     desc: '함께 드리는 기도',        icon: 'pray',  url: 'https://pray.jbch.org/' },
    ],
  },
  {
    title: '성도 앱·사이트',
    items: [
      { name: '성도연락처',      desc: '성도 주소록',                icon: 'people', url: 'https://phone.jbch.org/index.php' },
      { name: '임원수첩',        desc: '임원 연락처',                icon: 'notes',  url: 'https://address.jbch.org/' },
      { name: '토브성경',        desc: '라이프성경',                 icon: 'book',   url: 'https://bible.jbch.org/' },
      { name: '뿌리깊은싯딤나무',        desc: '싯딤나무 Radio',                  icon: 'mark',   url: 'https://www.jbch.org/ko/mcontent/view.php?cId=576&bbsUid=5072391&start=0' },
      { name: '생명선지도',      desc: '생명선 지도',                icon: 'map',    url: 'https://map.jbch.org' },
      { name: '찬송 & 은혜찬송', desc: '찬송가 보기',                icon: 'music',  url: 'https://osan-chansong.web.app/' },
      { name: '세계선교 현황판', desc: '세계 선교지 소식',           icon: 'globe',  url: 'https://dlrlgk4506.github.io/worldmission_website/' },
      { name: '교회학교 암송수첩', desc: '모바일 버전 받기',      icon: 'kid',    sheet: 'memo' },
    ]
  },
];

/* 아이콘 */
const ICONS = {
  play:   '<polygon points="7 4 20 12 7 20 7 4"/>',
  blog:   '<path d="M5 3h14v18H5z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  news:   '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  camera: '<path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6"/><path d="M16 5a3.5 3.5 0 0 1 0 6.5M18 14c2.5.6 3.5 2.5 3.5 6"/>',
  notes:  '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 3v3h6V3M9 12h6M9 16h6"/>',
  pray:   '<path d="M12 4c-3.5 2-6 5.5-6 10l3 6h3"/><path d="M12 4c3.5 2 6 5.5 6 10l-3 6h-3"/><path d="M12 4v16"/>',
  book:   '<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/><path d="M12 6v14"/>',
  mark:   '<path d="M6 3h12v18l-6-4-6 4z"/>',
  heart:  '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
  map:    '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
  kid:    '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0M9 9.5h.01M15 9.5h.01"/>',
  phone:  '<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  music:  '<path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/>',
  globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
};
/* 채워진(면) 아이콘 — Font Awesome Free v7.3.1 (https://fontawesome.com, CC BY 4.0) */
const FILLED = {
  pray: {
    viewBox: '-30 -30 700 700',
    d: 'M224 360C224 373.3 213.3 384 200 384C186.7 384 176 373.3 176 360L176 247.4L264.2 127.7C277.3 109.9 273.5 84.9 255.7 71.8C237.9 58.7 212.9 62.5 199.8 80.3L106.5 206.9C89.3 230.2 80 258.5 80 287.6L80 398.3L21.9 417.7C8.8 422 0 434.2 0 448L0 544C0 554 4.7 563.5 12.7 569.5C20.7 575.5 31.1 577.5 40.8 574.7L195.2 530.6C250.2 514.9 288 464.7 288 407.5L288 288C288 270.3 273.7 256 256 256C238.3 256 224 270.3 224 288L224 360zM416 360L416 288C416 270.3 401.7 256 384 256C366.3 256 352 270.3 352 288L352 407.6C352 464.8 389.9 515 444.8 530.7L599.2 574.8C608.9 577.6 619.2 575.6 627.3 569.6C635.4 563.6 640 554 640 544L640 448C640 434.2 631.2 422 618.1 417.6L560 398.2L560 287.5C560 258.5 550.7 230.2 533.5 206.8L440.2 80.3C427.1 62.5 402.1 58.7 384.3 71.8C366.5 84.9 362.7 109.9 375.8 127.7L464 247.4L464 360C464 373.3 453.3 384 440 384C426.7 384 416 373.3 416 360z',
  },
};
const svg = (name) => FILLED[name]
  ? `<svg class="fa" viewBox="${FILLED[name].viewBox}" aria-hidden="true"><path d="${FILLED[name].d}"/></svg>`
  : `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
const CHEVRON = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';

/* 화면 그리기 */
const sectionsEl = document.getElementById('sections');

SECTIONS.forEach((sec) => {
  const rows = sec.items.map((it) => {
    if (it.sheet) {
      return `
      <li>
        <a class="row" href="#" data-sheet="${it.sheet}">
          <span class="ico">${svg(it.icon)}</span>
          <span class="txt"><b>${it.name}</b><span>${it.desc}</span></span>
          ${CHEVRON}
        </a>
      </li>`;
    }
    const ready = Boolean(it.url);
    const href = ready ? `href="${it.url}" target="_blank" rel="noopener noreferrer"` : 'href="#" data-soon="1"';
    return `
      <li>
        <a class="row ${ready ? '' : 'soon'}" ${href}>
          <span class="ico">${svg(it.icon)}</span>
          <span class="txt"><b>${it.name}</b><span>${it.desc}</span></span>
          ${ready ? CHEVRON : '<span class="tag">준비 중</span>'}
        </a>
      </li>`;
  }).join('');

  sectionsEl.insertAdjacentHTML('beforeend', `
    <section class="section">
      <h2>${sec.title}</h2>
      <ul class="list">${rows}</ul>
    </section>`);
});

/* 주일말씀 버튼 */
const hero = document.getElementById('hero');
document.getElementById('hero-icon').innerHTML = svg('play');
if (SUNDAY_SERMON.url) {
  hero.href = SUNDAY_SERMON.url;
  hero.target = '_blank';
  hero.rel = 'noopener noreferrer';
} else {
  hero.dataset.soon = '1';
}

/* 준비 중 항목 안내 */
const toast = document.getElementById('toast');
let timer;
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-soon]');
  if (!link) return;
  e.preventDefault();
  toast.textContent = '아직 링크가 준비되지 않았어요';
  toast.classList.add('show');
  clearTimeout(timer);
  timer = setTimeout(() => toast.classList.remove('show'), 1800);
});

/* 받기 화면 (바텀시트) */
const sheet = document.getElementById('sheet');
const sheetTitle = document.getElementById('sheet-title');
const sheetBody = document.getElementById('sheet-body');

function openSheet(key) {
  const data = SHEETS[key];
  if (!data) return;
  sheetTitle.textContent = data.title;
  sheetBody.innerHTML = data.options.map((o) => {
    const ready = Boolean(o.url);
    const href = ready ? `href="${o.url}" target="_blank" rel="noopener noreferrer"` : 'href="#" data-soon="1"';
    return `
      <a class="opt ${ready ? '' : 'soon'}" ${href}>
        <span class="ico">${svg(o.icon)}</span>
        <span class="txt"><b>${o.name}</b><span>${o.desc}</span></span>
        <span class="get">${ready ? svg('download') : '준비 중'}</span>
      </a>`;
  }).join('');
  sheet.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeSheet() {
  sheet.hidden = true;
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  const opener = e.target.closest('[data-sheet]');
  if (opener) { e.preventDefault(); openSheet(opener.dataset.sheet); return; }
  if (e.target.closest('[data-close]')) closeSheet();
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });
