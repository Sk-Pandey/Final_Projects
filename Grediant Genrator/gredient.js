let gred = document.getElementById("gred");
let btn = document.getElementById("btn");
let copyBtn = document.getElementById("copyBtn");

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomGradient = () => {
  const color1 = randomColor();
  const color2 = randomColor(); 
  const gradient = `linear-gradient(to right , ${color1}, ${color2})`;
  gred.textContent = gradient;
  document.body.style.background = gradient;
};
 
btn.addEventListener("click", () => {
  randomGradient();
});

copyBtn.addEventListener("click", () => {
  const text = gred.textContent;
  navigator.clipboard.writeText(text).then(() => {
    copyBtn.innerHTML = `<i class="material-icons text-black">content_copy</i> Copied!`;
    setTimeout(() => {
      copyBtn.innerHTML = `<i class="material-icons text-black">content_copy</i>`;
    }, 1000);
  });
});

randomGradient();
