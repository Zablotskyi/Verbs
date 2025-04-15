const LOCAL_STORAGE_KEY = "irregularVerbs";

// Завантаження з localStorage або дефолтні
let verbs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "break", past: "broke", participle: "broken", translation: "ламати" },
];

// DOM-елементи
const tableBody = document.getElementById("verbsTableBody");
const searchInput = document.getElementById("searchInput");

// Зберігання у localStorage
function saveVerbs() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(verbs));
}

// Відображення таблиці
function renderVerbs(filteredVerbs) {
  tableBody.innerHTML = "";
  filteredVerbs.forEach(verb => {
    const row = `<tr>
      <td>${verb.base}</td>
      <td>${verb.past}</td>
      <td>${verb.participle}</td>
      <td>${verb.translation}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Пошук
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

// Додавання нового слова
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

// Завантажити як JSON
function downloadVerbs() {
  const dataStr = JSON.stringify(verbs, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "verbs.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Первинне завантаження
renderVerbs(verbs);

// Глобально доступна функція для кнопки
window.downloadVerbs = downloadVerbs;
