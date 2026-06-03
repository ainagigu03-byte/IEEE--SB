// ===========================
// EVENTS FILTER
// ===========================

// Get all filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');

// Get all event cards
const eventCards = document.querySelectorAll('.event-card');

// When any filter button is clicked
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // Step 1 — remove 'active' from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));

    // Step 2 — add 'active' to the button that was clicked
    btn.classList.add('active');

    // Step 3 — which filter was clicked? (all / upcoming / ongoing / past)
    const filter = btn.dataset.filter;

    // Step 4 — show or hide each card based on filter
    eventCards.forEach(card => {
      if (filter === 'all') {
        // show everything
        card.classList.remove('hidden');
      } else if (card.dataset.status === filter) {
        // show only matching cards
        card.classList.remove('hidden');
      } else {
        // hide non-matching cards
        card.classList.add('hidden');
      }
    });

  });
});