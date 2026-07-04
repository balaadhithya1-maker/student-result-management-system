function login() {
  fetch("http://3.26.166.104:5000/login", {
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
      window.location.href = "admin.html";
    }
  })
  .catch(err => {
    document.getElementById("msg").innerText = "Backend Connection Error";
    console.log(err);
  });
}
