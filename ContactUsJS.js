emailjs.init("ORr41G9E_oqUj4ZV6"); // Replace 'user_your_emailjs_user_id' with your emailjs user ID

document.getElementById("contactForm").onsubmit = function(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    email: email,
    message: message,
  };

  emailjs.send("default_service", "template_fuw8y8o", templateParams)
    .then(function(response) {
      // Show the success message here
      const successMessage = "Your message has been sent!";
      showMessage(successMessage);
      document.getElementById("contactForm").reset();
    }, function(error) {
      // Show the error message here
      const errorMessage = "Error sending your message. Please try again.";
      showMessage(errorMessage);
    });
};

function showMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.className = "message";
  messageContainer.textContent = message;

  const container = document.querySelector(".container");
  container.appendChild(messageContainer);

  // Remove the message after a few seconds (optional)
  setTimeout(function() {
    container.removeChild(messageContainer);
  }, 5000);
}
