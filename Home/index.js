const data_div1 = document.getElementById("card-container1");
const data_div2 = document.getElementById("card-container2");
const data_div3 = document.getElementById("card-container3");
const Button = document.getElementById("login");
const signout = document.getElementById("signout");
const token = JSON.parse(localStorage.getItem("token"));
const uname = JSON.parse(localStorage.getItem("name"));
const divu = document.getElementById("right");
fetch("http://localhost:8080/arr1", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      const div1 = document.createElement("div");
      div1.id = "card-body";
      const divi1 = document.createElement("div");
      divi1.id = "card";
      const image1 = document.createElement("img");
      image1.src = el.image;
      image1.alt - "error";
      const desc1 = document.createElement("h2");
      desc1.innerText = el.name;
      desc1.style.cursor = "pointer";
      desc1.addEventListener("click", () => {
        // const token = JSON.parse(localStorage.getItem("token"));
        if (token !== null) {
          localStorage.setItem("imageId", el.id);
          window.location.replace("./details.html");
        } else {
          alert("Please Login First!");
          window.location.href = "./signin.html";
        }
      });
      div1.append(desc1);
      divi1.append(image1, div1);
      data_div1.append(divi1);
    });
  });
fetch("http://localhost:8080/arr2", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      const div2 = document.createElement("div");
      div2.id = "card-body";
      const divi2 = document.createElement("div");
      divi2.id = "card";
      const image2 = document.createElement("img");
      image2.src = el.image;
      image2.alt - "error";
      const desc2 = document.createElement("h2");
      desc2.innerText = el.name;
      desc2.style.cursor = "pointer";
      desc2.addEventListener("click", () => {
        // const token = JSON.parse(localStorage.getItem("token"));
        if (token !== null) {
          localStorage.setItem("imageId", el.id);
          window.location.replace("./details.html");
        } else {
          alert("Please Login First!");
          window.location.href = "./signin.html";
        }
      });
      div2.append(desc2);
      divi2.append(image2, div2);
      data_div2.append(divi2);
    });
  });
fetch("http://localhost:8080/arr3", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      const div = document.createElement("div");
      div.id = "card-body";
      const divi = document.createElement("div");
      divi.id = "card";
      const image = document.createElement("img");
      image.src = el.image;
      image.alt - "error";
      const desc = document.createElement("h2");
      desc.innerText = el.name;
      desc.style.cursor = "pointer";
      desc.addEventListener("click", () => {
        // const token = JSON.parse(localStorage.getItem("token"));
        if (token !== null) {
          localStorage.setItem("imageId", el.id);
          window.location.replace("./details.html");
        } else {
          alert("Please Login First!");
          window.location.href = "./signin.html";
        }
      });
      div.append(desc);
      divi.append(image, div);
      data_div3.append(divi);
    });
  });

const togglebtn = document.querySelector("#burger");
const togglebtnIcon = document.querySelector("#burger i");
const dropDownMenu = document.querySelector(".dropdown_menu");
togglebtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
// const token = JSON.parse(localStorage.getItem("token"));
if (token !== null) {
  Button.style.display = "none";
  signout.style.display = "block";
  const user = document.createElement("h4");
  user.innerText = "Hello " + uname;
  user.style.color = "aliceblue";
  divu.append(user);
  signout.onclick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    alert("You are succesfully Signed Out!");
    window.location.href = "./index.html";
  };
} else {
  signout.style.display = "none";
}
Button.onclick = () => {
  window.location.href = "./signin.html";
};
