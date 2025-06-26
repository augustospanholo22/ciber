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
  const themeButton = document.getElementById('theme-button');
  const body = document.body;

  const toggleLightMode = () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeButton.textContent = '🌙';
    } else {
      localStorage.setItem('theme', 'dark');
      themeButton.textContent = '☀️';
    }
  };

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeButton.textContent = '🌙';
  } else {
    themeButton.textContent = '☀️';
  }

  themeButton.addEventListener('click', toggleLightMode);
}

// Botão de Dicas de Segurança
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

// Botão de Acessibilidade
document.addEventListener('DOMContentLoaded', function() {
    
    theme();

    const fontButton = document.getElementById('font-button');
    
    fontButton.addEventListener('click', function() {
        document.body.classList.toggle('font-large');
    });
});