const search = document.querySelector('#search');
const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-note]')];
let category = '全部';
function updateNotes() {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const card of cards) {
    const visible = (category === '全部' || card.dataset.category === category) && card.dataset.search.includes(query);
    card.hidden = !visible;
    if (visible) count++;
  }
  document.querySelector('#result-count').textContent = `${count} 篇筆記`;
  document.querySelector('#empty-state').hidden = count !== 0;
}
if (search) {
  search.addEventListener('input', updateNotes);
  for (const button of filters) button.addEventListener('click', () => {
    category = button.dataset.filter;
    for (const item of filters) item.setAttribute('aria-pressed', String(item === button));
    updateNotes();
  });
  document.querySelector('#reset-search').addEventListener('click', () => {
    search.value = ''; category = '全部';
    for (const item of filters) item.setAttribute('aria-pressed', String(item.dataset.filter === '全部'));
    updateNotes(); search.focus();
  });
}
for (const button of document.querySelectorAll('[data-copy]')) button.addEventListener('click', async () => {
  const text = document.getElementById(button.dataset.copy).textContent;
  try { await navigator.clipboard.writeText(text); button.textContent = '已複製 ✓'; }
  catch { button.textContent = '請選取下方文字複製'; }
});
