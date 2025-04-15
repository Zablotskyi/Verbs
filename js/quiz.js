// Якщо localStorage порожній, використовуємо дефолтний набір дієслів
const quizVerbs = JSON.parse(localStorage.getItem("irregularVerbs")) || [
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "break", past: "broke", participle: "broken", translation: "ламати" },
];

let currentVerb = null;

function pickRandomVerb() {
  if (quizVerbs.length === 0) return;
  currentVerb = quizVerbs[Math.floor(Math.random() * quizVerbs.length)];
  // Оновлення тексту питання
  document.getElementById("question").textContent = `Введіть форми для дієслова: ${currentVerb.base}`;
  // Оновлення клітинки Infinitive у рядку вводу
  document.getElementById("inputInfinitive").textContent = currentVerb.base;
  // Очищення полів вводу
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

  // Створюємо новий рядок з результатами
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${indicator}</td>
    <td>${currentVerb.base}</td>
    <td>${inputPast}</td>
    <td>${inputParticiple}</td>
    <td>${inputTranslation}</td>
  `;

  const resultsBody = document.getElementById("resultsBody");
  // Видаляємо поточний рядок вводу
  const inputRow = document.getElementById("inputRow");
  resultsBody.removeChild(inputRow);
  // Додаємо результатний рядок зверху
  resultsBody.insertBefore(newRow, resultsBody.firstChild);

  // Створюємо новий рядок вводу
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

  // Завантажуємо нове питання
  pickRandomVerb();
}

if (quizVerbs.length === 0) {
  document.getElementById("quizContainer").innerHTML = `
    <p style="color: red;">⚠️ Увага: список дієслів порожній!</p>
    <p>Перейдіть на <a href="index.html" target="_self">головну сторінку</a> та додайте хоча б одне дієслово для початку тесту.</p>
  `;
} else {
  pickRandomVerb();
}
