// Modal btns
const resumeBtn = document.getElementById("resume-btn");
const contactBtn = document.getElementById("contact-btn");
const aboutBtn = document.getElementById("about-btn");
const serviceBtn = document.getElementById("service-btn");
const projectBtn = document.getElementById("project-btn");

// Modal pages
const resumeModal = document.getElementById("resume-modal");
const aboutModal = document.getElementById("about-modal");
const serviceModal = document.getElementById("service-modal");
const projectModal = document.getElementById("project-modal");
const contactModal = document.getElementById("contact-modal");

// overlay
const overlay = document.getElementById("overlay");

resumeBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  resumeModal.classList.remove("hidden");
  resumeModal.classList.remove("animate__zoomOut");
  resumeModal.classList.add("animate__zoomIn");
  document.getElementById("body").style.overflow = "hidden";
  pauseAudio();
});

aboutBtn.addEventListener("click", () => {
  aboutModal.classList.remove("hidden");
  aboutModal.classList.remove("animate__zoomOut");
  aboutModal.classList.add("animate__zoomIn");
  document.getElementById("body").style.overflow = "hidden";
  overlay.classList.remove("hidden");
});

const mdServiceBtn = document.getElementById("md-service-btn");
if (mdServiceBtn) {
  mdServiceBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    serviceModal.classList.remove("hidden");
    serviceModal.classList.remove("animate__zoomOut");
    serviceModal.classList.add("animate__zoomIn");
    document.getElementById("body").style.overflow = "hidden";
  });
}

serviceBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  serviceModal.classList.remove("hidden");
  serviceModal.classList.remove("animate__zoomOut");
  serviceModal.classList.add("animate__zoomIn");
  document.getElementById("body").style.overflow = "hidden";
});

projectBtn.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  projectModal.classList.remove("hidden");
  projectModal.classList.remove("animate__zoomOut");
  projectModal.classList.add("animate__zoomIn");
  document.getElementById("body").style.overflow = "hidden";
});

// contactBtn.addEventListener("click", () => {
//   // overlay.classList.remove("hidden");
//   // contactModal.classList.remove("hidden");
//   // contactModal.classList.remove("animate__zoomOut");
//   // contactModal.classList.add("animate__zoomIn");
//   // document.getElementById("body").style.overflow = "hidden";
//   playAudio();
// });

const closeModalBtn = document.querySelectorAll(".close-modal");

closeModalBtn.forEach((close) => {
  close.addEventListener("click", () => {
    const parent = close.previousSibling.parentElement;
    parent.classList.remove("animate__zoomIn");
    parent.classList.add("animate__zoomOut");
    document.getElementById("body").style.overflow = "scroll";
    overlay.classList.add("hidden");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  contactModal.classList.add("hidden");
  resumeModal.classList.add("hidden");
  serviceModal.classList.add("hidden");
  projectModal.classList.add("hidden");
  aboutModal.classList.add("hidden");
  document.getElementById("body").style.overflow = "scroll";
});

const project = document.querySelectorAll(".large-project");

project.forEach((pro) => {
  pro.addEventListener("mouseover", () => {
    let num = pro.getAttribute("data-num");
    const description = document.getElementById("project-description-" + num);
    description.classList.remove("hidden");
    const img = document.getElementById("img-" + num).classList.add("hidden");
  });

  pro.addEventListener("mouseleave", () => {
    let num = pro.getAttribute("data-num");

    const description = document.getElementById("project-description-" + num);
    description.classList.add("hidden");
    const img = document
      .getElementById("img-" + num)
      .classList.remove("hidden");
  });
});
