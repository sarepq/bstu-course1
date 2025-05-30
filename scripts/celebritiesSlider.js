document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.celebrities-container');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const cards = document.querySelectorAll('.celebrity-card');
    
    let currentPosition = 0;
    let cardWidth = 0;
    
    function initSlider() {
        if (window.innerWidth <= 768) {
            cardWidth = cards[0].offsetWidth + 20;
            updateSlider();

            prevBtn.removeEventListener('click', slidePrev);
            nextBtn.removeEventListener('click', slideNext);

            prevBtn.addEventListener('click', slidePrev);
            nextBtn.addEventListener('click', slideNext);

            let touchStartX = 0;
            let touchEndX = 0;
            
            container.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            container.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
        } else {
            container.style.transform = 'none';
            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }
    }
    
    function updateSlider() {
        if (window.innerWidth <= 768) {
            container.style.transform = `translateX(${-currentPosition * cardWidth}px)`;

            prevBtn.style.opacity = currentPosition === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentPosition >= cards.length - 1 ? '0.5' : '1';

            prevBtn.style.pointerEvents = currentPosition === 0 ? 'none' : 'auto';
            nextBtn.style.pointerEvents = currentPosition >= cards.length - 1 ? 'none' : 'auto';
        }
    }
    
    function slideNext() {
        if (currentPosition < cards.length - 1) {
            currentPosition++;
            updateSlider();
        }
    }
    
    function slidePrev() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSlider();
        }
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                slideNext();
            } else {
                slidePrev();
            }
        }
    }

    initSlider();
    window.addEventListener('resize', initSlider);
}); 