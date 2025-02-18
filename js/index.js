gsap.set(".parallax-element", { yPercent: 0 });
AOS.init({
    once: true, // Ensures animations trigger on scroll
    disable: false
  });
document.addEventListener("DOMContentLoaded", function() {

    $('.slider').slick({
        dots: false,    
        grabCursor: true,        // Show navigation dots
        infinite: true,        // Infinite loop scrolling
        speed: 500,          // Slide transition speed
        fade: false,           // Use fade transition instead of sliding
        autoplay: true,
                // Autoplay slides
        autoplaySpeed: 1500,   // Autoplay speed (in milliseconds)
        arrows: true,          // Show next/prev arrows
        slidesToShow: 3,       // Default: 3 slides for desktop
        slidesToScroll: 1, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        // Scroll one slide at a time
        responsive: [
          {
            breakpoint: 1024,  // For tablets
            settings: {
              slidesToShow: 2, // 2 slides for tablet
              slidesToScroll: 1,
              dots: true,
              arrows: true
            }
          },
          {
            breakpoint: 768,  // For mobile
            settings: {
              slidesToShow: 1, // 1 slide for mobile
              slidesToScroll: 1,
              dots: true,
              arrows: true
            }
          }
        ]
      });

      $('#slider').slick({
        dots: true, 
        centerMode: true,       // Enables center mode
        centerPadding: '200px',   
        grabCursor: true,        // Show navigation dots
        infinite: true,        // Infinite loop scrolling
        speed: 500,          // Slide transition speed
        fade: false,           // Use fade transition instead of sliding
        autoplay: true,
                // Autoplay slides
        autoplaySpeed: 1500,   // Autoplay speed (in milliseconds)
        arrows: false,          // Show next/prev arrows
        slidesToShow: 2,       // Default: 3 slides for desktop
        slidesToScroll: 1, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        // Scroll one slide at a time
        responsive: [
          {
            breakpoint: 1024,  // For tablets
            settings: {
              slidesToShow: 2, // 2 slides for tablet
              slidesToScroll: 1,
              dots: true,
              arrows: true,
              centerPadding: '100px', 
            }
          },
          {
            breakpoint: 768,  // For mobile
            settings: {
              slidesToShow: 1, // 1 slide for mobile
              slidesToScroll: 1,
              dots: true,
              arrows: true,
              centerPadding: '50px', 
            }
          }
        ]
      });
      
      
      
gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-element", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax-element",
      start: "top 100%",
      end: "bottom top",
      scrub: true,
    },
  });
  
});

 // Function to start a counter
 function startCounter(element, targetValue) {
    let currentValue = 0;
    const interval = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue++;
            element.textContent = currentValue; // Update the counter display
        } else {
            clearInterval(interval); // Stop when the target is reached
        }
    }, 100); // Adjust the speed of the counter
}

// Intersection Observer
const counters = document.querySelectorAll('.counter'); // Select all counter elements

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target); // Stop observing after it's in view
            const targetValue = parseInt(entry.target.getAttribute('data-end')); // Get target value from data-end
            startCounter(entry.target, targetValue); // Start the counter
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

// Start observing each counter
counters.forEach(counter => {
    observer.observe(counter);
});

const progressBarFill = document.getElementById('progress-bar-fill');

// Event listener to track scrolling
document.addEventListener("DOMContentLoaded", function() {
window.addEventListener('scroll', () => {    
  // Calculate the total scrollable height and the current scroll position
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate the percentage of the page that has been scrolled
  const scrollPercentage = (scrollTop / docHeight) * 100;

  // Update the width of the progress bar
  progressBarFill.style.height = `${scrollPercentage}%`;
});
})
var stickyNavTop = $('#header').offset().top + 600;
var stickyNav = function(){
  var scrollTop = $(window).scrollTop();
  if (scrollTop > stickyNavTop) { 
    $('#header').addClass('sticky');
  } else {
    $('#header').removeClass('sticky'); 
  }
};
$(window).scroll(function() { 
stickyNav();
  });  
jQuery(function () {
    document.addEventListener("touchstart", function () {}, false);
      jQuery("body").wrapInner('<div class="wsmenucontainer" />');
      jQuery('<div class="overlapblackbg"></div>').prependTo(".wsmenu");
      jQuery("#wsnavtoggle").click(function () {
        jQuery("body").toggleClass("wsactive");
      });
      jQuery(".overlapblackbg").click(function () {
        jQuery("body").removeClass("wsactive");
      });
      jQuery(".wsmenu > .wsmenu-list > li").has(".sub-menu").prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');
      jQuery(".wsmenu > .wsmenu-list > li").has(".wsmegamenu").prepend('<span class="wsmenu-click"><i class="wsmenu-arrow"></i></span>');
      jQuery(".wsmenu-click").click(function () {
        jQuery(this).toggleClass("ws-activearrow").parent().siblings().children().removeClass("ws-activearrow");
        jQuery(".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu").not(jQuery(this).siblings(".wsmenu > .wsmenu-list > li > .sub-menu, .wsmegamenu")).slideUp("slow");
        jQuery(this).siblings(".sub-menu").slideToggle("slow");
        jQuery(this).siblings(".wsmegamenu").slideToggle("slow");
      });
      jQuery(".wsmenu > .wsmenu-list > li > ul > li").has(".sub-menu").prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');
      jQuery(".wsmenu > .wsmenu-list > li > ul > li > ul > li").has(".sub-menu").prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow"></i></span>');
      jQuery(".wsmenu-click02").click(function () {
        jQuery(this).children(".wsmenu-arrow").toggleClass("wsmenu-rotate");
        jQuery(this).siblings("li > .sub-menu").slideToggle("slow");
      });
      jQuery(window).on("resize", function () {
        if (jQuery(window).outerWidth() < 992) {
          jQuery(".wsmenu").css("height", jQuery(this).height() + "px");
          jQuery(".wsmenucontainer").css("min-width", jQuery(this).width() + "px");
        } else {
          jQuery(".wsmenu").removeAttr("style");
          jQuery(".wsmenucontainer").removeAttr("style");
          jQuery("body").removeClass("wsactive");
          jQuery(".wsmenu > .wsmenu-list > li > .wsmegamenu, .wsmenu > .wsmenu-list > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu, .wsmenu > .wsmenu-list > li > ul.sub-menu > li > ul.sub-menu > li > ul.sub-menu").removeAttr("style");
          jQuery(".wsmenu-click").removeClass("ws-activearrow");
          jQuery(".wsmenu-click02 > i").removeClass("wsmenu-rotate");
        }
      });
      jQuery(window).trigger("resize");
    jQuery(    window).scroll(function () {
      var _0x702ex1 = jQuery(".wsmainfull"), _0x702ex2 = jQuery(window).scrollTop();
      if (_0x702ex2 >= 5) {
        _0x702ex1.addClass("wsfixe");
      } else {
        _0x702ex1.removeClass("wsfixed");
      }
    });
    jQuery(window).on("load", function () {
      jQuery(".wssearch").on("click", function () {
        jQuery(this).toggleClass("wsopensearch");
      });
      jQuery("body, .wsopensearch .wsmobsearchclose").on("click", function () {
        jQuery(".wssearch").removeClass("wsopensearch");
      });
      jQuery(".wssearch, .wssearchform form").on("click", function (_0x702ex3) {
        _0x702ex3.stopPropagation();
      });
    });
  }());
  

