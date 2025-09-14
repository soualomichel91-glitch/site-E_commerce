// Sélectionner l'image menu et la liste
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

// Ajouter un clic
menuIcon.addEventListener('click', () => {
  navUl.classList.toggle('active'); 
});

// Cacher le menu si on clique en dehors
document.addEventListener('click', (e) => {
  // Si le clic n'est pas sur le menu ou l'icône
  if (!navUl.contains(e.target) && !menuIcon.contains(e.target)) {
    navUl.classList.remove('active'); // masquer le menu
  }
});

// / Replier le menu quand la souris quitte la zone du menu

navUl.addEventListener('mouseleave', () => {
  navUl.classList.remove('active');
});