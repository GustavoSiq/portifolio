// Aplica o tema salvo no carregamento da página
window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema');
    const body = document.body;
    const botao = document.querySelector('.botao-tema');
  
    if (temaSalvo === 'dark') {
      body.classList.add('dark');
      botao.textContent = '☀️ Modo Claro';
    } else {
      botao.textContent = '🌙 Modo Escuro';
    }
  });
  
  function alternarTema() {
    const body = document.body;
    const botao = document.querySelector('.botao-tema');
  
    body.classList.toggle('dark');
  
    if (body.classList.contains('dark')) {
      botao.textContent = '☀️ Modo Claro';
      localStorage.setItem('tema', 'dark');
    } else {
      botao.textContent = '🌙 Modo Escuro';
      localStorage.setItem('tema', 'light');
  }
}
  
function filtrarProjetos(categoria) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
    const tipo = card.getAttribute('data-categoria');
    if (categoria === 'todos' || tipo === categoria) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}