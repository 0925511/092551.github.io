document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.idol-image img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('enlarged');
        });
    });
}); 