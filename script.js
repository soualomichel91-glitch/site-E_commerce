const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

// Ouvrir / fermer le menu au clic
menuIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // éviter que le clic se propage au document
  navUl.classList.toggle('active');
});

// Fermer le menu si on clique ailleurs
document.addEventListener('click', (e) => {
  if (!navUl.contains(e.target) && !menuIcon.contains(e.target)) {
    navUl.classList.remove('active');
  }
});

// Fermer le menu quand la souris quitte la zone du menu (optionnel)
navUl.addEventListener('mouseleave', () => {
  navUl.classList.remove('active');
});

// page d'authentification

document.addEventListener('DOMContentLoaded', function () {
  const btnLogin = document.getElementById('btn-login');
  const btnSignup = document.getElementById('btn-signup');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  function activate(tab) {
    if (tab === 'login') {
      btnLogin.classList.add('active');
      btnSignup.classList.remove('active');
      loginForm.classList.add('active');
      signupForm.classList.remove('active');

      btnLogin.setAttribute('aria-selected', 'true');
      btnSignup.setAttribute('aria-selected', 'false');
    } else {
      btnSignup.classList.add('active');
      btnLogin.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');

      btnSignup.setAttribute('aria-selected', 'true');
      btnLogin.setAttribute('aria-selected', 'false');
    }
  }

  btnLogin.addEventListener('click', () => activate('login'));
  btnSignup.addEventListener('click', () => activate('signup'));

  // Empêcher le submit réel pendant les tests (tu peux adapter)
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // place ici ta logique de connexion (AJAX / fetch)
    alert('Connexion — formulaire soumis (simulation)');
  });

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // place ici ta logique d'inscription (AJAX / fetch)
    alert("Inscription — formulaire soumis (simulation)");
  });
});




// Fin de l'authenti


// Fin du script