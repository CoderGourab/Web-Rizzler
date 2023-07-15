const data_div1 = document.getElementById("card-container1");
const data_div2 = document.getElementById("card-container2");
const data_div3 = document.getElementById("card-container3");

fetch("http://localhost:8080/arr1", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((el) => {
      const div1 = document.createElement("div");
      div1.id = "card-body";
      const divi1 = document.createElement("div");
      divi1.id = "card";
      const image1 = document.createElement("img");
      image1.src = el.image;
      image1.alt = "error";
      const desc1 = document.createElement("h2");
      desc1.innerText = el.name;
      desc1.addEventListener("click", () => {
        localStorage.setItem("imageId", el.id);
        window.location.href = "/details.html";
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
      image2.alt = "error";
      const desc2 = document.createElement("h2");
      desc2.innerText = el.name;
      desc2.addEventListener("click", () => {
        localStorage.setItem("imageId", el.id);
        window.location.href = "/details.html";
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
      const div3 = document.createElement("div");
      div3.id = "card-body";
      const divi3 = document.createElement("div");
      divi3.id = "card";
      const image3 = document.createElement("img");
      image3.src = el.image;
      image3.alt = "error";
      const desc3 = document.createElement("h2");
      desc3.innerText = el.name;
      desc3.addEventListener("click", () => {
        localStorage.setItem("imageId", el.id);
        window.location.href = "/details.html";
      });
      div3.append(desc3);
      divi3.append(image3, div3);
      data_div3.append(divi3);
    });
  });

const togglebtn = document.querySelector("#burger");
const togglebtnIcon = document.querySelector("#burger i");
const dropDownMenu = document.querySelector(".dropdown_menu");
togglebtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
