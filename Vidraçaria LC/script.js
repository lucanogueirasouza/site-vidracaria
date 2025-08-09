// Menu responsivo
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Botão voltar ao topo
const btnTop = document.createElement('button');
btnTop.textContent = '↑';
btnTop.classList.add('back-to-top');
document.body.appendChild(btnTop);

window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação ao rolar
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// Botão orçamento com serviço automático
document.querySelectorAll('.orcamento').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const servico = btn.closest('.service-card').querySelector('h3').textContent;
    const msg = encodeURIComponent(`Olá, tenho interesse no serviço: ${servico}`);
    window.open(`https://wa.me/5511998282873?text=${msg}`, '_blank');
  });
});

// Detecta quando as colunas entram na tela
const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        }
    });
}, {
    threshold: 0.1
});

elementos.forEach(el => observador.observe(el));

// Fechar menu ao clicar em link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});




