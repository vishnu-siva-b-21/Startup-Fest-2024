
//loading script

var loader = document.getElementById("loading");
window.addEventListener("load", function () {
   setTimeout(function () {
      $('#loading').hide();
   }, 2000);
})



//navbar script

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".navbar .menu a");

    function changeLinkState() {
       let index = sections.length;

       while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

       menuLinks.forEach((link) => link.classList.remove("active"));
       menuLinks[index].classList.add("active");
    }

    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
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
                value_area: 800,
             },
          },
          color: {
             value: "#f0c394",
          },
          opacity: {
             value: 0.4,
             random: false,
             anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
             },
          },
          size: {
             value: 3,
             random: true,
             anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
             },
          },
          line_linked: {
             enable: true,
             distance: 150,
             color: "#f0c394",
             opacity: 0.4,
             width: 1,
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
                rotateY: 1200,
             },
          },
       },
       retina_detect: true,
    });
 }
 // Function to initialize particles animation
 function initializeParticlesAnimation() {
    particlesJS("particles-js", {
       // Particle configuration
       particles: {
          // Define particle configuration here
       },
       retina_detect: true,
    });
 }

 // Function to check if the page is active or scrolled
 function checkPageActivation() {
    var content = document.querySelector('.content');
    var imageContainer = document.querySelector('.image-container');
    var contentPosition = content.getBoundingClientRect().top;
    var imageContainerPosition = imageContainer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (contentPosition < windowHeight) {
       content.classList.add('fade-in-left');
    }
    if (imageContainerPosition < windowHeight) {
       imageContainer.classList.add('fade-in-right');
    }
 }

 // Check if page is scrolled or becomes active
 window.addEventListener('scroll', checkPageActivation);
 window.addEventListener('visibilitychange', checkPageActivation);

 // Call the function initially
 checkPageActivation();



 //agenda script

 schedule_1 = document.getElementById("schedule-1")
 schedule_2 = document.getElementById("schedule-2")

 day_1 = document.getElementById("day1")
 day_2 = document.getElementById("day2")

 schedule_1.addEventListener("click", () => {
    if (!schedule_1.classList.contains("active")) {
       schedule_1.classList.add("active");
       schedule_2.classList.remove("active");
       day_1.classList.remove("hidden");
       day_2.classList.add("hidden");
       day_1.style.display = "block";
       day_2.style.display = "none";
    }
 })

 schedule_2.addEventListener("click", () => {
    if (!schedule_2.classList.contains("active")) {
       schedule_2.classList.add("active");
       schedule_1.classList.remove("active");
       day_2.classList.remove("hidden");
       day_1.classList.add("hidden");
       day_2.style.display = "block";
       day_1.style.display = "none";
    }
 })


 //event script

 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 }

 function showVisibleElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
       if (isInViewport(element)) {
          element.classList.add('show');
       }
    });
 }

 document.addEventListener('DOMContentLoaded', function () {
    showVisibleElements();
    window.addEventListener('scroll', showVisibleElements);
 });



 //visitor registration 
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


  //faq script


  let questions = document.querySelectorAll(".question-faq");

  questions.forEach(questions => {
     questions.addEventListener("click", event => {
        const active = document.querySelector(".question-faq.active");
        if (active && active !== questions) {
           active.classList.toggle("active");
           active.nextElementSibling.style.maxHeight = 0;
        }
        questions.classList.toggle("active");
        const answer = questions.nextElementSibling;
        if (questions.classList.contains("active")) {
           answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
           answer.style.maxHeight = 0;
        }
     })
  })



  document.addEventListener("DOMContentLoaded", function () {
     const faqRow1 = document.querySelector('.faq-row1');
     const faqRow2 = document.querySelector('.faq-row2');

     function fadeInWhenVisible(element) {
        const rects = element.getBoundingClientRect();
        const windowHeights = window.innerHeight || document.documentElement.clientHeight;

        if (rects.top <= windowHeights) {
           element.classList.add('animate-fade-left');
        }
     }

     function fadeInWhenVisibleRight(element) {
        const rects = element.getBoundingClientRect();
        const windowHeights = window.innerHeight || document.documentElement.clientHeight;

        if (rects.top <= windowHeights) {
           element.classList.add('animate-fade-right');
        }
     }

     function scrollHandler() {
        fadeInWhenVisible(faqRow1);
        fadeInWhenVisibleRight(faqRow2);
     }

     scrollHandler();

     window.addEventListener('scroll', scrollHandler);
     window.addEventListener('resize', scrollHandler);
  });


  //subscribe script

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 }

 function checkAnimation() {
    var subRow1 = document.querySelector('.sub-row1');
    var subRow2 = document.querySelector('.sub-row2');

    if (isElementInViewport(subRow1)) {
       subRow1.classList.add('fade-in-left');
    }

    if (isElementInViewport(subRow2)) {
       subRow2.classList.add('fade-in-right');
    }
 }

 window.addEventListener('scroll', checkAnimation);
