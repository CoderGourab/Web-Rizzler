const data_div1 = document.getElementById("card-container1");
const data_div2 = document.getElementById("card-container2");
const data_div3 = document.getElementById("card-container3");

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
