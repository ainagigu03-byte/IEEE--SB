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
async function adminLogin() {
  const email = document.getElementById('adminUser').value;
  const password = document.getElementById('adminPass').value;
  const error = document.getElementById('adminError');

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await redirectBasedOnRole(user);

  } catch (err) {
    error.textContent = "Invalid email or password";
  }
}
// execom login function
async function execomLogin() {
  const email = document.getElementById('execomUser').value;
  const pass = document.getElementById('execomPass').value;
  const role = document.getElementById('execomRole').value;
  const error = document.getElementById('execomError');

  if (!email || !pass || !role) {
    error.textContent = 'Please fill in all fields!';
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      pass
    );

    const user = userCredential.user;

    await redirectBasedOnRole(user);

  } catch (err) {
    error.textContent = 'Wrong email or password. Try again!';
  }
}

async function redirectBasedOnRole(user) {
  if (!user) return;

  const db = getFirestore();

  const docRef = doc(db, "users", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    alert("No role assigned");
    return;
  }

  const role = snap.data().role;

  localStorage.setItem("role", role);
  localStorage.setItem("email", user.email);

  if (
    role === "admin" ||
    role === "chairperson" ||
    role === "vicechairperson" ||
    role === "secretary" ||
    role === "jointsecretary" ||
    role === "treasurer" ||
    role === "webmaster" ||
    role === "coordinator"
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Access denied");
  }
}