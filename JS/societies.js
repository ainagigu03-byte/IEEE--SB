// societies tab switcher

const socTabs = document.querySelectorAll('.soc-tab');
const socContents = document.querySelectorAll('.society-content');

socTabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // remove active from all tabs
    socTabs.forEach(t => t.classList.remove('active'));

    // hide all society content
    socContents.forEach(c => c.classList.remove('active'));

    // show clicked tab as active
    tab.classList.add('active');

    // show matching society content
    const society = tab.dataset.society;
    document.getElementById(society).classList.add('active');

  });
});