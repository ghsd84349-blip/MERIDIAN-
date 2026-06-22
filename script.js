/* ===========================================================
   MERIDIAN — данные и логика
   =========================================================== */

/* ---------- 1. БАЗА ОБЪЕКТОВ ---------- */
const PROPERTIES = [
  // ---- MOSCOW ----
  { id: 1, city: 'moscow', type: 'buy', title: 'Апартаменты на Тверской', price: 184000000, currency: '₽', area: 142, areaUnit: 'м²', floor: 14, totalFloors: 18, rooms: 4, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, city: 'moscow', type: 'rent', title: 'Penthouse Patriarshie', price: 980000, currency: '₽', area: 168, areaUnit: 'м²', floor: 17, totalFloors: 17, rooms: 5, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, city: 'moscow', type: 'buy', title: 'Резиденция Остоженка', price: 96500000, currency: '₽', area: 98, areaUnit: 'м²', floor: 6, totalFloors: 12, rooms: 3, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, city: 'moscow', type: 'rent', title: 'Лофт на Красном Октябре', price: 420000, currency: '₽', area: 86, areaUnit: 'м²', floor: 3, totalFloors: 6, rooms: 2, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, city: 'moscow', type: 'buy', title: 'Дом у Москва-Сити', price: 210000000, currency: '₽', area: 175, areaUnit: 'м²', floor: 41, totalFloors: 52, rooms: 4, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, city: 'moscow', type: 'rent', title: 'Апартаменты Никитская', price: 510000, currency: '₽', area: 104, areaUnit: 'м²', floor: 9, totalFloors: 14, rooms: 3, image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop' },

  // ---- SPB ----
  { id: 7, city: 'spb', type: 'buy', title: 'Резиденция на Мойке', price: 78000000, currency: '₽', area: 112, areaUnit: 'м²', floor: 3, totalFloors: 5, rooms: 3, image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, city: 'spb', type: 'rent', title: 'Апартаменты Васильевский', price: 290000, currency: '₽', area: 74, areaUnit: 'м²', floor: 4, totalFloors: 6, rooms: 2, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop' },
  { id: 9, city: 'spb', type: 'buy', title: 'Пентхаус на Крюковом канале', price: 132000000, currency: '₽', area: 156, areaUnit: 'м²', floor: 6, totalFloors: 6, rooms: 4, image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop' },
  { id: 10, city: 'spb', type: 'rent', title: 'Дом у Новой Голландии', price: 340000, currency: '₽', area: 90, areaUnit: 'м²', floor: 2, totalFloors: 4, rooms: 3, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop' },
  { id: 11, city: 'spb', type: 'buy', title: 'Резиденция Петровский остров', price: 64000000, currency: '₽', area: 88, areaUnit: 'м²', floor: 8, totalFloors: 11, rooms: 2, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop' },

  // ---- NY ----
  { id: 12, city: 'ny', type: 'buy', title: 'Penthouse Liberty', price: 6800000, currency: '$', area: 2150, areaUnit: 'sq ft', floor: 42, totalFloors: 44, rooms: 4, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop' },
  { id: 13, city: 'ny', type: 'rent', title: 'Tribeca Loft Residence', price: 18500, currency: '$', area: 1680, areaUnit: 'sq ft', floor: 6, totalFloors: 8, rooms: 3, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop' },
  { id: 14, city: 'ny', type: 'buy', title: 'Park Avenue Residence', price: 9200000, currency: '$', area: 2400, areaUnit: 'sq ft', floor: 18, totalFloors: 20, rooms: 5, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
  { id: 15, city: 'ny', type: 'rent', title: 'Hudson Yards Sky Suite', price: 22000, currency: '$', area: 1950, areaUnit: 'sq ft', floor: 51, totalFloors: 55, rooms: 3, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop' },
  { id: 16, city: 'ny', type: 'buy', title: 'SoHo Cast-Iron Penthouse', price: 5400000, currency: '$', area: 1820, areaUnit: 'sq ft', floor: 5, totalFloors: 5, rooms: 3, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop' },
];

const CITY_LABELS = { moscow: 'Москва', spb: 'Санкт-Петербург', ny: 'Нью-Йорк' };
const CITY_COORDS = {
  moscow: '55.7558° N · 37.6173° E',
  spb:    '59.9311° N · 30.3609° E',
  ny:     '40.7128° N · 74.0060° W',
};

/* ---------- 2. СОСТОЯНИЕ ---------- */
const state = {
  city: 'moscow',
  deal: 'buy',
};

/* ---------- 3. УТИЛИТЫ ---------- */
function formatPrice(p, currency){
  const formatted = p.toLocaleString('ru-RU');
  return currency === '$' ? `$${formatted}` : `${formatted} ${currency}`;
}

function dealLabelGenitive(type){
  return type === 'rent' ? 'Аренда' : 'Покупка';
}

/* ---------- 4. РЕНДЕР КАТАЛОГА ---------- */
const catalogGrid = document.getElementById('catalogGrid');
const catalogEmpty = document.getElementById('catalogEmpty');
const catalogCount = document.getElementById('catalogCount');

function getFilteredProperties(){
  return PROPERTIES.filter(p => p.city === state.city && p.type === state.deal);
}

function renderCatalog(){
  const list = getFilteredProperties();
  catalogGrid.innerHTML = '';
  rebuildCount(list);

  if(list.length === 0){
    catalogEmpty.hidden = false;
    return;
  }
  catalogEmpty.hidden = true;

  list.forEach((p, idx) => {
    const card = document.createElement('article');
    card.className = 'property-card';
    card.style.animationDelay = `${idx * 0.05}s`;

    card.innerHTML = `
      <div class="card-photo">
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
          <button class="card-btn" data-action="plan" data-id="${p.id}">Планировка</button>
          <button class="card-btn primary" data-action="book" data-id="${p.id}">Оставить заявку</button>
        </div>
      </div>
    `;
    catalogGrid.appendChild(card);
  });
}

// русская плюрализация: "объект/объекта/объектов"
function pluralizeObjects(n){
  const mod10 = n % 10, mod100 = n % 100;
  if(mod100 >= 11 && mod100 <= 14) return 'ов';
  if(mod10 === 1) return '';
  if(mod10 >= 2 && mod10 <= 4) return 'а';
  return 'ов';
}
// переопределяем используемую функцию корректной версией
function rebuildCount(list){
  catalogCount.textContent = `${list.length} объект${pluralizeObjects(list.length)}`;
}

/* ---------- 5. ФИЛЬТР: ГОРОД / СДЕЛКА ---------- */
const cityTabs = document.querySelectorAll('.city-tab');
const dealBtns = document.querySelectorAll('.deal-btn');
const liveCoords = document.getElementById('liveCoords');

cityTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    cityTabs.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.city = btn.dataset.city;
    liveCoords.textContent = CITY_COORDS[state.city];
    renderCatalog();
  });
});

dealBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    dealBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.deal = btn.dataset.deal;
    renderCatalog();
  });
});

document.getElementById('filterSubmit').addEventListener('click', () => {
  renderCatalog();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ---------- 6. МОДАЛЬНЫЕ ОКНА: ОТКРЫТИЕ/ЗАКРЫТИЕ ---------- */
function openModal(id){
  const overlay = document.getElementById(id);
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id){
  const overlay = document.getElementById(id);
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay) closeModal(overlay.id);
  });
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    document.querySelectorAll('.modal-overlay.is-open').forEach(o => closeModal(o.id));
  }
});

/* ---------- 7. МОДАЛКА «ПЛАНИРОВКА» ---------- */
const planModal = document.getElementById('planModal');
let currentPlanPropertyId = null;

function buildFloorplanSVG(p){
  // генерируем условную, но опрятную "архитектурную" планировку на основе площади/комнат
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
  // кухня/коридор полоса снизу
  const lastRowY = 10 + (cellsY - 1) * cellH;
  svg += `<line x1="10" y1="${lastRowY}" x2="350" y2="${lastRowY}" stroke="#B08D55" stroke-width="1" stroke-dasharray="4 3"/>`;
  // отметка входа
  svg += `<circle cx="180" cy="340" r="3" fill="#D4AF76"/>`;
  svg += `<text x="180" y="356" fill="#6B6E70" font-size="9" font-family="JetBrains Mono, monospace" text-anchor="middle">ВХОД</text>`;
  return svg;
}

function openPlanModal(propertyId){
  const p = PROPERTIES.find(item => item.id === Number(propertyId));
  if(!p) return;
  currentPlanPropertyId = p.id;

  document.getElementById('planModalEyebrow').textContent = `Планировка · ${CITY_LABELS[p.city]}`;
  document.getElementById('planModalTitle').textContent = p.title;
  document.getElementById('planSvg').innerHTML = buildFloorplanSVG(p);

  const specs = [
    ['Метраж', `${p.area} ${p.areaUnit}`],
    ['Комнат', p.rooms],
    ['Этаж', `${p.floor} из ${p.totalFloors}`],
    ['Сделка', dealLabelGenitive(p.type)],
    ['Стоимость', `${formatPrice(p.price, p.currency)}${p.type === 'rent' ? ' / мес' : ''}`],
    ['Город', CITY_LABELS[p.city]],
  ];
  document.getElementById('planSpecs').innerHTML = specs.map(([label, value]) => `
    <div class="plan-spec">
      <span class="plan-spec-label">${label}</span>
      <span class="plan-spec-value">${value}</span>
    </div>
  `).join('');

  openModal('planModal');
}

document.getElementById('planToBooking').addEventListener('click', () => {
  closeModal('planModal');
  setTimeout(() => openBookingModal(currentPlanPropertyId), 200);
});

/* ---------- 8. МОДАЛКА «ЗАЯВКА» ---------- */
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
let selectedMessenger = 'telegram';

function openBookingModal(propertyId){
  const p = PROPERTIES.find(item => item.id === Number(propertyId));
  if(!p) return;

  document.getElementById('bookingPropertyId').value = p.id;
  const dealWord = p.type === 'rent' ? 'аренду' : 'покупку';
  document.getElementById('bookingModalTitle').textContent =
    `Заявка на ${dealWord}: ${p.title} (${CITY_LABELS[p.city]})`;

  // сброс формы и ошибок
  bookingForm.reset();
  document.querySelectorAll('.field').forEach(f => f.classList.remove('has-error'));
  selectedMessenger = 'telegram';
  document.querySelectorAll('.msg-btn').forEach(b => b.classList.remove('is-active'));
  document.querySelector('[data-messenger="telegram"]').classList.add('is-active');

  openModal('bookingModal');
}

document.querySelectorAll('.msg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.msg-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    selectedMessenger = btn.dataset.messenger;
  });
});

/* ---------- 9. ВАЛИДАЦИЯ ФОРМЫ ---------- */
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

  // "отправка" заявки
  closeModal('bookingModal');
  showToast();
});

/* ---------- 10. TOAST ---------- */
const toast = document.getElementById('toast');
let toastTimeout = null;

function showToast(){
  clearTimeout(toastTimeout);
  toast.classList.add('is-visible');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 4200);
}

/* ---------- 11. ДЕЛЕГИРОВАНИЕ КЛИКОВ ПО КАРТОЧКАМ ---------- */
catalogGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if(!btn) return;
  const id = btn.dataset.id;
  if(btn.dataset.action === 'plan'){
    openPlanModal(id);
  } else if(btn.dataset.action === 'book'){
    openBookingModal(id);
  }
});

/* ---------- 12. ИНИЦИАЛИЗАЦИЯ ---------- */
function init(){
  renderCatalog();
}

init();
