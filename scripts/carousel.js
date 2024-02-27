
// $("#left1").click(function () {
//     $('#carousel-1').addClass('hidden');
//     $('#c3d3').addClass('color');
//     $('#carousel-2').addClass('hidden');
//     $('#carousel-3').removeClass('hidden');
//   })

//   $("#right1").click(function () {
//     $('#carousel-1').addClass('hidden');
//     $('#carousel-2').removeClass('hidden');
//     $('#carousel-3').addClass('hidden');
//   })


//   $("#left2").click(function () {
//     $('#carousel-1').removeClass('hidden');
//     $('#carousel-2').addClass('hidden');
//     $('#carousel-3').addClass('hidden');
//   })

//   $("#right2").click(function () {
//     $('#carousel-1').addClass('hidden');
//     $('#carousel-2').addClass('hidden');
//     $('#carousel-3').removeClass('hidden');
//   })


//   $("#left3").click(function () {
//     $('#carousel-1').addClass('hidden');
//     $('#carousel-2').removeClass('hidden');
//     $('#carousel-3').addClass('hidden');
//   })

//   $("#right3").click(function () {
//     $('#carousel-1').removeClass('hidden');
//     $('#carousel-2').addClass('hidden');
//     $('#carousel-3').addClass('hidden');
//   })



/* TODO: Replace TODO_SLIDES_CSS_SELECTOR with a CSS selector that selects _all_ slides. (See "hint" above in access element snippet.) */
const SLIDES = $('.carousel-content');

/* See "show next slide snippet" to use */
function nextSlide() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let nextNum = SLIDES.index($('.carousel-content:not(.hidden)')) + 1
  + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let prevNum = SLIDES.index($('.carousel-content:not(.hidden)')) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

const DOTS = $('.dots');
/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);
  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
  console.log(currentSlide);

  const DOTS = $('.dots');

  let currentDot = DOTS.eq(index);
  DOTS.removeClass("dotSelected");
  currentDot.addClass("dotSelected");
}



$("#right1").click(function () {
  nextSlide();
});

$("#left1").click(function () {
  prevSlide();
});
$("#right2").click(function () {
  nextSlide();
});

$("#left2").click(function () {
  prevSlide();
});
$("#right3").click(function () {
  nextSlide();
});

$("#left3").click(function () {
  prevSlide();
});

$("#dot1").click(function () {
  showSlide(1);
});


$("#dot2").click(function () {
  showSlide(2);
});

$("#dot3").click(function () {
  showSlide(3);
});

