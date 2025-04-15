const LOCAL_STORAGE_KEY = "irregularVerbs";
let verbs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "break", past: "broke", participle: "broken", translation: "ламати" },
];

const tableBody = document.getElementById("verbsTableBody");
const searchInput = document.getElementById("searchInput");

function saveVerbs() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(verbs));
}

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

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = verbs.filter(verb =>
    verb.base.includes(value) ||
    verb.past.includes(value) ||
    verb.participle.includes(value) ||
    verb.translation.includes(value)
  );
  renderVerbs(filtered);
});

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

renderVerbs(verbs);
