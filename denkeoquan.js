const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', function() {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseout', function() {
    carousel.style.animationPlayState = 'running';
});