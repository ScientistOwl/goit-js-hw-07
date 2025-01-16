const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const name = event.target.value.trim();
  output.textContent = name === "" ? "Anonymous" : name;
});
