function getInput() {
   return  document.getElementById("input-transform").value; 
}
function displayOutput(text) {
    document.getElementById("output-transform").innerText = text;

}
function toLower() {
    displayOutput(getInput().toLowerCase());

}
function toUpper() {
    displayOutput(getInput().toUpperCase())

}
function toSnake() {
    displayOutput(getInput().replace(/\s+/g, '_').toLowerCase());

}
function toKebab() {
    displayOutput(getInput().replace(/\s+/g, '-').toLowerCase());

}
function toTrim() {
    displayOutput(getInput().trim());

}

