/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };



    var animateButton = function(e) {
        e.preventDefault();
      
        // Reset animation
        e.target.classList.remove('animate');
      
        // Add animation class
        e.target.classList.add('animate');
      
        // Remove animation class after 500ms
        setTimeout(function(){
          e.target.classList.remove('animate');
          
          // Open the link after the animation
          window.open(e.target.getAttribute('href'));
        }, 700);
      };
      
      var bubblyButtons = document.getElementsByClassName("bubbly-button");
      
      // Attach click event listener to bubbly buttons
      for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
      }
      window.addEventListener('load', function() {
        var loadingOverlay = document.getElementById('loading-overlay');
        loadingOverlay.style.display = 'none';
      });
      