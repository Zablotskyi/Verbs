const LOCAL_STORAGE_KEY = "irregularVerbs";

// Завантаження з localStorage або дефолтні значення
let verbs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "break", past: "broke", participle: "broken", translation: "ламати" },
];

// DOM-елементи
const tableBody = document.getElementById("verbsTableBody");
const searchInput = document.getElementById("searchInput");

// Функція збереження масиву дієслів у localStorage
function saveVerbs() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(verbs));
}

// Функція рендерингу таблиці (з кнопками редагування)
function renderVerbs(filteredVerbs) {
  tableBody.innerHTML = "";
  filteredVerbs.forEach((verb) => {
    // Отримуємо індекс елемента в основному масиві (при наявності пошуку цей індекс потрібен для правильного редагування)
    const origIndex = verbs.indexOf(verb);
    const row = `
      <tr>
        <td>${verb.base}</td>
        <td>${verb.past}</td>
        <td>${verb.participle}</td>
        <td>${verb.translation}</td>
        <td><button onclick="editVerb(${origIndex})">Редагувати</button></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Обробка події пошуку
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = verbs.filter(verb =>
    verb.base.toLowerCase().includes(value) ||
    verb.past.toLowerCase().includes(value) ||
    verb.participle.toLowerCase().includes(value) ||
    verb.translation.toLowerCase().includes(value)
  );
  renderVerbs(filtered);
});

// Функція для додавання нового слова через форму
document.getElementById("addVerbForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const base = document.getElementById("baseInput").value.trim();
  const past = document.getElementById("pastInput").value.trim();
  const participle = document.getElementById("participleInput").value.trim();
  const translation = document.getElementById("translationInput").value.trim();

  if (!base || !past || !participle || !translation) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  verbs.push({ base, past, participle, translation });
  saveVerbs();
  renderVerbs(verbs);
  this.reset();
});

// Функція редагування дієслова.
// Викликається при натисканні кнопки "Редагувати" у відповідному рядку.
function editVerb(index) {
  const verb = verbs[index];
  const newBase = prompt("Редагуйте Infinitive:", verb.base);
  if (newBase === null) return; // якщо відмінили, нічого не змінюємо

  const newPast = prompt("Редагуйте Past Simple:", verb.past);
  if (newPast === null) return;

  const newParticiple = prompt("Редагуйте Past Participle:", verb.participle);
  if (newParticiple === null) return;

  const newTranslation = prompt("Редагуйте Переклад:", verb.translation);
  if (newTranslation === null) return;

  // Оновлюємо об'єкт дієслова
  verbs[index] = {
    base: newBase.trim(),
    past: newPast.trim(),
    participle: newParticiple.trim(),
    translation: newTranslation.trim()
  };

  saveVerbs();
  renderVerbs(verbs);
}
