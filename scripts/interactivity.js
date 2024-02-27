/* hamburger menu interactivity */

$(window).resize(function() {
    if ($(document).width() < 600) {
        $("#navbar").addClass("hidden");

        $("#narrow-banner").removeClass("hidden");
    }
  });

  $(window).resize(function() {
    if ($(document).width() >= 600) {
        $("#navbar").removeClass("hidden");
        $("#narrow-banner").addClass("hidden");
        $("#wide-banner").removeClass("hidden");
        $("#hamburger-menu").addClass("hidden");
    }
  });

  $("#hamburger").on('click',(function() {
    if ($("#hamburger-menu").hasClass("hidden")) {
        $("#hamburger-menu").removeClass("hidden");

    }
    else {
        $("#hamburger-menu").addClass("hidden");

    }

  }));


  $(document).ready(function() {
    if ($(document).width() < 600) {
      $("#hamburger-menu").removeClass("hidden");
      $("#narrow-banner").removeClass("hidden");
    } else {
      $("#hamburger-menu").addClass("hidden");
    }
  });
