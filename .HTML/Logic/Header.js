const mobileToggleOpen = document.getElementById("mobile-toggle-open");
const mobileToggleClose = document.getElementById("mobile-toggle-close");
const navigation = document.getElementById("header-nav");

mobileToggleOpen.addEventListener("click", e => {
  navigation.classList.add("open");
});
mobileToggleClose.addEventListener("click", e => {
  console.log(e);
  navigation.classList.remove("open");
});

console.log(mobileToggleOpen);
console.log(mobileToggleClose);
console.log(navigation);
