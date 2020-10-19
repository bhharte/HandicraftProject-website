let openBtn = document.querySelector(".openBtn");
let expendMenu = document.querySelector("#menuItems");
let closeBtn = document.querySelector(".closeBtn");
//menu open or close
openBtn.addEventListener("click", function () {
  expendMenu.style.width = "150px";
  console.log("Hi");
});

closeBtn.addEventListener("click", function () {
  expendMenu.style.width = "0px";
});
