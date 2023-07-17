document.addEventListener('mousemove', (e) => {
    const circleCursor = document.querySelector('.circle-cursor');
    circleCursor.style.top = e.pageY + 'px';
    circleCursor.style.left = e.pageX + 'px';
});