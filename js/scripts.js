// Preloader
$(window).on("load", function () {
  $(".preloader").fadeOut("slow");
});

// Navbar Scroll Effect
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
});

// Back to Top Button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").addClass("active");
  } else {
    $(".back-to-top").removeClass("active");
  }
});

$(".back-to-top").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Counter Animation
$(document).ready(function () {
  $(".stat-number").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).data("count"),
        },
        {
          duration: 2500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// Testimonial Slider
$(document).ready(function () {
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    fade: true,
    cssEase: "linear",
  });
});

// Smooth Scrolling for Navigation Links
$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 70,
    },
    500,
    "linear"
  );
});

// Animation on Scroll
$(document).ready(function () {
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// Contact Form Submission (Placeholder)
$(document).ready(function () {
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    $(this)[0].reset();
  });
});

// Initialize Tooltips
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

// Team Slider
$(".team-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Service Slider
$(".service-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Project Slider
$(".project-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Furniture Slider
$(".furniture-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
