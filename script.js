const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const chat = document.getElementById("chat");

function moveButton() {
  const x = Math.random() * 150 - 75;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

yesBtn.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.className = "msg right";
  msg.innerHTML = "Just Kidding Pandi 😜<br>Shall we meet once? ☕😉";

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
});
