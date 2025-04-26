const insert = document.querySelector("#insert");
const key = document.querySelector("#input");
key.addEventListener("keydown", (event) => {
  if ((key.value.length = 1)) {
    key.value = key.value.slice(1);
  }
  insert.innerHTML = `
<div class=" inline capitalize bg-gradient-to-r from-blue-500 to-indigo-400 p-5 rounded-lg text-white font-semibold m-1">
<strong>Key:</strong>
${event.key === " " ? "Space" : event.key}
</div>
<div class=" inline bg-gradient-to-r from-blue-500 to-indigo-400 p-5 rounded-lg text-white font-semibold m-1">
<strong>Ascii:</strong>
${event.keyCode}
</div>
<div class=" inline bg-gradient-to-r from-blue-500 to-indigo-400 p-5 rounded-lg text-white font-semibold m-1">
<strong>KeyCode:</strong>
${event.code}
</div>
`;
});
