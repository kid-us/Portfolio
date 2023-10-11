const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const signInBtn = document.querySelectorAll(".btn-danger");

signInBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("hidden");
    const previous = btn.previousSibling.previousSibling;
    previous.classList.add("hidden");
    btn.nextSibling.nextSibling.classList.add("animate__fadeIn");
    btn.nextSibling.nextSibling.classList.remove("hidden");
  });
});


const developer = {
  description: "Lorem",
  name: 'Kidus Wondmagegnehu',
  skills: ['React', 'Laravel', 'Bootstrap'],
  graduated: true,
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
      return (
          this.hardWorker &&
          this.problemSolver &&
          this.skills.length >=3
      );
  }
}