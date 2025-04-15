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

  const isCorrect =
    inputPast.toLowerCase() === currentVerb.past.toLowerCase() &&
    inputParticiple.toLowerCase() === currentVerb.participle.toLowerCase() &&
    inputTranslation.toLowerCase() === currentVerb.translation.toLowerCase();

  const indicator = isCorrect ? "✅" : "❌";

  // Формуємо вміст кожного стовпця: якщо відповідь неправильна, додаємо правильну відповідь у червоному кольорі.
  const pastCellContent = (inputPast.toLowerCase() === currentVerb.past.toLowerCase())
    ? inputPast
    : `${inputPast} <span style="color: red;">( : ${currentVerb.past})</span>`;

  const participleCellContent = (inputParticiple.toLowerCase() === currentVerb.participle.toLowerCase())
    ? inputParticiple
    : `${inputParticiple} <span style="color: red;">( : ${currentVerb.participle})</span>`;

  const translationCellContent = (inputTranslation.toLowerCase() === currentVerb.translation.toLowerCase())
    ? inputTranslation
    : `${inputTranslation} <span style="color: red;">( : ${currentVerb.translation})</span>`;

  // Створюємо новий рядок з результатами
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
  // Додаємо рядок з результатами зверху
  resultsBody.insertBefore(newRow, resultsBody.firstChild);

  // Створюємо новий рядок для введення відповіді
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

  // Завантажуємо наступне запитання
  pickRandomVerb();
}

// Додаємо обробку події для натискання клавіші Enter (опційно)
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
