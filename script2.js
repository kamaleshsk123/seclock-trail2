document.addEventListener("DOMContentLoaded", function () {
  const backArrow = document.getElementById("backArrow");

  if (backArrow) {
    backArrow.addEventListener("click", redirectToPreviousPage);
  }
});

function redirectToPreviousPage() {
  history.back();
}
