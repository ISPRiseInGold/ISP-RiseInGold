const helpBtn = document.getElementById("helpBtn");
const helpBox = document.getElementById("helpBox");
const closeHelp = document.getElementById("closeHelp");

helpBtn.addEventListener("click", () => {
  helpBox.style.display = "block";
});

closeHelp.addEventListener("click", () => {
  helpBox.style.display = "none";
});
