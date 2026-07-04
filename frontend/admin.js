function addStudent() {
    fetch("http://3.26.166.104:5000/students", {
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
    .then(res => res.json())
    .then(data => {
        document.getElementById("msg").innerText = data.message;
    });
}

function updateMarks() {
    fetch("http://3.26.166.104:5000/marks/" + document.getElementById("markReg").value, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            python: Number(document.getElementById("python").value),
            java: Number(document.getElementById("java").value)
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("msg").innerText = data.message;
    });
}
