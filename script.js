const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const toast = document.getElementById("toast");

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.textContent = isPassword ? "Hide" : "Show";
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        showToast("Isi email dan password terlebih dahulu.");
        return;
    }

    showToast("Login berhasil! (Demo)");
});

document.getElementById("googleButton").addEventListener("click", () => {
    showToast("Fitur Google Sign In belum tersedia.");
});

document.getElementById("forgotLink").addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Fitur reset password belum tersedia.");
});

document.getElementById("signupLink").addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Fitur pendaftaran belum tersedia.");
});