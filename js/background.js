const cards = document.getElementsByClassName('single-card');
for (const card of cards) {
    card.addEventListener('mouseenter', function(){
        card.style.backgroundColor = randomColor();
    })
}