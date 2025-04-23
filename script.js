const ideas = [
  "Build a to-do app using only checkboxes and emojis.",
  "Create a weather app that speaks the forecast out loud.",
  "Design a portfolio that only uses black and white — no colors.",
  "Develop a note-taking app where notes disappear after 24 hours.",
  "Create a Pomodoro timer that slowly reveals a picture as you focus.",
  "Build a calculator with only drag-and-drop input.",
  "Design a landing page with only one font and no images.",
  "Make a music player where controls are emoji-based.",
  "Build a blog engine where each post must be under 100 words.",
  "Create a form that changes theme based on the user's typing speed.",
  "Develop a habit tracker using only CSS animations for feedback.",
  "Design a dashboard that adapts its layout based on time of day.",
  "Build a memory game where cards fade instead of flip.",
  "Create a dark-mode-only app with glowing UI elements.",
  "Make a portfolio site inspired by retro Windows or Mac OS.",
  "Build a currency converter that teaches geography along the way.",
  "Create a quiz app that reacts differently based on your confidence.",
  "Design a social card generator that outputs a unique design every time.",
];

const generateButton = document.getElementById("generateButton");
const ideaText = document.getElementById("ideaText");

generateButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  ideaText.textContent = ideas[randomIndex];
});
