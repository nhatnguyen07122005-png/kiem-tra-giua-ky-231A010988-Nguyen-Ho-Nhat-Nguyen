// Lấy phần tử lồng đèn
const carousel = document.querySelector('.carousel');

// Khi rê chuột vào: Dừng animation
carousel.addEventListener('mouseover', function() {
    carousel.style.animationPlayState = 'paused';
});

// Khi đưa chuột ra: Tiếp tục animation
carousel.addEventListener('mouseout', function() {
    carousel.style.animationPlayState = 'running';
});