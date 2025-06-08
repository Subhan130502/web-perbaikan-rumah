document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const loginForm = document.getElementById("loginForm");
  const loginSubmit = document.getElementById("loginSubmit");
  const loginStatus = document.getElementById("loginStatus");

  loginBtn.addEventListener("click", () => {
    loginForm.classList.toggle("hidden");
  });

  loginSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const dummyEmail = "user@example.com";
    const dummyPassword = "123456";

    if (email === dummyEmail && password === dummyPassword) {
      loginStatus.classList.add("hidden");
      alert("Login Berhasil!");
      loginForm.classList.add("hidden");
    } else {
      loginStatus.classList.remove("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (!loginForm.contains(e.target) && !loginBtn.contains(e.target)) {
      loginForm.classList.add("hidden");
    }
  });
});

const layananBtn = document.getElementById('layananBtn');
  const layananMenu = document.getElementById('layananMenu');

  layananBtn.addEventListener('click', () => {
    layananMenu.classList.toggle('hidden');
  });

  // Opsional: Klik di luar untuk menutup menu
  document.addEventListener('click', (e) => {
    if (!layananBtn.contains(e.target) && !layananMenu.contains(e.target)) {
      layananMenu.classList.add('hidden');
    }
  });
