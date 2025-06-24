// Botões no Header
const navLinks = document.querySelectorAll('.li_nav a');
  
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('ativo'));

    this.classList.add('ativo');
  });
});

// Botão do Formulário
function formulario(){
  alert("Página em construção!")
}

// Botão do Tema
function theme() {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const body = document.body;

  const toggleLightMode = () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeToggleButton.textContent = '🌙';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggleButton.textContent = '☀️';
    }
  };

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggleButton.textContent = '🌙';
  } else {
    themeToggleButton.textContent = '☀️';
  }

  themeToggleButton.addEventListener('click', toggleLightMode);
}

document.addEventListener('DOMContentLoaded', theme);


const dicas = [
  "Nunca use a mesma senha em diferentes serviços.",
  "Ative a verificação em duas etapas para proteger suas contas.",
  "Desconfie de links encurtados ou de origem desconhecida.",
  "Prefira redes Wi-Fi seguras e evite públicas para transações.",
  "Mantenha seu antivírus sempre atualizado.",
  "Não compartilhe informações pessoais em redes sociais abertas.",
  "Use senhas com mais de 12 caracteres.",
  "Cuidado com promoções milagrosas na internet."
];

function mostrarDica() {
  const dica = dicas[Math.floor(Math.random() * dicas.length)];
  document.getElementById("dica-box").innerText = dica;
}
