/* ===========================================================
   MERIDIAN — данные и логика
   =========================================================== */

/* ---------- 1. БАЗА ОБЪЕКТОВ ---------- */
const PROPERTIES = [
  // ---- MOSCOW: современные ЖК премиум-класса, хай-тек и контемпорари пентхаусы ----
  { id: 1, city: 'moscow', type: 'buy', title: 'Апартаменты на Тверской', price: 184000000, currency: '₽', area: 142, areaUnit: 'м²', floor: 14, totalFloors: 18, rooms: 4, image: 'https://images.unsplash.com/photo-1759845565036-cbecbcfcb8e2?auto=format&fit=crop&w=800&q=80' },
  { id: 2, city: 'moscow', type: 'rent', title: 'Penthouse Patriarshie', price: 980000, currency: '₽', area: 168, areaUnit: 'м²', floor: 17, totalFloors: 17, rooms: 5, image: 'https://images.unsplash.com/photo-1642976975710-1d8890dbf5ab?auto=format&fit=crop&w=800&q=80' },
  { id: 3, city: 'moscow', type: 'buy', title: 'Резиденция Остоженка', price: 96500000, currency: '₽', area: 98, areaUnit: 'м²', floor: 6, totalFloors: 12, rooms: 3, image: 'https://images.unsplash.com/photo-1776362355123-ca966d36e29c?auto=format&fit=crop&w=800&q=80' },
  { id: 4, city: 'moscow', type: 'rent', title: 'Лофт на Красном Октябре', price: 420000, currency: '₽', area: 86, areaUnit: 'м²', floor: 3, totalFloors: 6, rooms: 2, image: 'https://images.unsplash.com/photo-1611755489400-3c53602ab783?auto=format&fit=crop&w=800&q=80' },
  { id: 5, city: 'moscow', type: 'buy', title: 'Дом у Москва-Сити', price: 210000000, currency: '₽', area: 175, areaUnit: 'м²', floor: 41, totalFloors: 52, rooms: 4, image: 'https://images.unsplash.com/photo-1760611656071-a8bef0578874?auto=format&fit=crop&w=800&q=80' },
  { id: 6, city: 'moscow', type: 'rent', title: 'Апартаменты Никитская', price: 510000, currency: '₽', area: 104, areaUnit: 'м²', floor: 9, totalFloors: 14, rooms: 3, image: 'https://images.unsplash.com/photo-1707484687082-9493754d389f?auto=format&fit=crop&w=800&q=80' },

  // ---- SPB: историческая архитектура, набережные, интерьеры с лепниной ----
  { id: 7, city: 'spb', type: 'buy', title: 'Резиденция на Мойке', price: 78000000, currency: '₽', area: 112, areaUnit: 'м²', floor: 3, totalFloors: 5, rooms: 3, image: 'https://images.unsplash.com/photo-1690831327125-470fa97acdc5?auto=format&fit=crop&w=800&q=80' },
  { id: 8, city: 'spb', type: 'rent', title: 'Апартаменты Васильевский', price: 290000, currency: '₽', area: 74, areaUnit: 'м²', floor: 4, totalFloors: 6, rooms: 2, image: 'https://images.unsplash.com/photo-1610197361600-33a3a5073cad?auto=format&fit=crop&w=800&q=80' },
  { id: 9, city: 'spb', type: 'buy', title: 'Пентхаус на Крюковом канале', price: 132000000, currency: '₽', area: 156, areaUnit: 'м²', floor: 6, totalFloors: 6, rooms: 4, image: 'https://images.unsplash.com/photo-1635237929027-819d8cce4c26?auto=format&fit=crop&w=800&q=80' },
  { id: 10, city: 'spb', type: 'rent', title: 'Дом у Новой Голландии', price: 340000, currency: '₽', area: 90, areaUnit: 'м²', floor: 2, totalFloors: 4, rooms: 3, image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&w=800&q=80' },
  { id: 11, city: 'spb', type: 'buy', title: 'Резиденция Петровский остров', price: 64000000, currency: '₽', area: 88, areaUnit: 'м²', floor: 8, totalFloors: 11, rooms: 2, image: 'https://images.unsplash.com/photo-1642021824052-920192524b19?auto=format&fit=crop&w=800&q=80' },

  // ---- NY: лофты Трайбеки с кирпичом, панорамные пентхаусы с видом на skyline ----

  { id: 12, city: 'ny', type: 'buy', title: 'Penthouse Liberty', price: 6800000, currency: '$', area: 2150, areaUnit: 'sq ft', floor: 42, totalFloors: 44, rooms: 4, image: 'https://images.unsplash.com/photo-1540753421673-74b8716d78ef?auto=format&fit=crop&w=800&q=80' },
  { id: 13, city: 'ny', type: 'rent', title: 'Tribeca Loft Residence', price: 18500, currency: '$', area: 1680, areaUnit: 'sq ft', floor: 6, totalFloors: 8, rooms: 3, image: 'https://images.unsplash.com/photo-1672699505740-dea2498c59ae?auto=format&fit=crop&w=800&q=80' },
  { id: 14, city: 'ny', type: 'buy', title: 'Park Avenue Residence', price: 9200000, currency: '$', area: 2400, areaUnit: 'sq ft', floor: 18, totalFloors: 20, rooms: 5, image: 'https://images.unsplash.com/photo-1673384131434-4989a438198c?auto=format&fit=crop&w=800&q=80' },
  { id: 15, city: 'ny', type: 'rent', title: 'Hudson Yards Sky Suite', price: 22000, currency: '$', area: 1950, areaUnit: 'sq ft', floor: 51, totalFloors: 55, rooms: 3, image: 'https://images.unsplash.com/photo-1760611655987-d348d6d28174?auto=format&fit=crop&w=800&q=80' },
  { id: 16, city: 'ny', type: 'buy', title: 'SoHo Cast-Iron Penthouse', price: 5400000, currency: '$', area: 1820, areaUnit: 'sq ft', floor: 5, totalFloors: 5, rooms: 3, image: 'https://images.unsplash.com/photo-1510593281346-c2b566378c39?auto=format&fit=crop&w=800&q=80' },
];

const CITY_LABELS = { moscow: 'Москва', spb: 'Санкт-Петербург', ny: 'Нью-Йорк' };

/* ---------- 2. СОСТОЯНИЕ ---------- */
const state = {
  city: 'moscow',
  deal: 'buy',
  activePropertyId: null,
};

/* ---------- 3. УТИЛИТЫ ---------- */
function formatPrice(p, currency){
  const formatted = p.toLocaleString('ru-RU');
  return currency === '$' ? `$${formatted}` : `${formatted} ${currency}`;
}

function dealLabelGenitive(type){
  return type === 'rent' ? 'Аренда' : 'Покупка';
}

function pluralizeObjects(n){
  const mod10 = n % 10, mod100 = n % 100;
  if(mod100 >= 11 && mod100 <= 14) return 'ов';
  if(mod10 === 1) return '';
  if(mod10 >= 2 && mod10 <= 4) return 'а';
  return 'ов';
}

/* ---------- 4. НАВИГАЦИЯ МЕЖДУ СЛАЙДАМИ ---------- */
const slides = document.querySelectorAll('.slide');
const progressDots = document.querySelectorAll('.progress-dot');

function goToSlide(stepNumber){
  slides.forEach(slide => {
    slide.classList.toggle('is-active', slide.dataset.slide === String(stepNumber));
  });
  progressDots.forEach(dot => {
    dot.classList.toggle('is-active', dot.dataset.step === String(stepNumber));
  });
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

document.getElementById('logoHome').addEventListener('click', () => goToSlide(1));
document.getElementById('backToSlide1').addEventListener('click', () => goToSlide(1));
document.getElementById('backToSlide2').addEventListener('click', () => goToSlide(2));

/* ---------- 5. ФИЛЬТР НА СЛАЙДЕ 1: ГОРОД / СДЕЛКА ---------- */
const cityTabs = document.querySelectorAll('.city-tab');
const dealBtns = document.querySelectorAll('.deal-btn');

cityTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    cityTabs.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.city = btn.dataset.city;
  });
});

dealBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    dealBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.deal = btn.dataset.deal;
  });
});

document.getElementById('filterSubmit').addEventListener('click', () => {
  renderCatalog();
  goToSlide(2);
});

/* ---------- 6. РЕНДЕР КАТАЛОГА (СЛАЙД 2), ЗАВИСИТ ОТ ВЫБОРА НА СЛАЙДЕ 1 ---------- */
const catalogGrid = document.getElementById('catalogGrid');
const catalogEmpty = document.getElementById('catalogEmpty');
const catalogCount = document.getElementById('catalogCount');
const catalogTitle = document.getElementById('catalogTitle');
const catalogEyebrow = document.getElementById('catalogEyebrow');

function getFilteredProperties(){
  return PROPERTIES.filter(p => p.city === state.city && p.type === state.deal);
}

function renderCatalog(){
  const list = getFilteredProperties();
  catalogGrid.innerHTML = '';

  catalogEyebrow.textContent = `02 / Каталог · ${CITY_LABELS[state.city]} · ${dealLabelGenitive(state.deal)}`;
  catalogTitle.textContent = state.deal === 'rent'
    ? `Аренда в городе ${CITY_LABELS[state.city]}`
    : `Покупка в городе ${CITY_LABELS[state.city]}`;
  catalogCount.textContent = `${list.length} объект${pluralizeObjects(list.length)}`;

  if(list.length === 0){
    catalogEmpty.hidden = false;
    return;
  }
  catalogEmpty.hidden = true;

  list.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'property-card';
    card.style.animationDelay = `${idx * 0.05}s`;
    card.dataset.id = p.id;

    card.innerHTML = `
      <div class="card-photo" data-label="FACADE">
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.closest('.card-photo').classList.add('img-fallback')">
        <span class="card-floor-tag">ЭТАЖ ${p.floor}/${p.totalFloors}</span>
        <span class="card-deal-tag">${p.type === 'rent' ? 'Аренда' : 'Продажа'}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-meta">
          <span>МЕТРАЖ <b>${p.area} ${p.areaUnit}</b></span>
          <span>КОМНАТ <b>${p.rooms}</b></span>
        </div>
        <div class="card-price">${formatPrice(p.price, p.currency)}${p.type === 'rent' ? '<small>/мес</small>' : ''}</div>
        <div class="card-actions">
          <button class="card-btn" data-action="plan" data-id="${p.id}" type="button">Посмотреть планировку</button>
          <button class="card-btn primary" data-action="book" data-id="${p.id}" type="button">Забронировать</button>
        </div>
      </div>
    `;
    catalogGrid.appendChild(card);
  });
}

/* ---------- 7. ДЕЛЕГИРОВАНИЕ КЛИКОВ ПО КАРТОЧКАМ → СЛАЙД 3 ---------- */
catalogGrid.addEventListener('click', (e) => {
  const actionBtn = e.target.closest('[data-action]');
  const card = e.target.closest('.property-card');
  if(!card) return;
  const id = actionBtn ? actionBtn.dataset.id : card.dataset.id;
  openDetailSlide(id);
});

/* ---------- 8. СЛАЙД 3: ДЕТАЛЬНЫЙ РАЗБОР ОБЪЕКТА ---------- */
function buildFloorplanSVG(p){
  const rooms = p.rooms;
  const cellsX = rooms <= 2 ? 2 : 3;
  const cellsY = Math.ceil(rooms / cellsX) + 1;
  const cellW = 320 / cellsX;
  const cellH = 320 / cellsY;
  let svg = `<rect x="10" y="10" width="340" height="340" fill="none" stroke="#B08D55" stroke-width="1.5"/>`;
  let roomIndex = 0;
  for(let y = 0; y < cellsY && roomIndex < rooms; y++){
    for(let x = 0; x < cellsX && roomIndex < rooms; x++){
      const rx = 10 + x * cellW;
      const ry = 10 + y * cellH;
      svg += `<rect x="${rx}" y="${ry}" width="${cellW}" height="${cellH}" fill="none" stroke="#3A3D42" stroke-width="1"/>`;
      svg += `<text x="${rx + cellW/2}" y="${ry + cellH/2}" fill="#9A9D9F" font-size="10" font-family="JetBrains Mono, monospace" text-anchor="middle">КОМН. ${roomIndex+1}</text>`;
      roomIndex++;
    }
  }
  const lastRowY = 10 + (cellsY - 1) * cellH;
  svg += `<line x1="10" y1="${lastRowY}" x2="350" y2="${lastRowY}" stroke="#B08D55" stroke-width="1" stroke-dasharray="4 3"/>`;
  svg += `<circle cx="180" cy="340" r="3" fill="#D4AF76"/>`;
  svg += `<text x="180" y="356" fill="#6B6E70" font-size="9" font-family="JetBrains Mono, monospace" text-anchor="middle">ВХОД</text>`;
  return svg;
}

function openDetailSlide(propertyId){
  const p = PROPERTIES.find(item => item.id === Number(propertyId));
  if(!p) return;
  state.activePropertyId = p.id;

  document.getElementById('detailEyebrow').textContent = `${dealLabelGenitive(p.type)} · ${CITY_LABELS[p.city]}`;
  document.getElementById('detailTitle').textContent = p.title;
  document.getElementById('planSvg').innerHTML = buildFloorplanSVG(p);
  document.getElementById('detailPhoto').innerHTML = `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.classList.add('img-fallback')">`;

  const specs = [
    ['Метраж', `${p.area} ${p.areaUnit}`],
    ['Комнат', p.rooms],
    ['Этаж', `${p.floor} из ${p.totalFloors}`],
    ['Сделка', dealLabelGenitive(p.type)],
    ['Стоимость', `${formatPrice(p.price, p.currency)}${p.type === 'rent' ? ' / мес' : ''}`],
    ['Город', CITY_LABELS[p.city]],
  ];
  document.getElementById('detailSpecs').innerHTML = specs.map(([label, value]) => `
    <div class="plan-spec">
      <span class="plan-spec-label">${label}</span>
      <span class="plan-spec-value">${value}</span>
    </div>
  `).join('');

  document.getElementById('bookingPropertyId').value = p.id;
  bookingForm.reset();
  document.querySelectorAll('.field').forEach(f => f.classList.remove('has-error'));
  selectedMessenger = 'telegram';
  document.querySelectorAll('.msg-btn').forEach(b => b.classList.remove('is-active'));
  document.querySelector('[data-messenger="telegram"]').classList.add('is-active');

  goToSlide(3);
}

/* ---------- 9. МЕССЕНДЖЕР-ТОГГЛ ---------- */
const bookingForm = document.getElementById('bookingForm');
let selectedMessenger = 'telegram';

document.querySelectorAll('.msg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.msg-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    selectedMessenger = btn.dataset.messenger;
  });
});

/* ---------- 10. ВАЛИДАЦИЯ ФОРМЫ ---------- */
function validateField(fieldEl, validatorFn){
  const input = fieldEl.querySelector('input');
  const isValid = validatorFn(input.value.trim());
  fieldEl.classList.toggle('has-error', !isValid);
  return isValid;
}

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameField = bookingForm.querySelector('[data-field="name"]');
  const phoneField = bookingForm.querySelector('[data-field="phone"]');
  const emailField = bookingForm.querySelector('[data-field="email"]');

  const nameOk = validateField(nameField, v => v.length >= 2);
  const phoneOk = validateField(phoneField, v => v.replace(/[^\d]/g, '').length >= 10);
  const emailOk = validateField(emailField, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));

  if(!(nameOk && phoneOk && emailOk)){
    return;
  }

  showToast();
  goToSlide(2);
});

/* ---------- 11. TOAST ---------- */
const toast = document.getElementById('toast');
let toastTimeout = null;

function showToast(){
  clearTimeout(toastTimeout);
  toast.classList.add('is-visible');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 4200);
}

/* ---------- 12. ИНИЦИАЛИЗАЦИЯ ---------- */
function init(){
  renderCatalog();
  goToSlide(1);
}

init();
