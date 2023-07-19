const imageId = localStorage.getItem("imageId");
const division = document.getElementById("card-container");
const id = JSON.parse(localStorage.getItem("id"));
const token = JSON.parse(localStorage.getItem("token"));
const wishlistb = document.createElement("button");
wishlistb.id = "wishlist";
wishlistb.innerHTML = "Add to Wishlisht";
fetch("http://localhost:8080/arr1", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const comparision = data.find((item) => item.id === imageId);
    const divis1 = document.createElement("div");
    divis1.id = "card-body";
    const divisi1 = document.createElement("div");
    divisi1.id = "card";
    const image1 = document.createElement("img");
    image1.src = comparision.image;
    image1.alt = "error";
    const head1 = document.createElement("h1");
    head1.innerText = "Name:";
    head1.style.padding = "5%";
    const descr1 = document.createElement("h4");
    descr1.innerText = comparision.name;
    descr1.style.fontSize = "large";
    descr1.style.marginLeft = "10%";
    const head2 = document.createElement("h1");
    head2.innerText = "Author:";
    head2.style.padding = "5%";
    head2.style.marginTop = "5%";
    const auth1 = document.createElement("h4");
    auth1.innerText = comparision.author;
    auth1.style.fontSize = "large";
    auth1.style.marginLeft = "10%";
    const head3 = document.createElement("h1");
    head3.innerText = "Genre:";
    head3.style.padding = "5%";
    head3.style.marginTop = "5%";
    const gen1 = document.createElement("h4");
    gen1.innerText = comparision.genre;
    gen1.style.fontSize = "large";
    gen1.style.marginLeft = "10%";
    fetch(`http://localhost:8080/wishlist`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const newwish = data.filter((item) => item.userId === id);
        newwish.map((el) => {
          if (el.imgId == imageId) {
            wishlistb.style.display = "none";
          }
        });
      });
    divis1.append(head1, descr1, head2, auth1, head3, gen1, wishlistb);
    wishlistb.addEventListener("click", () => {
      const wishlistobj = {
        userId: id,
        title: comparision.name,
        imgId: imageId,
      };
      fetch(`http://localhost:8080/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistobj),
      })
        .then((res) => res.json())
        .then((data) => alert("Wishlisted"));
    });
    divisi1.append(image1, divis1);
    division.append(divisi1);
  });

fetch("http://localhost:8080/arr2", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const comparision = data.find((item) => item.id === imageId);
    const divis2 = document.createElement("div");
    divis2.id = "card-body";
    const divisi2 = document.createElement("div");
    divisi2.id = "card";
    const image2 = document.createElement("img");
    image2.src = comparision.image;
    image2.alt = "error";
    const head1 = document.createElement("h1");
    head1.innerText = "Name:";
    head1.style.padding = "5%";
    const descr1 = document.createElement("h4");
    descr1.innerText = comparision.name;
    descr1.style.fontSize = "large";
    descr1.style.marginLeft = "10%";
    const head2 = document.createElement("h1");
    head2.innerText = "Author:";
    head2.style.padding = "5%";
    head2.style.marginTop = "5%";
    const auth1 = document.createElement("h4");
    auth1.innerText = comparision.author;
    auth1.style.fontSize = "large";
    auth1.style.marginLeft = "10%";
    const head3 = document.createElement("h1");
    head3.innerText = "Genre:";
    head3.style.padding = "5%";
    head3.style.marginTop = "5%";
    const gen1 = document.createElement("h4");
    gen1.innerText = comparision.genre;
    gen1.style.fontSize = "large";
    gen1.style.marginLeft = "10%";
    fetch(`http://localhost:8080/wishlist`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        const newwish = data.filter((item) => item.userId === id);
        newwish.map((el) => {
          if (el.imgId == imageId) {
            wishlistb.style.display = "none";
          }
        });
      });
    divis2.append(head1, descr1, head2, auth1, head3, gen1, wishlistb);
    wishlistb.addEventListener("click", () => {
      const wishlistobj = {
        userId: id,
        title: comparision.name,
        imgId: imageId,
      };
      fetch(`http://localhost:8080/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistobj),
      })
        .then((res) => res.json())
        .then((data) => alert("Wishlisted"));
    });
    divisi2.append(image2, divis2);
    division.append(divisi2);
  });

fetch("http://localhost:8080/arr3", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    const comparision = data.find((item) => item.id === imageId);
    const divis3 = document.createElement("div");
    divis3.id = "card-body";
    const divisi3 = document.createElement("div");
    divisi3.id = "card";
    const image3 = document.createElement("img");
    image3.src = comparision.image;
    image3.alt = "error";
    const head1 = document.createElement("h1");
    head1.innerText = "Name:";
    head1.style.padding = "5%";
    const descr1 = document.createElement("h4");
    descr1.innerText = comparision.name;
    descr1.style.fontSize = "large";
    descr1.style.marginLeft = "10%";
    const head2 = document.createElement("h1");
    head2.innerText = "Author:";
    head2.style.padding = "5%";
    head2.style.marginTop = "5%";
    const auth1 = document.createElement("h4");
    auth1.innerText = comparision.author;
    auth1.style.fontSize = "large";
    auth1.style.marginLeft = "10%";
    const head3 = document.createElement("h1");
    head3.innerText = "Genre:";
    head3.style.padding = "5%";
    head3.style.marginTop = "5%";
    const gen1 = document.createElement("h4");
    gen1.innerText = comparision.genre;
    gen1.style.fontSize = "large";
    gen1.style.marginLeft = "10%";
    divis3.append(head1, descr1, head2, auth1, head3, gen1, wishlistb);
    wishlistb.addEventListener("click", () => {
      const wishlistobj = {
        userId: id,
        title: comparision.name,
        imgId: imageId,
      };
      fetch(`http://localhost:8080/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistobj),
      })
        .then((res) => res.json())
        .then((data) => alert("Wishlisted"));
    });
    divisi3.append(image3, divis3);
    division.append(divisi3);
  });
