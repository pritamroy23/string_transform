
function getInput() {
  return document.getElementById("inputText").value;
}

function displayOutput(text) {
  document.getElementById("outputText").innerText = text;
}

function toLower() {
  displayOutput(getInput().toLowerCase());
}

function toUpper() {
  displayOutput(getInput().toUpperCase());
}

function toCamel() {
  let words = getInput().toLowerCase().split(" ");
  let result = words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
  displayOutput(result);
}

function toPascal() {
  let words = getInput().toLowerCase().split(" ");
  let result = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
  displayOutput(result);
}

function toSnake() {
  displayOutput(getInput().toLowerCase().replace(/\s+/g, "_"));
}

function toKebab() {
  displayOutput(getInput().toLowerCase().replace(/\s+/g, "-"));
}

function toTrim() {
  displayOutput(getInput().trim());
}
