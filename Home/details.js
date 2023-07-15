const imageId = localStorage.getItem("imageId");
const division = document.getElementById("card-container");

fetch("http://localhost:8080/arr1", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const comparision = data.find((item) => item.id === imageId);
    //console.log(comparision);
    const divis1 = document.createElement("div");
    divis1.id = "card-body";
    const divisi1 = document.createElement("div");
    divisi1.id = "card";
    const image1 = document.createElement("img");
    image1.src = comparision.image;
    image1.alt = "error";
    const descr1 = document.createElement("h2");
    descr1.innerText = comparision.name;
    const auth1 = document.createElement("h4");
    auth1.innerText = comparision.author;
    const gen1 = document.createElement("h4");
    gen1.innerText = comparision.genre;
    divis1.append(descr1,auth1,gen1);
    divisi1.append(image1, divis1);
    division.append(divisi1);
  });
fetch("http://localhost:8080/arr2", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const comparision = data.find((item) => item.id === imageId);
    //console.log(comparision);
    const divis2 = document.createElement("div");
    divis2.id = "card-body";
    const divisi2 = document.createElement("div");
    divisi2.id = "card";
    const image2 = document.createElement("img");
    image2.src = comparision.image;
    image2.alt = "error";
    const descr2 = document.createElement("h2");
    descr2.innerText = comparision.name;
    const auth2 = document.createElement("h4");
    auth2.innerText = comparision.author;
    const gen2 = document.createElement("h4");
    gen2.innerText = comparision.genre;
    divis2.append(descr2,auth2,gen2);
    divisi2.append(image2, divis2);
    division.append(divisi2);
  });
fetch("http://localhost:8080/arr3", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const comparision = data.find((item) => item.id === imageId);
    //console.log(comparision);
    const divis3 = document.createElement("div");
    divis3.id = "card-body";
    const divisi3 = document.createElement("div");
    divisi3.id = "card";
    const image3 = document.createElement("img");
    image3.src = comparision.image;
    image3.alt = "error";
    const descr3 = document.createElement("h2");
    descr3.innerText = comparision.name;
    const auth3 = document.createElement("h4");
    auth3.innerText = comparision.author;
    const gen3 = document.createElement("h4");
    gen3.innerText = comparision.genre;
    divis3.append(descr3,auth3,gen3);
    divisi3.append(image3, divis3);
    division.append(divisi3);
  });
