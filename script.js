const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const storeButtons = document.querySelectorAll(".store-btn");

menuBtn?.addEventListener("click", () => {
  mainNav?.classList.toggle("open");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

storeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const store = button.dataset.store === "google" ? "Google Play" : "App Store";
    alert(`${store} 다운로드 링크를 연결해주세요.`);
  });
});
