$(document).ready(function() {
    var carousel = $('.carousel');
    var slides = carousel.find('.carousel-slide');
    var prevBtn = carousel.find('.carousel-prev');
    var nextBtn = carousel.find('.carousel-next');
    var slideWidth = slides.first().outerWidth();
    var currentSlide = 0;

    function goToSlide(index) {
        carousel.find('.carousel-inner').css('transform', 'translateX(' + (-slideWidth * index) + 'px)');
        currentSlide = index;
    }

    function goToNextSlide() {
        if (currentSlide < slides.length - 1) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(0);
        }
    }

    function goToPrevSlide() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else {
            goToSlide(slides.length - 1);
        }
    }

    prevBtn.on('click', function() {
        goToPrevSlide();
    });

    nextBtn.on('click', function() {
        goToNextSlide();
    });

    // Автоматическое переключение слайдов каждые 5 секунд
    setInterval(function() {
        goToNextSlide();
    }, 5000);
});
