function getResult() {
  let regno = document.getElementById("regno").value;

  fetch("http://127.0.0.1:5001/results/" + regno)
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerHTML = `
      <h3>Name: ${data.name}</h3>
      <p>Register No: ${data.register_no}</p>
      <p>Python: ${data.marks.python}</p>
      <p>Java: ${data.marks.java}</p>
      <p>Total: ${data.total}</p>
    `;
  })
  .catch(err => {
    document.getElementById("result").innerText = "Error fetching result";
  });
}
