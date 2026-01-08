const helpBtn = document.getElementById("helpBtn");
const helpBox = document.getElementById("helpBox");

if (helpBtn) {
  helpBtn.onclick = () => {
    helpBox.style.display = helpBox.style.display === "block" ? "none" : "block";
    helpBox.innerHTML = `
      <p>Salut, tu te portes bien ?<br><br>
      Coordination Estudiantine ISP GOMBE.<br>
      Besoin de nous contacter ?</p>
      <a href="https://whatsapp.com/channel/0029VbAi4jD2Jl8GG8Odwc06">Chaîne WhatsApp</a><br>
      <a href="https://chat.whatsapp.com/L0Oyaif4f2T18l2pqCoxhY">Groupe Accueil</a><br>
      <a href="https://www.facebook.com/profile.php?id=61584401214557">Facebook</a><br>
      <strong>+243 970 113 745</strong>
    `;
  };
}
