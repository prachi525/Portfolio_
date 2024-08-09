(function() {
  emailjs.init("aChrAo3KJvl0w2rm5"); // Initialize with your API key

  document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email
    emailjs
      .send("service_dbx89hj", "template_pq3fc9s", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(function(response) {
        alert("Email sent successfully!");
        // You can redirect the user to a thank you page or take any other action here
      })
      .catch(function(error) {
        console.error("Email could not be sent: ", error);
      });
  };
})();

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-list ul");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
