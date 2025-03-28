document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("nav ul li a, #mobile-menu ul li a");

  // Toggle menu saat tombol diklik
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Smooth scrolling untuk semua link navigasi
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
      // Tutup menu setelah memilih opsi di mobile view
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    });
  });
});
