console.log("Origin Realms Clone Loaded");

function switchCreator(index) {
  const cards = document.querySelectorAll('.creator-card');
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}
