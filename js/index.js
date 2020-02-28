$('#main-nav a').on('click', function(e) {
  //check for a hash value
  if (this.hash !== ''){
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    //Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {
      // Add hash URL after scroll
      window.location.hash = hash;
    });
  }
});

$('#year').text(new Date().getFullYear());
