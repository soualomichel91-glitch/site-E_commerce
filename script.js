// ====================== MENU BURGER ======================
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  navUl.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navUl.contains(e.target) && !menuIcon.contains(e.target)) {
    navUl.classList.remove('active');
  }
});

navUl.addEventListener('mouseleave', () => {
  navUl.classList.remove('active');
});

// ====================== AUTHENTIFICATION ======================
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

// ====================== FILTRE PRODUITS ======================
const filterSelect = document.getElementById('filter');
const productsContainerFilter = document.querySelector('.products');
const productsFilter = Array.from(productsContainerFilter.children);

filterSelect.addEventListener('change', () => {
  const value = filterSelect.value;

  let sortedProducts = [...productsFilter];

  switch (value) {
    case 'price':
      sortedProducts.sort((a, b) => Number(a.dataset.price) - Number(b.dataset.price));
      break;
    case 'sales':
      sortedProducts.sort((a, b) => Number(b.dataset.sales) - Number(a.dataset.sales));
      break;
    case 'popularity':
      sortedProducts.sort((a, b) => Number(b.dataset.popularity) - Number(a.dataset.popularity));
      break;
    default:
      sortedProducts = productsFilter;
  }

  productsContainerFilter.innerHTML = '';
  sortedProducts.forEach(p => productsContainerFilter.appendChild(p));
});

// ====================== PAGINATION ======================
const productsPerPage = 8;
const productsContainerPagination = document.querySelector('.row');
const productsPagination = Array.from(productsContainerPagination.children);
const paginationContainer = document.querySelector('.pagination');

let currentPage = 1;
const totalPages = Math.ceil(productsPagination.length / productsPerPage);

function showPage(page) {
  currentPage = page;
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;

  productsPagination.forEach((product, index) => {
    product.style.display = index >= start && index < end ? 'block' : 'none';
  });

  const pages = paginationContainer.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  if (pages[page - 1]) pages[page - 1].classList.add('active');
}

// Initialisation
showPage(1);

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
