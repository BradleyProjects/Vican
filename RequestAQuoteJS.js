
document.getElementById("quoteForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting via HTTP
  
    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      product: document.getElementById("product").value,
      quantity: document.getElementById("quantity").value,
    };
  
    // Send email using EmailJS
    emailjs.send("default_service", "template_luhl7mo", formData)
      .then(function(response) {
        console.log("Email sent successfully:", response);
        showSuccessMessage("Form submitted successfully! We'll get back to you soon.");
      })
      .catch(function(error) {
        console.log("Email sending failed:", error);
        showErrorMessage("Something went wrong. Please try again later.");
      });
  };
  
  // Function to show the success message
  function showSuccessMessage(message) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.style.color = "green";
    messageContainer.textContent = message;
  }
  
  // Function to show the error message
  function showErrorMessage(message) {
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.style.color = "red";
    messageContainer.textContent = message;
  }
  