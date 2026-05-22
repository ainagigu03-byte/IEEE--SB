// auth page javascript

// switch between admin and execom forms
const btnAdmin = document.getElementById('btnAdmin');
const btnExecom = document.getElementById('btnExecom');
const adminForm = document.getElementById('adminForm');
const execomForm = document.getElementById('execomForm');

// when admin button clicked
btnAdmin.addEventListener('click', () => {
  btnAdmin.classList.add('active');
  btnExecom.classList.remove('active');
  adminForm.classList.remove('hidden');
  execomForm.classList.add('hidden');
});

// when execom button clicked
btnExecom.addEventListener('click', () => {
  btnExecom.classList.add('active');
  btnAdmin.classList.remove('active');
  execomForm.classList.remove('hidden');
  adminForm.classList.add('hidden');
});

// admin login function
function adminLogin() {
  const user = document.getElementById('adminUser').value;
  const pass = document.getElementById('adminPass').value;
  const error = document.getElementById('adminError');

  // simple check — you can change this username and password
  if (user === 'admin' && pass === 'ieee2026') {
    localStorage.setItem('role', 'admin');
    localStorage.setItem('name', 'Admin');
    alert('Welcome Admin! Login successful!');
    window.location.href = 'index.html';
  } else {
    error.textContent = 'Wrong username or password. Try again!';
  }
}

// execom login function
function execomLogin() {
  const user = document.getElementById('execomUser').value;
  const pass = document.getElementById('execomPass').value;
  const role = document.getElementById('execomRole').value;
  const error = document.getElementById('execomError');

  // check all fields are filled
  if (!user || !pass || !role) {
    error.textContent = 'Please fill in all fields!';
    return;
  }

  // simple password check — change this to real password
  if (pass === 'ieee2026') {
    localStorage.setItem('role', role);
    localStorage.setItem('name', user);
    alert('Welcome ' + user + '! Logged in as ' + role);
    window.location.href = 'index.html';
  } else {
    error.textContent = 'Wrong password. Try again!';
  }
}