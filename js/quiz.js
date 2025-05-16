// Набір дієслів за замовчуванням
const defaultVerbs = [
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

// Завантаження з localStorage або дефолтного списку
const quizVerbs = defaultVerbs;

let shuffledVerbs = [];
let lastVerb = null;

// Перемішування
function shuffle(array) {
  return array
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

// Показ наступного дієслова
function pickNextVerb() {
  // Якщо всі слова вичерпано — перемішати з уникненням дублю
  if (shuffledVerbs.length === 0) {
    let newSet = shuffle([...quizVerbs]);

    // Уникаємо, щоб перше слово = останньому
    while (lastVerb && newSet.length > 1 && newSet[0].base === lastVerb.base) {
      newSet = shuffle([...quizVerbs]);
    }

    shuffledVerbs = newSet;
  }

  const currentVerb = shuffledVerbs.shift();
  lastVerb = currentVerb;

  document.getElementById("question").textContent = `Введіть форми для дієслова: ${currentVerb.base}`;
  document.getElementById("inputInfinitive").textContent = currentVerb.base;
  document.getElementById("inputPast").value = "";
  document.getElementById("inputParticiple").value = "";
  document.getElementById("inputTranslation").value = "";
  document.getElementById("inputPast").focus();

  window.currentVerb = currentVerb;
}

// Перевірка відповіді
function checkAnswer() {
  const inputPast = document.getElementById("inputPast").value.trim();
  const inputParticiple = document.getElementById("inputParticiple").value.trim();
  const inputTranslation = document.getElementById("inputTranslation").value.trim();
  const correct = window.currentVerb;

  const isPastCorrect = inputPast.toLowerCase() === correct.past.toLowerCase();
  const isParticipleCorrect = inputParticiple.toLowerCase() === correct.participle.toLowerCase();
  const isTranslationCorrect = inputTranslation === "" ||
    inputTranslation.toLowerCase() === correct.translation.toLowerCase();

  const isAllCorrect = isPastCorrect && isParticipleCorrect && isTranslationCorrect;
  const indicator = isAllCorrect ? "✅" : "❌";

  // 🎧 Звукове повідомлення
  const correctSound = document.getElementById("soundCorrect");
  const wrongSound = document.getElementById("soundWrong");

  if (isAllCorrect) {
    correctSound.play();
  } else {
    wrongSound.play();
  }

  const pastCell = isPastCorrect
    ? inputPast
    : `${inputPast} <span style="color:red">(Правильно: ${correct.past})</span>`;

  const participleCell = isParticipleCorrect
    ? inputParticiple
    : `${inputParticiple} <span style="color:red">(Правильно: ${correct.participle})</span>`;

  const translationCell = inputTranslation === ""
    ? `<span style="color:green">${correct.translation}</span>`
    : isTranslationCorrect
      ? inputTranslation
      : `${inputTranslation} <span style="color:red">(Правильно: ${correct.translation})</span>`;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${indicator}</td>
    <td>${correct.base}</td>
    <td>${pastCell}</td>
    <td>${participleCell}</td>
    <td>${translationCell}</td>
  `;

  const body = document.getElementById("resultsBody");
  const inputRow = document.getElementById("inputRow");
  body.removeChild(inputRow);
  body.insertBefore(row, body.firstChild);

  // Новий ввід
  const newInputRow = document.createElement("tr");
  newInputRow.id = "inputRow";
  newInputRow.innerHTML = `
    <td></td>
    <td id="inputInfinitive"></td>
    <td><input type="text" id="inputPast" placeholder="Past Simple" /></td>
    <td><input type="text" id="inputParticiple" placeholder="Past Participle" /></td>
    <td><input type="text" id="inputTranslation" placeholder="Переклад (не обов'язково)" /></td>
  `;
  body.insertBefore(newInputRow, body.firstChild);

  // ✅ Переходимо далі тільки якщо відповідь правильна
  if (isAllCorrect) {
    pickNextVerb(); // тільки якщо все правильно
  }
}

// Enter → перевірка
document.getElementById("resultsTable").addEventListener("keydown", function (event) {
  if (event.key === "Enter" && event.target.closest("#inputRow")) {
    event.preventDefault();
    checkAnswer();
  }
});

// DOM ready
document.addEventListener("DOMContentLoaded", () => {
  shuffledVerbs = shuffle(quizVerbs);
  lastVerb = null;
  pickNextVerb();
  renderDictionaryTable();
  setupToggleDictionary();
});

// Таблиця словника
function renderDictionaryTable() {
  const tbody = document.getElementById("dictionaryBody");
  tbody.innerHTML = "";
  defaultVerbs.forEach(verb => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${verb.base}</td>
      <td>${verb.past}</td>
      <td>${verb.participle}</td>
      <td>${verb.translation}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Кнопка сховати/показати
function setupToggleDictionary() {
  const btn = document.getElementById("toggleDictionaryBtn");
  const table = document.getElementById("dictionaryTable");

  btn.addEventListener("click", () => {
    const isVisible = table.style.display !== "none";
    table.style.display = isVisible ? "none" : "table";
    btn.textContent = isVisible ? "Показати" : "Сховати";
  });
}
