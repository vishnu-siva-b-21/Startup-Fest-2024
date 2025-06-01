/* Subscribe script - Start */

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "College Student", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "College Student", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});

ScrollReveal().reveal(".fadeInLeft", {
  distance: "100px",
  origin: "left",
  duration: 1500,
  easing: "ease-in-out",
  delay: 150,
  reset: true // Add this line to reset the animation on each scroll
});

ScrollReveal().reveal(".fadeInRight", {
  distance: "100px",
  origin: "right",
  duration: 1500,
  easing: "ease-in-out",
  delay: 150,
  reset: true // Add this line to reset the animation on each scroll
});

// Additional ScrollReveal animations can be added for other elements

// Rest of your existing script
const translateX = document.querySelectorAll(".translateX");
const translateY = document.querySelectorAll(".translateY");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  translateX.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateX(${scroll * speed}px)`;
  });
  translateY.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });
});

// Initialize Swiper

function toggleAnswer(element) {
  const answer = element.nextElementSibling;

  // Toggle the 'active' class to trigger the transition
  answer.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var subscribeSection = document.getElementById("subscribe");

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Change this threshold value based on your preference
  };

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(subscribeSection);
});

document.addEventListener("DOMContentLoaded", function () {
  new WOW().init({
    offset: 100, // Adjust this value based on when you want the animation to trigger
    mobile: false, // Disable animation on mobile devices
    live: false // Disable live updates (useful when content is added dynamically)
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll("#events .slider .item");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  let active = 3;
  function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  }
  loadShow();
  next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
  };
  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var subscribeSection = document.getElementById("subscribe");

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Change this threshold value based on your preference
  };

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(subscribeSection);
});

/* Subscribe script - End */

document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll("#events .slider .item");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");

  let active = 3;
  function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${
        1 - 0.2 * stt
      }) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  }
  loadShow();
  next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
  };
  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  };
});

//speaker section animation
document.addEventListener("DOMContentLoaded", function () {
  const speakersSection = document.getElementById("speakers");
  const speakers = document.querySelectorAll(".speaker");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    speakers.forEach(function (speaker) {
      if (isInViewport(speaker) && !speaker.classList.contains("animated")) {
        if (
          window.scrollY + window.innerHeight >
          speaker.offsetTop + speaker.offsetHeight / 2
        ) {
          speaker.classList.add("fadeInRight", "animated");
        } else {
          speaker.classList.add("fadeInLeft", "animated");
        }
      }
    });

    // Remove scroll event listener once all speakers have been animated
    if (
      [...speakers].every((speaker) => speaker.classList.contains("animated"))
    ) {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

// Faq section animations start

document.addEventListener("DOMContentLoaded", function () {
  const row1 = document.querySelector(".row1");
  const row2 = document.querySelector(".row2");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isInViewport(row1) && !row1.classList.contains("animated-row1")) {
      row1.classList.add("animated-row1");
    }
    if (isInViewport(row2) && !row2.classList.contains("animated-row2")) {
      row2.classList.add("animated-row2");
    }

    // Remove scroll event listener once both rows have been animated
    if (
      row1.classList.contains("animated-row1") &&
      row2.classList.contains("animated-row2")
    ) {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

// speaker section

jQuery(function ($) {
  /*=============================================================
      speaker popup
 =========================================================================*/

  $(".ts-image-popup").magnificPopup({
    type: "inline",
    closeOnContentClick: false,
    midClick: true,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      }
    },
    zoom: {
      enabled: true,
      duration: 500 // don't foget to change the duration also in CSS
    },
    mainClass: "mfp-fade"
  });
});

$(document).ready(function () {
  // Initialize Magnific Popup
  $(".ts-image-popup").magnificPopup({
    type: "inline",
    gallery: {
      enabled: false
    }
  });

  // Handle click event on speaker images to show respective popups
  $(".speaker-trigger").click(function () {
    var popupId = $(this).attr("data-popup");
    $.magnificPopup.open({
      items: {
        src: popupId
      },
      type: "inline"
    });
  });

  // Close popup when the close icon is clicked
  $(".popup-close-button").click(function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

// speaker fade-in animations

document.addEventListener("DOMContentLoaded", function () {
  animateSpeakers();
});

function animateSpeakers() {
  var speakers = document.querySelectorAll(".ts-speaker");
  var i = 0;
  var interval = setInterval(function () {
    if (i >= speakers.length) {
      clearInterval(interval);
      return;
    }
    speakers[i].style.opacity = 1;
    if (i < 3) {
      speakers[i].style.animation = "fade-in-left 1s ease-out";
    } else {
      speakers[i].style.animation = "fade-in-right 1s ease-out";
    }
    // Remove animation after it's applied once
    speakers[i].addEventListener("animationend", function () {
      this.style.animation = "none";
    });
    i++;
  }, 1000);
}

(function () {
  // Get all images and texts, get the `canvas` element, and save slider length
  var sliderCanvas = document.querySelector(".pieces-slider__canvas");
  var imagesEl = [].slice.call(
    document.querySelectorAll(".pieces-slider__image")
  );
  var textEl = [].slice.call(document.querySelectorAll(".pieces-slider__text"));
  var slidesLength = imagesEl.length;

  // Define indexes related variables and functions
  var currentIndex = 0,
    currentImageIndex,
    currentTextIndex,
    currentNumberIndex;
  // Update current indexes for image, text and number
  function updateIndexes() {
    currentImageIndex = currentIndex * 3;
    currentTextIndex = currentImageIndex + 1;
    currentNumberIndex = currentImageIndex + 2;
  }
  updateIndexes();
  var textIndexes = [];
  var numberIndexes = [];

  // Some other useful variables
  var windowWidth = window.innerWidth;
  var piecesSlider;

  // Options for images
  var imageOptions = {
    angle: 45,
    extraSpacing: { extraX: 100, extraY: 200 },
    piecesWidth: function () {
      return Pieces.random(50, 200);
    },
    ty: function () {
      return Pieces.random(-400, 400);
    }
  };

  // Options for texts
  var textOptions = {
    color: "white",
    backgroundColor: "#5104ab",
    fontSize: function () {
      return windowWidth > 720 ? 50 : 30;
    },
    padding: "15 20 10 20",
    angle: -45,
    piecesSpacing: 2,
    extraSpacing: { extraX: 0, extraY: 300 },
    piecesWidth: function () {
      return Pieces.random(50, 200);
    },
    ty: function () {
      return Pieces.random(-200, 200);
    },
    translate: function () {
      if (windowWidth > 1120) return { translateX: 200, translateY: 200 };
      if (windowWidth > 720) return { translateX: 0, translateY: 200 };
      return { translateX: 0, translateY: 100 };
    }
  };

  // Options for numbers
  var numberOptions = {
    color: "white",
    backgroundColor: "#5104ab",
    fontSize: function () {
      return windowWidth > 720 ? 60 : 20;
    },
    padding: function () {
      return windowWidth > 720 ? "18 35 10 38" : "18 25 10 28";
    },
    angle: 0,
    piecesSpacing: 2,
    extraSpacing: { extraX: 10, extraY: 10 },
    piecesWidth: 35,
    ty: function () {
      return Pieces.random(-200, 200);
    },
    translate: function () {
      if (windowWidth > 1120) return { translateX: -340, translateY: -180 };
      if (windowWidth > 720) return { translateX: -240, translateY: -180 };
      return { translateX: -140, translateY: -100 };
    }
  };

  // Build the array of items to draw using Pieces
  var items = [];
  var imagesReady = 0;
  for (var i = 0; i < slidesLength; i++) {
    // Wait for all images to load before initializing the slider and event listeners
    var slideImage = new Image();
    slideImage.onload = function () {
      if (++imagesReady == slidesLength) {
        initSlider();
        initEvents();
      }
    };
    // Push all elements for each slide with the corresponding options
    items.push({ type: "image", value: imagesEl[i], options: imageOptions });
    items.push({
      type: "text",
      value: textEl[i].innerText,
      options: textOptions
    });
    items.push({ type: "text", value: i + 1, options: numberOptions });
    // Save indexes
    textIndexes.push(i * 3 + 1);
    numberIndexes.push(i * 3 + 2);
    // Set image src
    slideImage.src = imagesEl[i].src;
  }

  // Initialize a Pieces instance with all items we want to draw
  function initSlider() {
    // Stop any current animation if the slider was initialized before
    if (piecesSlider) {
      piecesSlider.stop();
    }

    // Save the new Pieces instance
    piecesSlider = new Pieces({
      canvas: sliderCanvas,
      items: items,
      x: "centerAll",
      y: "centerAll",
      piecesSpacing: 1,
      fontFamily: ["'Helvetica Neue', sans-serif"],
      animation: {
        duration: function () {
          return Pieces.random(1000, 2000);
        },
        easing: "easeOutQuint"
      }
      // debug: true
    });

    // Animate all numbers to rotate clockwise indefinitely
    piecesSlider.animateItems({
      items: numberIndexes,
      duration: 20000,
      angle: 360,
      loop: true
    });

    // Show current items: image, text and number
    showItems();
  }

  // Init Event Listeners
  function initEvents() {
    // Select prev or next slide using buttons
    document
      .querySelector(".pieces-slider__button--prev")
      .addEventListener("click", prevItem);
    document
      .querySelector(".pieces-slider__button--next")
      .addEventListener("click", nextItem);

    // Select prev or next slide using arrow keys
    document.addEventListener("keydown", function (e) {
      if (e.keyCode == 37) {
        // left
        prevItem();
      } else if (e.keyCode == 39) {
        // right
        nextItem();
      }
    });

    // Handle `resize` event
    window.addEventListener("resize", resizeStart);
  }

  // Show current items: image, text and number
  function showItems() {
    // Show image pieces
    piecesSlider.showPieces({
      items: currentImageIndex,
      ignore: ["tx"],
      singly: true,
      update: (anim) => {
        // Stop the pieces animation at 60%, and run a new indefinitely animation of `ty` for each piece
        if (anim.progress > 60) {
          var piece = anim.animatables[0].target;
          var ty = piece.ty;
          anime.remove(piece);
          anime({
            targets: piece,
            ty:
              piece.h_ty < 300
                ? [
                    { value: ty + 10, duration: 1000 },
                    { value: ty - 10, duration: 2000 },
                    { value: ty, duration: 1000 }
                  ]
                : [
                    { value: ty - 10, duration: 1000 },
                    { value: ty + 10, duration: 2000 },
                    { value: ty, duration: 1000 }
                  ],
            duration: 2000,
            easing: "linear",
            loop: true
          });
        }
      }
    });
    // Show pieces for text and number, using alternate `ty` values
    piecesSlider.showPieces({ items: currentTextIndex });
    piecesSlider.showPieces({
      items: currentNumberIndex,
      ty: function (p, i) {
        return p.s_ty - [-3, 3][i % 2];
      }
    });
  }

  // Hide current items: image, text and number
  function hideItems() {
    piecesSlider.hidePieces({
      items: [currentImageIndex, currentTextIndex, currentNumberIndex]
    });
  }

  // Select the prev item: hide current items, update indexes, and show the new current item
  function prevItem() {
    hideItems();
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slidesLength - 1;
    updateIndexes();
    showItems();
  }

  // Select the next item: hide current items, update indexes, and show the new current item
  function nextItem() {
    hideItems();
    currentIndex = currentIndex < slidesLength - 1 ? currentIndex + 1 : 0;
    updateIndexes();
    showItems();
  }

  // Handle `resize` event

  var initial = true,
    hideTimer,
    resizeTimer;

  // User starts resizing, so wait 300 ms before reinitialize the slider
  function resizeStart() {
    if (initial) {
      initial = false;
      if (hideTimer) clearTimeout(hideTimer);
      sliderCanvas.classList.add("pieces-slider__canvas--hidden");
    }
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeEnd, 300);
  }

  // User ends resizing, then reinitialize the slider
  function resizeEnd() {
    initial = true;
    windowWidth = window.innerWidth;
    initSlider();
    hideTimer = setTimeout(() => {
      sliderCanvas.classList.remove("pieces-slider__canvas--hidden");
    }, 500);
  }
})();
