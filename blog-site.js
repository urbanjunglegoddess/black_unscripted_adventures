document.getElementById('prevBtn').addEventListener('click', function() {
    document.getElementById('carousel').scrollBy(-300, 0);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    document.getElementById('carousel').scrollBy(300, 0);
});

