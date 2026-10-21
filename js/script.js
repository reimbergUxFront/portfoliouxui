/* ---------------------------------------------------
   Portfólio — Reimberg
   HTML + CSS + JS puro, sem dependências

   Importante: o efeito de "aparecer suavemente" ao rolar a página
   só existe se ESTE bloco conseguir rodar do início ao fim. A classe
   que esconde o elemento (.reveal-hidden) só é aplicada aqui dentro,
   e a mesma execução é responsável por removê-la — então não existe
   cenário em que o conteúdo fica escondido pra sempre.
--------------------------------------------------- */

(function () {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  // Só esconde se o navegador suportar IntersectionObserver — senão,
  // nem tenta animar, e o conteúdo simplesmente fica visível (padrão).
  if (!("IntersectionObserver" in window)) return;

  revealEls.forEach(el => el.classList.add("reveal-hidden"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.remove("reveal-hidden"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));

  // Rede de segurança: se por algum motivo o observer não disparar
  // pro conteúdo do topo em 1.2s, remove o estado escondido de tudo.
  setTimeout(() => {
    document.querySelectorAll(".hero .reveal-hidden")
      .forEach(el => el.classList.remove("reveal-hidden"));
  }, 1200);
})();

document.addEventListener("DOMContentLoaded", () => {

  /* ---- Nav background on scroll ---- */
  const nav = document.getElementById("nav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  };
  document.addEventListener("scroll", onScroll);
  onScroll();

  /* ---- Mobile menu ---- */
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    burger.classList.toggle("active", isOpen);
  });
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      burger.classList.remove("active");
    });
  });

});
