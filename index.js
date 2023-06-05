let selected = [];
window.addEventListener("load", () => {
  const sheet = document.getElementById("sheet");
  let width = 20;
  let height = 33;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.onclick = () => {
        selected.push({i, j});
        return true;
      }
      sheet.appendChild(input);
    }
  }
});

function onSubmit() {
  console.log('clicked', selected);
}