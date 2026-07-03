function login() {
  fetch("http://127.0.0.1:5001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText = data.message;

    if (data.message === "Login Successful") {
      window.location.href = "dashboard.html";
    }
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Backend connection error";
    console.log(err);
  });
}
