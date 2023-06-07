let selected;
let serverURL = "https://acoustic-famous-cardinal.glitch.me/";
window.addEventListener("load", () => {
  fetch(serverURL, { mode: "no-cors" }).then((d) => d.json()).then((r) => console.log(r));
  selected = [];
  const sheet = document.getElementById("sheet");
  let width = 20;
  let height = 33;
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.onclick = (e) => {
        if (e.target.checked) selected.push(`(${i},${j})`);
        else selected.splice(selected.findIndex((v) => v == `(${i},${j})`)-1, 1);
        return true;
      }
      sheet.appendChild(input);
    }
  }
});

function onSubmit() {
  postData(serverURL, selected).then((data) => { 
    console.log(data);
  });
}

function onReset() {
  selected = [];
}

// code from MDN (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
async function postData(url, data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, *cors, same-origin
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response;
}