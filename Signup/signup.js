const email = document.getElementById("email");
const uname = document.getElementById("name");
const mob = document.getElementById("mob");
const pass = document.getElementById("password");
const button = document.getElementById("signup");
button.addEventListener("click", () => {
  const dataobj = {
    email: email.value,
    name: uname.value,
    mob: mob.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(
        "Registered Succesfully!Please go to Login Page if automatically not redirected"
      );
      window.location.href = "./signin.html";
    });
});
