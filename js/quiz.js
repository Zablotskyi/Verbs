// Якщо localStorage порожній, використовуємо дефолтний набір дієслів
const quizVerbs = JSON.parse(localStorage.getItem("irregularVerbs")) || [
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "break", past: "broke", participle: "broken", translation: "ламати" },
];

let currentVerb = null;

// Функція, що оновлює поточне запитання
function pickRandomVerb() {
  if (quizVerbs.length === 0) return;
  currentVerb = quizVerbs[Math.floor(Math.random() * quizVerbs.length)];
  document.getElementById("question").textContent = `Введіть форми для дієслова: ${currentVerb.base}`;
  document.getElementById("inputInfinitive").textContent = currentVerb.base;
  document.getElementById("inputPast").value = "";
  document.getElementById("inputParticiple").value = "";
  document.getElementById("inputTranslation").value = "";
}

// Функція перевірки відповіді
function checkAnswer() {
  const inputPast = document.getElementById("inputPast").value.trim();
  const inputParticiple = document.getElementById("inputParticiple").value.trim();
  const inputTranslation = document.getElementById("inputTranslation").value.trim();

  const isCorrect =
    inputPast.toLowerCase() === currentVerb.past.toLowerCase() &&
    inputParticiple.toLowerCase() === currentVerb.participle.toLowerCase() &&
    inputTranslation.toLowerCase() === currentVerb.translation.toLowerCase();

  const indicator = isCorrect ? "✅" : "❌";

  // Створення нового рядка з результатами, що містить також Infinitive
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${indicator}</td>
    <td>${currentVerb.base}</td>
    <td>${inputPast}</td>
    <td>${inputParticiple}</td>
    <td>${inputTranslation}</td>
  `;

  const resultsBody = document.getElementById("resultsBody");
  const inputRow = document.getElementById("inputRow");
  resultsBody.removeChild(inputRow);
  resultsBody.insertBefore(newRow, resultsBody.firstChild);

  // Створення нового рядка для введення відповіді
  const newInputRow = document.createElement("tr");
  newInputRow.id = "inputRow";
  newInputRow.innerHTML = `
    <td></td>
    <td id="inputInfinitive"></td>
    <td><input type="text" id="inputPast" placeholder="Past Simple" /></td>
    <td><input type="text" id="inputParticiple" placeholder="Past Participle" /></td>
    <td><input type="text" id="inputTranslation" placeholder="Переклад" /></td>
  `;
  resultsBody.insertBefore(newInputRow, resultsBody.firstChild);

  // Завантаження нового запитання
  pickRandomVerb();
}

// Додаємо обробку події для клавіші Enter
document.getElementById("resultsTable").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    // Якщо подія відбулася у рядку введення (inputRow), перехоплюємо Enter
    if (event.target.closest("#inputRow")) {
      event.preventDefault(); // Зупиняємо стандартну поведінку (перехід фокусу)
      checkAnswer();
    }
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
