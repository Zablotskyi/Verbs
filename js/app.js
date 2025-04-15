const verbs = [
  { base: "be", past: "was/were", participle: "been", translation: "бути" },
  { base: "become", past: "became", participle: "become", translation: "ставати" },
  { base: "begin", past: "began", participle: "begun", translation: "починати" },
  { base: "break", past: "broke", participle: "broken", translation: "ламати" },
  { base: "bring", past: "brought", participle: "brought", translation: "приносити" },
  // Додай ще за бажанням
];

const tableBody = document.getElementById("verbsTableBody");
const searchInput = document.getElementById("searchInput");

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

renderVerbs(verbs);
