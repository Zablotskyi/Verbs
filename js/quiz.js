const quizVerbs = JSON.parse(localStorage.getItem("irregularVerbs")) || [];

let currentIndex = 0;
let currentVerb = null;

function pickRandomVerb() {
  currentVerb = quizVerbs[Math.floor(Math.random() * quizVerbs.length)];
  document.getElementById("question").textContent = `Infinitive: ${currentVerb.base}`;
  document.getElementById("inputPast").value = "";
  document.getElementById("inputParticiple").value = "";
  document.getElementById("inputTranslation").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const past = document.getElementById("inputPast").value.trim().toLowerCase();
  const participle = document.getElementById("inputParticiple").value.trim().toLowerCase();
  const translation = document.getElementById("inputTranslation").value.trim().toLowerCase();

  const correct = 
    past === currentVerb.past.toLowerCase() &&
    participle === currentVerb.participle.toLowerCase() &&
    translation === currentVerb.translation.toLowerCase();

  const result = document.getElementById("result");
  result.textContent = correct ? "✅ Правильно!" : `❌ Неправильно. Правильна відповідь:
Past: ${currentVerb.past}, Participle: ${currentVerb.participle}, Переклад: ${currentVerb.translation}`;
  
  setTimeout(pickRandomVerb, 2000);
}

if (quizVerbs.length === 0) {
  document.getElementById("quizContainer").innerHTML = "<p>Немає жодного дієслова для тесту. Додайте спочатку хоча б одне!</p>";
} else {
  pickRandomVerb();
}
