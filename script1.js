// random number generator
function generateRandomKey(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

document.addEventListener("DOMContentLoaded", function () {
  // Generate and set a random key when the page loads
  generateAndSetKey();

  const svgContainer = document.getElementById("svgContainer");

  if (svgContainer) {
    const randomKeyGenerator = svgContainer.querySelector(
      "#randomKeyGenerator"
    );

    if (randomKeyGenerator) {
      randomKeyGenerator.addEventListener("click", generateAndSetKey);
    }
  }
});

function generateAndSetKey() {
  // Generate a random key with length 6
  const randomKey = generateRandomKey(6);

  // Set the generated key to the input field
  document.getElementById("keyInput").value = randomKey;
}

document.addEventListener("DOMContentLoaded", function () {
  const backArrow = document.getElementById("backArrow");

  if (backArrow) {
    backArrow.addEventListener("click", redirectToPreviousPage);
  }
});

function redirectToPreviousPage() {
  // Simulate the back button click event
  history.back();
}
