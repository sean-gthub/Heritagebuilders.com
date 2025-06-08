document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.ba-slider-input');
    const afterImage = document.querySelector('.ba-image-after');
    const sliderHandle = document.querySelector('.ba-slider-handle');
    
    if (slider && afterImage && sliderHandle) {
        slider.addEventListener('input', function() {
            const value = this.value + '%';
            afterImage.style.width = value;
            sliderHandle.style.left = value;
        });
    }
});