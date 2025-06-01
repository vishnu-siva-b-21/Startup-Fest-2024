
//loading script

var loader = document.getElementById("loading");
window.addEventListener("load", function () {
   setTimeout(function () {
      $("#loading").hide();
   }, 2000);
});

//about script

var swiper = new Swiper(".swiper", {
    effect: "slide",
    speed: 900,
    loop: true,
    mousewheel: false // Disable mousewheel control for swiper
 });

 // Function to initialize particles animation
 function initializeParticlesAnimation() {
    particlesJS("particles-js", {
       // Particle configuration
       particles: {
          number: {
             value: 200,
             density: {
                enable: true,
                value_area: 800
             }
          },
          color: {
             value: "#f0c394"
          },
          opacity: {
             value: 0.4,
             random: false,
             anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
             }
          },
          size: {
             value: 3,
             random: true,
             anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
             }
          },
          line_linked: {
             enable: true,
             distance: 150,
             color: "#f0c394",
             opacity: 0.4,
             width: 1
          },
          move: {
             enable: true,
             speed: 0.5,
             direction: "none",
             random: false,
             straight: false,
             out_mode: "out",
             bounce: false,
             attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
             }
          }
       },
       retina_detect: true
    });
 }
 // Function to initialize particles animation
 function initializeParticlesAnimation() {
    particlesJS("particles-js", {
       // Particle configuration
       particles: {
          // Define particle configuration here
       },
       retina_detect: true
    });
 }

 // Function to check if the page is active or scrolled
 function checkPageActivation() {
    var content = document.querySelector(".content");
    var imageContainer =
       document.querySelector(".image-container");
    var contentPosition = content.getBoundingClientRect().top;
    var imageContainerPosition =
       imageContainer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (contentPosition < windowHeight) {
       content.classList.add("fade-in-left");
    }
    if (imageContainerPosition < windowHeight) {
       imageContainer.classList.add("fade-in-right");
    }
 }

 // Check if page is scrolled or becomes active
 window.addEventListener("scroll", checkPageActivation);
 window.addEventListener(
    "visibilitychange",
    checkPageActivation
 );

 // Call the function initially
 checkPageActivation();


 //registration validation
 
 document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector("form");
   const nameField = document.querySelector(".name-field");
   const nameInput = document.querySelector(".names");
   const emailField = document.querySelector(".email-field");
   const emailInput = document.querySelector(".emails");
   const numberField = document.querySelector(".number-field");
   const numberInput = document.querySelector(".numbers");

   // Email Validation
   function checkEmail() {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailInput.value.match(emailPattern)) {
         emailField.classList.add("invalid");
      } else {
         emailField.classList.remove("invalid");
      }
   }

   // Name Validation
   function checkName() {
      const namePattern = /^[a-zA-Z\s.]+$/;
      if (!nameInput.value.match(namePattern)) {
         nameField.classList.add("invalid");
      } else {
         nameField.classList.remove("invalid");
      }
   }

   // Mobile Number Validation
   function checkNumber() {
      const numberPattern = /^\d{10}$/;
      if (!numberInput.value.match(numberPattern)) {
         numberField.classList.add("invalid");
      } else {
         numberField.classList.remove("invalid");
      }
   }

   // Form submit event
   form.addEventListener("submit", function (e) {
      e.preventDefault();
      checkName();
      checkEmail();
      checkNumber();

      // Check if all fields are valid before submitting the form
      if (!emailField.classList.contains("invalid") && !nameField.classList.contains("invalid") && !numberField.classList.contains("invalid")) {
         const formData = new FormData(form);
         fetch(form.getAttribute("action"), {
            method: 'POST',
            body: formData
         })
         .then(response => {
            if (response.ok) {
               // Clear form fields
               form.reset();

               // Show Sweet Alert
               Swal.fire({
                  icon: 'success',
                  title: 'Registration Successful',
                  text: 'Thank you for registering!',
                  confirmButtonText: 'OK'
               });
            } else {
               // Optionally, handle errors
               console.error("Form submission failed");
            }
         })
         .catch(error => {
            console.error("Error submitting form:", error);
         });
      }
   });

   // Event listeners for keyup events
   nameInput.addEventListener("keyup", checkName);
   emailInput.addEventListener("keyup", checkEmail);
   numberInput.addEventListener("keyup", checkNumber);
});