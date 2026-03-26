const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const chat = document.getElementById("chat");

// 🎯 Initial position (center-ish)
let posX = window.innerWidth * 0.6;
let posY = window.innerHeight * 0.7;

// Apply initial position
noBtn.style.position = "fixed";
noBtn.style.left = posX + "px";
noBtn.style.top = posY + "px";

// 😈 Move button logic
function moveButton(e) {
  let cursorX, cursorY;

  if (e.touches) {
    cursorX = e.touches[0].clientX;
    cursorY = e.touches[0].clientY;
  } else {
    cursorX = e.clientX;
    cursorY = e.clientY;
  }

  // Direction away from cursor
  let dx = posX - cursorX;
  let dy = posY - cursorY;

  const dist = Math.sqrt(dx * dx + dy * dy) || 1;

  dx /= dist;
  dy /= dist;

  const speed = 120; // 🔥 increase for more speed

  posX += dx * speed;
  posY += dy * speed;

  // 🚫 Keep inside screen
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  posX = Math.max(0, Math.min(posX, window.innerWidth - btnWidth));
  posY = Math.max(0, Math.min(posY, window.innerHeight - btnHeight));

  noBtn.style.left = posX + "px";
  noBtn.style.top = posY + "px";
}

// 💻 Desktop
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const isNear =
    Math.abs(e.clientX - rect.left) < 150 &&
    Math.abs(e.clientY - rect.top) < 150;

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
