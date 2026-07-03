function addStudent() {
    fetch("http://127.0.0.1:5001/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            register_no: document.getElementById("reg").value,
            name: document.getElementById("name").value,
            department: document.getElementById("dept").value
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("msg").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("msg").innerText = "Backend Connection Error";
        console.log(error);
    });
}

function updateMarks() {
    fetch("http://127.0.0.1:5001/marks/" + document.getElementById("markReg").value, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            python: Number(document.getElementById("python").value),
            java: Number(document.getElementById("java").value)
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("msg").innerText = data.message;
    })
    .catch(error => {
        document.getElementById("msg").innerText = "Backend Connection Error";
        console.log(error);
    });
}
