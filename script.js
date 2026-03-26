const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const chat = document.getElementById("chat");

// ⚡ Super fast escape logic
function moveButton(e) {
  const btnRect = noBtn.getBoundingClientRect();

  let cursorX = 0;
  let cursorY = 0;

  if (e.touches) {
    cursorX = e.touches[0].clientX;
    cursorY = e.touches[0].clientY;
  } else {
    cursorX = e.clientX;
    cursorY = e.clientY;
  }

  const distanceX = btnRect.x - cursorX;
  const distanceY = btnRect.y - cursorY;

  // 😈 Run opposite direction FAST
  const moveX = distanceX * 1.5 + (Math.random() * 100 - 50);
  const moveY = distanceY * 1.5 + (Math.random() * 80 - 40);

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// 💻 Desktop (runs when cursor near)
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const isNear =
    Math.abs(e.clientX - rect.x) < 120 &&
    Math.abs(e.clientY - rect.y) < 120;

  if (isNear) moveButton(e);
});

// 📱 Mobile (finger tracking)
document.addEventListener("touchmove", (e) => {
  moveButton(e);
});

// 💖 Yes click
yesBtn.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.className = "msg right";
  msg.innerHTML = "Just Kidding Pandi 😜<br>Shall we meet once? ☕😉";

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
});
