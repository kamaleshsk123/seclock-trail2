// Function to redirect to firstpage.html on image click
function redirectToFirstPage() {
  // Check if the target of the click is the logo image
  if (event.target.classList.contains("animate-flicker")) {
    // Redirect to firstpage.html only if the click was on the logo image
    window.location.replace("firstpage.html");
  }
}

// Attach the function to the document click event
document.addEventListener("click", redirectToFirstPage);

// Rest of your script...

function openCreateRoomPage() {
  try {
    // Log a message to confirm that the function is being called
    console.log("Navigating to createroom.html...");

    // Navigate to createroom.html using a relative path
    window.location.href = "http://0.0.0.0:5501/createroom.html";

    // Log a success message
    console.log("Navigation successful.");
  } catch (error) {
    // Log any errors that occur
    console.error("Error navigating:", error);
  }
}

document
  .getElementById("createRoomButton")
  .addEventListener("click", openCreateRoomPage);

// Function to navigate to joinroom.html
function redirectToJoinRoom() {
  // Navigate to joinroom.html
  window.location.href = "http://0.0.0.0:5502/joinroom.html";
}

// Attach the functions to button clicks
document
  .getElementById("joinRoomButton")
  .addEventListener("click", redirectToJoinRoom);

// back
