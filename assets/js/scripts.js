/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.addEventListener('scroll', function() {
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (boxTop < windowHeight * 0.75) {
        box.classList.add('in-view');
    } else {
        box.classList.remove('in-view');
    }

});
});

window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.timeline .card');

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.75 && !card.classList.contains('animated')) {
      anime({
        targets: card,
        translateX: [-500, 0],
        duration: 1000,
        easing: 'easeOutQuad'
      });
      card.classList.add('animated');
    }
  });
});

anime({
  targets: '.title',
  translateX: [-100, 0]
});

function btnScroll() {
      window.scroll({
      top: 1200,
      behavior: "smooth"
    });
  }

