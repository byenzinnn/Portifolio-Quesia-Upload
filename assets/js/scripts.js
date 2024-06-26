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

function btnScroll() {
      window.scroll({
      top: 800,
      behavior: "smooth"
    });
  }
