// Function to update the UTC time dynamically
function updateUTCTime() {
  const utcElement = document.getElementById('utcTime');
  const now = new Date();
  utcElement.textContent = `Current Time in UTC: ${now.toUTCString()}`;
}

// Call updateUTCTime when the page loads
updateUTCTime();

// Toggle light/dark mode
const themeToggleButton = document.getElementById("themeSwitch");
const themeIcon = document.getElementById("themeIcon");

themeToggleButton.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".profile-card").classList.toggle("dark-mode");

  // Toggle sun and moon icons
  if (themeToggleButton.checked) {
    themeIcon.textContent = "🌞"; // Sun icon for dark mode
  } else {
    themeIcon.textContent = "🌙"; // Moon icon for light mode
  }
});

// Additional Animations on Scroll
window.addEventListener('scroll', () => {
  const profileCard = document.getElementById('profileCard');
  const cardPosition = profileCard.getBoundingClientRect().top;

  // Apply animation when profile card is in view
  if (cardPosition < window.innerHeight) {
    profileCard.style.animation = 'fadeInUp 1s forwards';
  }
});
