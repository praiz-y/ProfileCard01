
function updateUTCTime() {
  const utcElement = document.getElementById('utcTime');
  const now = new Date();
  utcElement.textContent = `Current Time in UTC: ${now.toUTCString()}`;
}


updateUTCTime();


const themeToggleButton = document.getElementById("themeSwitch");
const themeIcon = document.getElementById("themeIcon");

themeToggleButton.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".profile-card").classList.toggle("dark-mode");

  if (themeToggleButton.checked) {
    themeIcon.textContent = "🌞"; // Sun icon for dark mode
  } else {
    themeIcon.textContent = "🌙"; // Moon icon for light mode
  }
});


window.addEventListener('scroll', () => {
  const profileCard = document.getElementById('profileCard');
  const cardPosition = profileCard.getBoundingClientRect().top;


  if (cardPosition < window.innerHeight) {
    profileCard.style.animation = 'fadeInUp 1s forwards';
  }
});
