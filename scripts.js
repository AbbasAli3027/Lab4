document.addEventListener("DOMContentLoaded", function () {
  let collapsibleSections = document.querySelectorAll(".collapse");
  let navLinks = document.querySelectorAll(".menu a");

  collapsibleSections.forEach(function (section, index) {
    let toggleButton = section.querySelector(".toggle-button");
    let content = section.querySelector(".content");

    if (index % 2 === 0) {
      section.classList.add("fly-in-right");
    } else {
      section.classList.add("fly-in-left");
    }

    toggleButton.addEventListener("click", function () {
      if (section.classList.contains("active")) {
        section.classList.remove("active");
        content.style.maxHeight = null;
        toggleButton.textContent = "▼";
      } else {
        section.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        toggleButton.textContent = "▲";
      }
    });
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let targetId = link.getAttribute("href").substring(1);
      let targetSection = document.getElementById(targetId);

      collapsibleSections.forEach(function (section) {
        let content = section.querySelector(".content");
        let toggleButton = section.querySelector(".toggle-button");
        section.classList.remove("active");
        content.style.maxHeight = null;
        toggleButton.textContent = "▼";
      });

      let targetContent = targetSection.querySelector(".content");
      let targetButton = targetSection.querySelector(".toggle-button");
      targetSection.classList.add("active");
      targetContent.style.maxHeight = targetContent.scrollHeight + "px";
      targetButton.textContent = "▲";
    });
  });
});
