const LOCAL_STORAGE_KEY = "irregularVerbs";

// Завантаження з localStorage або дефолтні значення
let verbs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
  { base: "awake", past: "awoke", participle: "awoke", translation: "прокидатися" },
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "beat", past: "beat", participle: "beaten", translation: "бити" },
  { base: "become", past: "became", participle: "become", translation: "ставати" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "bend", past: "bent", participle: "bent", translation: "нахилятися" },
  { base: "bet", past: "bet", participle: "bet", translation: "робити ставку" },
  { base: "bid", past: "bid", participle: "bid", translation: "пропонувати" },
  { base: "bite", past: "bit", participle: "bitten", translation: "кусати" },
  { base: "blow", past: "blew", participle: "blown", translation: "вдарити" },
  { base: "break", past: "broke", participle: "broken", translation: "розривати" },
  { base: "bring", past: "brought", participle: "brought", translation: "приносити" },
  { base: "broadcast", past: "broadcast", participle: "broadcast", translation: "транслювати" },
  { base: "build", past: "built", participle: "built", translation: "будувати" },
  { base: "buy", past: "bought", participle: "bought", translation: "купувати" },
  { base: "catch", past: "caught", participle: "caught", translation: "ловити" },
  { base: "choose", past: "chose", participle: "chosen", translation: "вибирати" },
  { base: "come", past: "came", participle: "come", translation: "приходити" },
  { base: "cost", past: "cost", participle: "cost", translation: "коштувати" },
  { base: "cut", past: "cut", participle: "cut", translation: "різати" },
  { base: "dig", past: "dug", participle: "dug", translation: "копати" },
  { base: "do", past: "did", participle: "done", translation: "робити" },
  { base: "draw", past: "drew", participle: "drawn", translation: "малювати" },
  { base: "drive", past: "drove", participle: "driven", translation: "їхати" },
  { base: "drink", past: "drank", participle: "drunk", translation: "пити" },
  { base: "eat", past: "ate", participle: "eaten", translation: "їсти" },
  { base: "fall", past: "fell", participle: "fallen", translation: "падати" },
  { base: "feel", past: "felt", participle: "felt", translation: "відчувати" },
  { base: "fight", past: "fought", participle: "fought", translation: "боротися" },
  { base: "find", past: "found", participle: "found", translation: "знаходити" },
  { base: "fly", past: "flew", participle: "flown", translation: "літати" },
  { base: "forget", past: "forgot", participle: "forgotten", translation: "забувати" },
  { base: "forgive", past: "forgave", participle: "forgiven", translation: "прощати" },
  { base: "get", past: "got", participle: "got/gotten", translation: "отримувати" },
  { base: "give", past: "gave", participle: "given", translation: "давати" },
  { base: "go", past: "went", participle: "gone", translation: "йти" },
  { base: "grow", past: "grew", participle: "grown", translation: "рости" },
  { base: "hang", past: "hung", participle: "hung", translation: "висіти" },
  { base: "have", past: "had", participle: "had", translation: "мати" },
  { base: "hear", past: "heard", participle: "heard", translation: "чути" },
  { base: "hit", past: "hit", participle: "hit", translation: "влучити" },
  { base: "hold", past: "held", participle: "held", translation: "тримати" },
  { base: "keep", past: "kept", participle: "kept", translation: "зберігати" },
  { base: "know", past: "knew", participle: "known", translation: "знати" },
  { base: "lay", past: "laid", participle: "laid", translation: "лежати" },
  { base: "lead", past: "led", participle: "led", translation: "вести" },
  { base: "leave", past: "left", participle: "left", translation: "залишати" },
  { base: "lend", past: "lent", participle: "lent", translation: "позичати" },
  { base: "let", past: "let", participle: "let", translation: "дозволяти" },
  { base: "lie", past: "lay", participle: "lain", translation: "брехати" },
  { base: "lose", past: "lost", participle: "lost", translation: "втрачати" },
  { base: "make", past: "made", participle: "made", translation: "робити" },
  { base: "mean", past: "meant", participle: "meant", translation: "мати на увазі" },
  { base: "meet", past: "met", participle: "met", translation: "зустрічатися" },
  { base: "pay", past: "paid", participle: "paid", translation: "платити" },
  { base: "put", past: "put", participle: "put", translation: "ставати" },
  { base: "read", past: "read", participle: "read", translation: "читати" },
  { base: "ride", past: "rode", participle: "ridden", translation: "їхати" },
  { base: "ring", past: "rang", participle: "rung", translation: "дзвонити" },
  { base: "rise", past: "rose", participle: "risen", translation: "підніматися" },
  { base: "run", past: "ran", participle: "run", translation: "бігти" },
  { base: "say", past: "said", participle: "said", translation: "говорити" },
  { base: "see", past: "saw", participle: "seen", translation: "бачити" },
  { base: "sell", past: "sold", participle: "sold", translation: "продавати" },
  { base: "send", past: "sent", participle: "sent", translation: "посилати" },
  { base: "sing", past: "sang", participle: "sung", translation: "співати" },
  { base: "sit", past: "sat", participle: "sat", translation: "сидіти" },
  { base: "sleep", past: "slept", participle: "slept", translation: "спати" },
  { base: "speak", past: "spoke", participle: "spoken", translation: "говорити" },
  { base: "spend", past: "spent", participle: "spent", translation: "витрачати" },
  { base: "stand", past: "stood", participle: "stood", translation: "стояти" },
  { base: "swim", past: "swam", participle: "swum", translation: "плавати" },
  { base: "take", past: "took", participle: "taken", translation: "брати" },
  { base: "teach", past: "taught", participle: "taught", translation: "навчати" },
  { base: "tear", past: "tore", participle: "torn", translation: "рвати" },
  { base: "tell", past: "told", participle: "told", translation: "розповідати" },
  { base: "think", past: "thought", participle: "thought", translation: "думати" },
  { base: "throw", past: "threw", participle: "thrown", translation: "кидати" },
  { base: "understand", past: "understood", participle: "understood", translation: "розуміти" },
  { base: "wake", past: "woke", participle: "woken", translation: "будити" },
  { base: "win", past: "won", participle: "won", translation: "перемагати" },
  { base: "write", past: "wrote", participle: "written", translation: "писати" }
  // (додайте решту за потреби)
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
