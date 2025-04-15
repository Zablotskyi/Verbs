// Якщо localStorage порожній, використовуємо дефолтний набір дієслів
const quizVerbs = JSON.parse(localStorage.getItem("irregularVerbs")) || [
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
];

let currentVerb = null;

function pickRandomVerb() {
  if (quizVerbs.length === 0) return;
  currentVerb = quizVerbs[Math.floor(Math.random() * quizVerbs.length)];
  document.getElementById("question").textContent = `Введіть форми для дієслова: ${currentVerb.base}`;
  // Оновлюємо клітинку Infinitive в рядку вводу
  document.getElementById("inputInfinitive").textContent = currentVerb.base;
  // Очищуємо поля вводу
  document.getElementById("inputPast").value = "";
  document.getElementById("inputParticiple").value = "";
  document.getElementById("inputTranslation").value = "";
}

function checkAnswer() {
  const inputPast = document.getElementById("inputPast").value.trim();
  const inputParticiple = document.getElementById("inputParticiple").value.trim();
  const inputTranslation = document.getElementById("inputTranslation").value.trim();

  // Якщо поле "Переклад" порожнє, вважаємо його за правильне
  const translationIsCorrect = (inputTranslation === "") ||
    (inputTranslation.toLowerCase() === currentVerb.translation.toLowerCase());

  const isCorrect =
    inputPast.toLowerCase() === currentVerb.past.toLowerCase() &&
    inputParticiple.toLowerCase() === currentVerb.participle.toLowerCase() &&
    translationIsCorrect;

  const indicator = isCorrect ? "✅" : "❌";

  // Формуємо вміст для Past Simple
  const pastCellContent = (inputPast.toLowerCase() === currentVerb.past.toLowerCase())
    ? inputPast
    : `${inputPast} <span style="color: red;">(Правильна відповідь: ${currentVerb.past})</span>`;

  // Формуємо вміст для Past Participle
  const participleCellContent = (inputParticiple.toLowerCase() === currentVerb.participle.toLowerCase())
    ? inputParticiple
    : `${inputParticiple} <span style="color: red;">(Правильна відповідь: ${currentVerb.participle})</span>`;

  // Формуємо вміст для Перекладу:
  // Якщо поле порожнє — показуємо правильну відповідь зеленим шрифтом,
  // інакше — перевіряємо правильність введеного значення
  const translationCellContent = (inputTranslation === "")
    ? `<span style="color: green;">${currentVerb.translation}</span>`
    : (inputTranslation.toLowerCase() === currentVerb.translation.toLowerCase())
      ? inputTranslation
      : `${inputTranslation} <span style="color: red;">(Правильна відповідь: ${currentVerb.translation})</span>`;

  // Створюємо новий рядок з результатами, що включає Infinitive
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${indicator}</td>
    <td>${currentVerb.base}</td>
    <td>${pastCellContent}</td>
    <td>${participleCellContent}</td>
    <td>${translationCellContent}</td>
  `;

  const resultsBody = document.getElementById("resultsBody");
  // Видаляємо поточний рядок вводу
  const inputRow = document.getElementById("inputRow");
  resultsBody.removeChild(inputRow);
  // Додаємо новостворений рядок результату на початок таблиці
  resultsBody.insertBefore(newRow, resultsBody.firstChild);

  // Створюємо новий рядок для введення відповіді
  const newInputRow = document.createElement("tr");
  newInputRow.id = "inputRow";
  newInputRow.innerHTML = `
    <td></td>
    <td id="inputInfinitive"></td>
    <td><input type="text" id="inputPast" placeholder="Past Simple" /></td>
    <td><input type="text" id="inputParticiple" placeholder="Past Participle" /></td>
    <td><input type="text" id="inputTranslation" placeholder="Переклад (не обов'язково)" /></td>
  `;
  resultsBody.insertBefore(newInputRow, resultsBody.firstChild);

  // Завантажуємо наступне запитання
  pickRandomVerb();
}

// Обробка події для натискання клавіші Enter (опційно)
document.getElementById("resultsTable").addEventListener("keydown", function(event) {
  if (event.key === "Enter" && event.target.closest("#inputRow")) {
    event.preventDefault();
    checkAnswer();
  }
});

if (quizVerbs.length === 0) {
  document.getElementById("quizContainer").innerHTML = `
    <p style="color: red;">⚠️ Увага: список дієслів порожній!</p>
    <p>Перейдіть на <a href="index.html" target="_self">головну сторінку</a> та додайте хоча б одне дієслово для початку тесту.</p>
  `;
} else {
  pickRandomVerb();
}
