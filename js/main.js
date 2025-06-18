const navLinks = document.querySelectorAll('.li_nav a');
  
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('ativo'));

    this.classList.add('ativo');
  });
});