let openBtn = document.querySelector(".openBtn");
let expendMenu = document.querySelector("#menuItems");
let closeBtn = document.querySelector(".closeBtn");
let slideShow = document.querySelector("#slideShow");
let slideShow1 = document.querySelector("#slideShow2");
//for slideshow
let i = 0;
let images = [];
let time = 5000;

//image lists
images[0] = "../assets/images/img1.jpg";
images[1] = "../assets/images/img2.jpg";
images[2] = "../assets/images/img3.jpg";
images[3] = "../assets/images/img4.jpg";
images[4] = "../assets/images/img5.jpg";
images[5] = "../assets/images/img6.jpg";

//change images
function changeImg() {
  slideShow.src = images[i];
  slideShow1.src = images[i + 1];
  slideShow.className = "fade";
  slideShow1.className = "fade";
  console.log(images[i]);
  if (i < images.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg();
//menu open or close
openBtn.addEventListener("click", function () {
  expendMenu.style.width = "150px";
});

closeBtn.addEventListener("click", function () {
  expendMenu.style.width = "0px";
});
