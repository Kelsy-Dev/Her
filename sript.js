    // Smooth scroll function
    function smoothScroll(target, duration) {
        var targetElement = document.querySelector(target);
        var targetPosition = targetElement.offsetTop;
        var startPosition = window.scrollY;
        var distance = targetPosition - startPosition;
        var startTime = null;
  
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          var timeElapsed = currentTime - startTime;
          var run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
  
          // Easing function (easeInOutCubic)
        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t * t + b;
            t -= 2;
            return (c / 2) * (t * t * t + 2) + b;
        }
  
        requestAnimationFrame(animation);
      }
  
      // Smooth scroll on anchor link click
      var navLinks = document.querySelectorAll("nav a, .mybtn a");
  
      navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          var target = this.getAttribute("href");
          var duration = 2000; // Adjust scrolling speed here
          smoothScroll(target, duration);
        });
      });