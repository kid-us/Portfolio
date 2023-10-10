const signInBtn = document.querySelectorAll(".btn-danger");


signInBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.add("hidden");
        btn.previousSibling.previousSibling.classList.add("animate__fadeOut");
    });
  });
  