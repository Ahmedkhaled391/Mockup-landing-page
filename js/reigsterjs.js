document.querySelector(".registration form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm-password").value.trim();
  const error = document.querySelector(".error");

  if(error.classList.contains("d-none") === false){
    error.classList.add("d-none");
  }
  error.textContent = "";

  
  if (!name || !email || !password || !confirmPassword) {
    error.textContent = "All fields are required.";
    error.classList.remove("d-none");
    return;
  }

  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    error.textContent = "Please enter a valid email address.";
    error.classList.remove("d-none");
    return;
  }

 
  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    error.classList.remove("d-none");
    return;
  }

  
  if (password.length < 8) {
    error.textContent = "Password must be at least 8 characters long.";
    error.classList.remove("d-none");
    return;
  }

 
  const users = JSON.parse(localStorage.getItem("users")) || [];

  
  if (users.some(u => u.email === email)) {
    error.textContent = "This email is already registered.";
    error.classList.remove("d-none");
    return;
  }

  users.push({ username: name, email, password });

  
  localStorage.setItem("users", JSON.stringify(users));

  Swal.fire({
    icon: 'success',
    title: 'Registration Successful!',
    text: 'You can now log in with your credentials.',
    confirmButtonColor: '#c27e26',
    timer: 2000
  }).then(() => {
    window.location.href = "./login.html"; 
  });
});

