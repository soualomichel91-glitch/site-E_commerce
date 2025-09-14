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
    } else {
      btnSignup.classList.add('active');
      btnLogin.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    }
  }

  // Initialisation
  activate('login');

  btnLogin.addEventListener('click', () => activate('login'));
  btnSignup.addEventListener('click', () => activate('signup'));
});


// filtre

const filterSelect = document.getElementById('filter');
const productsContainer = document.querySelector('.products');
const products = Array.from(productsContainer.children);

filterSelect.addEventListener('change', () => {
  const value = filterSelect.value;

  let sortedProducts = [...products];

  switch (value) {
    case 'price':
      sortedProducts.sort((a, b) => a.dataset.price - b.dataset.price);
      break;
    case 'sales':
      sortedProducts.sort((a, b) => b.dataset.sales - a.dataset.sales);
      break;
    case 'popularity':
      sortedProducts.sort((a, b) => b.dataset.popularity - a.dataset.popularity);
      break;
    default:
      sortedProducts = products; // ordre par défaut
  }

  productsContainer.innerHTML = '';
  sortedProducts.forEach(p => productsContainer.appendChild(p));
});


// Fin de l'authenti

// debut pagination

const productsPerPage = 8;
const productsContainer = document.querySelector('.row');
const products = Array.from(productsContainer.children);
const paginationContainer = document.querySelector('.pagination');

let currentPage = 1;
const totalPages = Math.ceil(products.length / productsPerPage);

function showPage(page) {
  currentPage = page;
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;

  products.forEach((product, index) => {
    product.style.display = index >= start && index < end ? 'block' : 'none';
  });

  // Mettre à jour les boutons
  const pages = paginationContainer.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  pages[page - 1].classList.add('active');
}

// Initialisation
showPage(1);

// Ajouter les événements aux boutons de page
paginationContainer.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('page')) {
    showPage(Number(e.target.textContent));
  } else if (e.target.classList.contains('prev')) {
    if (currentPage > 1) showPage(currentPage - 1);
  } else if (e.target.classList.contains('next')) {
    if (currentPage < totalPages) showPage(currentPage + 1);
  }
});


// fin de pagination


// Fin du script