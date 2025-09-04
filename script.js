// Bikila Keneni's Interactive Assignment (Week 6)

// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Switch to Light Mode";
  } else {
    themeToggle.textContent = "Switch to Dark Mode";
  }
});

// ========== COUNTER GAME ==========
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ========== FAQ TOGGLE ==========
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ========== FORM VALIDATION ==========
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const successMsg = document.getElementById("successMsg");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMsg.textContent = "";

  let valid = true;

  // Validate name
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    valid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  }

  // Success
  if (valid) {
    successMsg.textContent = "🎉 Registration successful!";
    form.reset();
  }
});
