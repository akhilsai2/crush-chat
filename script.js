const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const chat = document.getElementById("chat");

// 📱 Get screen bounds
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

  // Distance from cursor
  let dx = btnRect.left - cursorX;
  let dy = btnRect.top - cursorY;

  // Normalize direction (unit vector)
  const distance = Math.sqrt(dx * dx + dy * dy) || 1;
  dx /= distance;
  dy /= distance;

  // ⚡ Speed (increase for more difficulty)
  const speed = 150;

  let newX = btnRect.left + dx * speed;
  let newY = btnRect.top + dy * speed;

  // 🚫 Keep inside screen bounds
  const maxX = window.innerWidth - btnRect.width;
  const maxY = window.innerHeight - btnRect.height;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}

// 💻 Desktop
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const isNear =
    Math.abs(e.clientX - rect.left) < 120 &&
    Math.abs(e.clientY - rect.top) < 120;

  if (isNear) moveButton(e);
});

// 📱 Mobile
document.addEventListener("touchmove", moveButton);

// 💖 Yes click
yesBtn.addEventListener("click", () => {
  const msg = document.createElement("div");
  msg.className = "msg right";
  msg.innerHTML = "Just Kidding Pandi 😜<br>Shall we meet once? ☕😉";

  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
});
