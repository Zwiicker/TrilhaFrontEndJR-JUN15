document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');

 // Criar o observador
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Adicionar a classe para iniciar a animação
      entry.target.classList.add('init-hidden-off');
      // Parar de observar o elemento para que a animação ocorra apenas uma vez
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // Inicia a animação quando 10% do elemento estiver visível
});

// Selecionar todos os elementos com a classe 'init-hidden' e observar
document.querySelectorAll('.init-hidden').forEach(element => {
observer.observe(element);
  });
});