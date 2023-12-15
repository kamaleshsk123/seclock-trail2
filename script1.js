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

function printPickedValue() {
  // Get the value from the input field
  const inputValue = document.getElementById("keyInput").value;

  // Print the picked value to the console
  console.log("Picked Value:", inputValue);
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Generate and set a random key when the page loads
//   generateAndSetKey();

//   // Attach event listener for the "Generate New Key" button
//   const randomKeyGenerator = document.getElementById("randomKeyGenerator");
//   if (randomKeyGenerator) {
//     randomKeyGenerator.addEventListener("click", generateAndSetKey);
//   }

//   // Attach event listener for the "Pick Value" SVG
//   const pickValueContainer = document.getElementById("pickValueContainer");
//   if (pickValueContainer) {
//     const pickValueSVG = pickValueContainer.querySelector("#pickValueSVG");
//     if (pickValueSVG) {
//       pickValueSVG.addEventListener("click", printPickedValue);
//     }
//   }

//   // Attach event listener for the "Back" button
//   const backArrow = document.getElementById("backArrow");
//   if (backArrow) {
//     backArrow.addEventListener("click", redirectToPreviousPage);
//   }
// });

let valuePicked = false;

document.addEventListener("DOMContentLoaded", function () {
  // Generate and set a random key when the page loads
  generateAndSetKey();

  const svgContainer = document.getElementById("svgContainer");
  const randomKeyGenerator = document.getElementById("randomKeyGenerator");
  const pickValueSVG = document.getElementById("pickValueSVG");

  if (svgContainer && randomKeyGenerator && pickValueSVG) {
    randomKeyGenerator.addEventListener("click", function () {
      // Only generate a random key if a value has not been picked
      if (!valuePicked) {
        generateAndSetKey();
      }
    });

    pickValueSVG.addEventListener("click", function () {
      // Set the flag to true when the value is picked
      valuePicked = true;

      // Do whatever you want with the picked value (e.g., print to console)
      const pickedValue = document.getElementById("keyInput").value;
      console.log("Picked Value:", pickedValue);
    });
  }
});

function generateAndSetKey() {
  // Reset the flag when a new random key is generated
  valuePicked = false;

  // Generate a random key with length 6
  const randomKey = generateRandomKey(6);

  // Set the generated key to the input field
  document.getElementById("keyInput").value = randomKey;
}
