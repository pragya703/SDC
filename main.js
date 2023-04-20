function myFunction() {
  alert("Registrations Closed");
}
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').addClass('long');
  }
  else {
    $('header').removeClass('long');
  }
})
$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('header').removeClass('header');
  }
  else {
    $('header').addClass('header');
  }
})


