// ===========================
// YEAR TAB SWITCHER
// ===========================

// Get all year tab buttons
const yearTabs = document.querySelectorAll('.year-tab');

// When any year tab is clicked
yearTabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // Step 1 — remove active from all tabs
    yearTabs.forEach(t => t.classList.remove('active'));

    // Step 2 — add active to clicked tab
    tab.classList.add('active');

    // Step 3 — which year was clicked?
    const year = tab.dataset.year;

    // Step 4 — hide all grids first
    document.querySelectorAll('.execom-grid').forEach(grid => {
      grid.classList.add('hidden');
    });

    // Step 5 — show only the matching year grid
    document.getElementById('grid-' + year).classList.remove('hidden');

  });
});