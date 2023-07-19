const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signup");
button.addEventListener("click", () => {
  fetch("http://localhost:8080/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find((ele) => ele.email === email.value);
      if (comparision != undefined) {
        if (
          comparision.email === email.value &&
          comparision.password === pass.value
        ) {
          alert("Logged in Successfully!");
          localStorage.setItem("token", JSON.stringify(Date.now()));
          localStorage.setItem("id", JSON.stringify(comparision.id));
          localStorage.setItem("name", JSON.stringify(comparision.name));
          window.location.href = "index.html";
        }
      } else {
        alert("You are not registered in!");
      }
    });
});
