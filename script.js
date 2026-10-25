/* ============ NENAGLAZ site logic v3 ============ */
const W = 'assets/web/';

const GALLERIES = {
  details: { title: 'Детали', items: [
    ['det-oazis-ugol.jpg', 'Внешний угол без пластикового профиля, запил плитки под 45°'],
    ['det-pshen-luk.jpg', 'Скрытый люк в один уровень с плиткой, с сохранением рисунка'],
    ['det-fed-vena.jpg', 'Продумываем раскладку плитки с рисунком заранее'],
    ['det-oazis-rez.jpg', 'Фигурный рез и вырезы любой сложности'],
  ]},
  oazis: { title: 'ЖК «Оазис», ул. Лескова', items: [
    ['oazis-01.jpg', 'Готовый санузел'],
    ['oazis-02.jpg', 'Столешница изготовлена из керамогранита'],
    ['oazis-03.jpg', 'Установка чистовой сантехники'],
    ['oazis-04.jpg', 'Геометрия швов во всех плоскостях'],
    ['oazis-05.jpg', 'Геометрия швов сохранена вокруг инсталляции'],
    ['oazis-12.jpg', 'Формирование внешнего угла эпоксидной затиркой'],
    ['oazis-08.jpg', 'Смеситель скрытого монтажа'],
    ['oazis-09.jpg', 'Примыкание борта ванны к стене'],
    ['oazis-07.jpg', 'Подоконник из керамогранита с алюминиевой кромкой'],
    ['oazis-10.jpg', 'Кухня, стена-фартук из крупноформата'],
  ]},
  pshen: { title: 'ЖК «Пшеница», Краснообск', items: [
    ['pshen-01.jpg', 'Готовый санузел'],
    ['pshen-03.jpg', 'Экран ванны со скрытым люком'],
    ['pshen-04.jpg', 'Скрытый люк с сохранением рисунка, без герметика'],
    ['pshen-10.jpg', 'Шов люка загерметизирован только к одной плоскости: люк открывается и возвращается на место, скрывая шов'],
    ['pshen-05.jpg', 'Вид под нишей'],
    ['pshen-06.jpg', 'Угол экрана с люком, чистые стыки'],
    ['pshen-07.jpg', 'Процесс работы'],
    ['pshen-08.jpg', 'Чистовая сантехника и герметизация скрытого люка'],
  ]},
  fed: { title: 'Федосеева, Золотая Нива', items: [
    ['fed-01.jpg', 'Готовая ванная'],
    ['fed-20.jpg', 'Отверстия для инсталляции на совмещённых плитах'],
    ['fed-03.jpg', 'Рисунок подобран до укладки, продолжается с плитки на плитку'],
    ['fed-12.jpg', 'Ревизионный люк в экране с сохранением рисунка'],
    ['fed-13.jpg', 'Идеальная геометрия швов'],
    ['fed-06.jpg', 'Короб: откосы с запилами 45°'],
    ['fed-19.jpg', 'Второй санузел'],
    ['fed-14.jpg', 'Геометрия углов 90°'],
    ['fed-17.jpg', 'До работ'],
  ]},
  eko: { title: 'ЖК «Экополис», Солнечная 3', items: [
    ['eko-18.jpg', 'Завершённый санузел'],
    ['eko-02.jpg', 'Акцентная стена из шестиугольной плитки'],
    ['eko-03.jpg', 'Экран с нишей для ног'],
    ['eko-13.jpg', 'Скрытый люк в экране ванны'],
    ['eko-14.jpg', 'Встроенный полотенцесушитель'],
    ['eko-19.jpg', 'Угловой экран ванны с запилом 45°'],
    ['eko-04.jpg', 'Второй санузел'],
    ['eko-08.jpg', 'До работ'],
  ]},
  dem: { title: 'Демакова', items: [
    ['dem-01.jpg', 'Завершённые работы'],
    ['dem-02.jpg', 'Бортик к ванне из плитки'],
    ['dem-10.jpg', 'Санузел до ремонта'],
    ['dem-05.jpg', 'Процесс укладки при неровном основании'],
    ['dem-03.jpg', 'Туалет после работ, коммуникации оставлены открытыми по просьбе заказчика'],
    ['dem-04.jpg', ''],
    ['dem-09.jpg', 'Ванная до'],
  ]},
  zar: { title: 'СНТ «Заря», Кольцово', items: [
    ['zar-01.jpg', 'Готовый санузел загородного дома'],
    ['zar-08.jpg', 'Процесс, выставление каждого ряда по уровню'],
    ['zar-07.jpg', 'Замывка плитки после каждого завершённого этапа'],
    ['zar-03.jpg', 'Монтаж поддона из искусственного камня'],
    ['zar-05.jpg', ''],
    ['zar-06.jpg', 'Сборка тумбы для монтажа с раковиной'],
  ]},
  plan: { title: 'ДНП «Планета»', items: [
    ['plan-04.jpg', 'До работ, бетонная плита террасы'],
    ['plan-08.jpg', 'Гидроизоляция для уличного основания'],
    ['plan-01.jpg', 'Монтаж разделительной мембраны'],
    ['plan-03.jpg', 'Укладка керамогранита для террасы'],
    ['plan-07.jpg', 'Чистовой скруглённый рез в зонах примыкания'],
    ['plan-05.jpg', 'Соблюдение одного направления рельефа плитки'],
    ['plan-02.jpg', 'Лестница и терраса из крупноформатного керамогранита'],
  ]},
  reviews: { title: 'Отзывы', items: [
    ['../reviews/avito-reviews-1.png', ''],
    ['../reviews/avito-reviews-2.png', ''],
    ['../reviews/01-mekhlin-crop.jpg', ''],
    ['../reviews/02-larisa.jpg', ''],
  ]},
};

/* ---------- reveal + заголовки по словам ---------- */
document.querySelectorAll('h2').forEach(h => {
  const words = h.textContent.trim().split(/\s+/);
  h.innerHTML = words.map((w, i) =>
    `<span class="w" style="transition-delay:${i * 70}ms">${w}</span>`).join(' ');
});
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.rv, h2').forEach(el => io.observe(el));

/* ---------- topbar + кнопка наверх ---------- */
const topbar = document.querySelector('.topbar');
const upBtn = document.getElementById('up');
addEventListener('scroll', () => {
  topbar.classList.toggle('solid', scrollY > 60);
  upBtn.classList.toggle('show', scrollY > 700);
}, { passive: true });
upBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- hero parallax ---------- */
const heroImg = document.querySelector('.hero-bg img');
if (heroImg && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  addEventListener('scroll', () => {
    const y = Math.min(scrollY, innerHeight);
    heroImg.style.transform = `scale(1.06) translateY(${y * .12}px)`;
  }, { passive: true });
}

/* ---------- lightbox + предзагрузка ---------- */
const lb = document.getElementById('lb');
const lbImg = document.getElementById('lb-img');
const lbCap = document.getElementById('lb-cap');
const lbCount = document.getElementById('lb-count');
const lbTitle = document.getElementById('lb-title');
let cur = null, curKey = null, idx = 0;
const cache = {};
function preloadItem(src) {
  if (cache[src]) return cache[src];
  const im = new Image();
  im.decoding = 'async';
  im.src = W + src;
  cache[src] = im;
  return im;
}
function preloadAround(key, i) {
  const it = GALLERIES[key].items, n = it.length;
  [(i - 1 + n) % n, (i + 1) % n].forEach(j => preloadItem(it[j][0]));
}
function preloadAll(key) { GALLERIES[key].items.forEach(([f]) => preloadItem(f)); }

function openGallery(key, i = 0) {
  cur = GALLERIES[key]; if (!cur) return;
  curKey = key; idx = i; render(); lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  preloadAround(key, idx);
  setTimeout(() => preloadAll(key), 200);
}
function render() {
  const [src, cap] = cur.items[idx];
  lb.classList.add('loading');
  lbImg.classList.remove('ready');
  lbImg.onload = () => { lbImg.classList.add('ready'); lb.classList.remove('loading'); };
  if (cache[src] && cache[src].complete) { lbImg.onload(); }
  lbImg.src = W + src; lbImg.alt = cap; lbCap.textContent = cap;
  lbCount.textContent = (idx + 1) + ' / ' + cur.items.length;
  lbTitle.textContent = cur.title;
}
function step(d) { idx = (idx + d + cur.items.length) % cur.items.length; render(); preloadAround(curKey, idx); }
function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; }

document.querySelectorAll('[data-gallery]').forEach(el =>
  el.addEventListener('click', () => openGallery(el.dataset.gallery, +(el.dataset.index || 0))));
document.getElementById('lb-next').onclick = () => step(1);
document.getElementById('lb-prev').onclick = () => step(-1);
document.getElementById('lb-close').onclick = closeLb;
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') step(1);
  if (e.key === 'ArrowLeft') step(-1);
});

/* ---------- свайпы в лайтбоксе ---------- */
let tx = 0, ty = 0;
lb.addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
lb.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
}, { passive: true });

/* год в футере */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- цели Метрики: клики по мессенджерам и звонку ---------- */
function goal(name){ try { if (window.ym) ym(113778870, 'reachGoal', name); } catch(e){} }
document.addEventListener('click', function(e){
  var a = e.target.closest ? e.target.closest('a') : null;
  if (!a) return;
  var h = a.getAttribute('href') || '';
  if (h.indexOf('t.me/') !== -1) goal('tg_click');
  else if (h.indexOf('wa.me/') !== -1) goal('wa_click');
  else if (h.indexOf('max.ru/') !== -1) goal('max_click');
  else if (h.indexOf('instagram.com/') !== -1) goal('ig_click');
  else if (h.indexOf('tel:') === 0) goal('call_click');
});

/* ---------- воронка: доскроллил до ключевых секций ---------- */
['portfolio', 'reviews', 'contact'].forEach(function (id) {
  var el = document.getElementById(id);
  if (!el) return;
  var sent = false;
  new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting && !sent) { sent = true; goal('view_' + id); }
    });
  }, { threshold: .4 }).observe(el);
});
