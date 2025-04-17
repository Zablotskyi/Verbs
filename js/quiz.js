// Дефолтний набір дієслів
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

// Підвантажуємо з localStorage або безпосередньо дефолт
const quizVerbs = JSON.parse(localStorage.getItem("irregularVerbs")) || defaultVerbs;

let currentVerb = null;

// Показати випадкове дієслово
function pickRandomVerb() {
  if (!quizVerbs.length) return;
  currentVerb = quizVerbs[Math.floor(Math.random() * quizVerbs.length)];
  document.getElementById("question").textContent = `Введіть форми для дієслова: ${currentVerb.base}`;
  document.getElementById("inputInfinitive").textContent = currentVerb.base;
  document.getElementById("inputPast").value = "";
  document.getElementById("inputParticiple").value = "";
  document.getElementById("inputTranslation").value = "";
  document.getElementById("inputPast").focus();
}

// Перевірка відповіді
function checkAnswer() {
  const pastInput = document.getElementById("inputPast").value.trim();
  const partInput = document.getElementById("inputParticiple").value.trim();
  const transInput = document.getElementById("inputTranslation").value.trim();

  const okPast = pastInput.toLowerCase() === currentVerb.past.toLowerCase();
  const okPart = partInput.toLowerCase() === currentVerb.participle.toLowerCase();
  const okTrans = transInput === ""
    ? true
    : transInput.toLowerCase() === currentVerb.translation.toLowerCase();

  const indicator = (okPast && okPart && okTrans) ? "✅" : "❌";

  // Формуємо клітинки з підсвіткою
  const pastCell = okPast
    ? pastInput
    : `${pastInput} <span style="color:red">(Правильно: ${currentVerb.past})</span>`;
  const partCell = okPart
    ? partInput
    : `${partInput} <span style="color:red">(Правильно: ${currentVerb.participle})</span>`;
  const transCell = transInput === ""
    ? `<span style="color:green">${currentVerb.translation}</span>`
    : okTrans
      ? transInput
      : `${transInput} <span style="color:red">(Правильно: ${currentVerb.translation})</span>`;

  // Додаємо рядок результату
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${indicator}</td>
    <td>${currentVerb.base}</td>
    <td>${pastCell}</td>
    <td>${partCell}</td>
    <td>${transCell}</td>
  `;
  const body = document.getElementById("resultsBody");
  const inputRow = document.getElementById("inputRow");
  body.removeChild(inputRow);
  body.insertBefore(row, body.firstChild);

  // Відновлюємо рядок вводу
  const newRow = document.createElement("tr");
  newRow.id = "inputRow";
  newRow.innerHTML = `
    <td></td>
    <td id="inputInfinitive"></td>
    <td><input type="text" id="inputPast" placeholder="Past Simple" /></td>
    <td><input type="text" id="inputParticiple" placeholder="Past Participle" /></td>
    <td><input type="text" id="inputTranslation" placeholder="Переклад (не обов'язково)" /></td>
  `;
  body.insertBefore(newRow, body.firstChild);

  pickRandomVerb();
}

// Обробник Enter
document
  .getElementById("resultsTable")
  .addEventListener("keydown", e => {
    if (e.key === "Enter" && e.target.closest("#inputRow")) {
      e.preventDefault();
      checkAnswer();
    }
  });

// Ініціалізація
if (!quizVerbs.length) {
  document.body.innerHTML = `<p>Додайте дієслова у словник перед запуском тесту.</p>`;
} else {
  pickRandomVerb();
}

// Вивід словника справа
function renderDictionaryTable() {
  const tbody = document.getElementById("dictionaryBody");
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

document.addEventListener("DOMContentLoaded", () => {
  renderDictionaryTable();
});
