const tone = ["#DADBBD", "#BB6464", "#1C658C", "#125C13", "#BFFFF0", "#49FF00", "#dd4a48"];
const button = document.getElementsByClassName("button")[0];

button.addEventListener("click", () => {
  let randomColor = tone[Math.floor(Math.random() * tone.length)];
  let container = document.getElementsByClassName("container")[0];

  container.style.backgroundColor = randomColor;
});
