/* function toggleVisibility(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function toggleAdminCode() {
  const role = document.getElementById("roleSelect").value;
  const adminCode = document.getElementById("adminCode");
  adminCode.classList.toggle("hidden", role !== "admin");
}

function logout() {
  localStorage.removeItem("user");
  alert("Logged out!");
  window.location.href = "index.html";
}

async function login(e) {
  e.preventDefault();
  const name = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.href = "home.html";
  } else {
    alert(data.message || "Login failed");
  }
}

async function signup(e) {
  e.preventDefault();
  const name = document.querySelector('input[placeholder="Full Name"]').value;
  const governorate = document.querySelector('input[placeholder="Governorate"]').value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("roleSelect").value;
  const adminCode = document.getElementById("adminCode").value;

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  if (role === "admin" && adminCode !== "FutureMindsAcademy987") {
    alert("Invalid admin code");
    return;
  }

  const res = await fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, governorate, password, role })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Signed up successfully");
    window.location.href = "index.html";
  } else {
    alert(data.message || "Signup failed");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (window.location.pathname.includes("home.html")) {
    if (!user) {
      window.location.href = "index.html";
    } else {
      document.getElementById("username").textContent = `Welcome, ${user.name}`;
    }
  }
});
 */

function toggleVisibility(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

function toggleAdminCode() {
  const role = document.getElementById("roleSelect").value;
  const adminCode = document.getElementById("adminCode");
  adminCode.classList.toggle("hidden", role !== "admin");
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

async function signup(e) {
  e.preventDefault();
  const name = document.querySelector('input[placeholder="Full Name"]').value;
  const governorate = document.querySelector('input[placeholder="Governorate"]').value;
  const email = document.querySelector('input[placeholder="Email Address"]').value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("roleSelect").value;
  const adminCode = document.getElementById("adminCode").value;

  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  if (role === "admin" && adminCode !== "FutureMindsAcademy987") {
    alert("Invalid admin code");
    return;
  }

  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName: name, governorate, email, password, confirmPassword, role, adminCode })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    window.location.replace("home.html");
  } else {
    alert(data.message || "Signup failed");
  }
}
