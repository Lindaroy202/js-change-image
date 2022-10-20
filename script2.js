let userSection = document.querySelector(".user-section");
//let isShow = true;

/* function showHideUsers() {
  if (isShow) {
    userSection.style.display = " none";
    isShow = false;
  } else {
    userSection.style.display = "block";
    isShow = true;
  }
} */

function showHideUsers() {
    userSection.classList.toggle("hidden");
}