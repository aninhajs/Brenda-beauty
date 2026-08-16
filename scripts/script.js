// ===================================
// AGENDA GLAMOUR - JAVASCRIPT
// ===================================

// Initialize Lucide Icons
lucide.createIcons();

// Registrar ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// ===================================
// HEADER SCROLL EFFECT
// ===================================
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// ===================================
// SERVICE CARDS ANIMATION
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Seleciona todos os cards individualmente dentro da grid
  const serviceCards = document.querySelectorAll(".grid .service-card");

  // 2. Mapeia card por card com um loop
  serviceCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card, // O gatilho agora é O PRÓPRIO CARD
        start: "top 85%", // Dispara quando o topo daquele card específico atingir 85% da tela
        toggleActions: "play none none reverse",
        // markers: true,  Deixe 'true' temporariamente se quiser ver o marcador em cada card
      },
    });
  });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Animate menu items
  if (!mobileMenu.classList.contains("hidden")) {
    gsap.from(".mobile-nav-link", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out",
    });
  }
});

// Close mobile menu when clicking on links
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===================================
// HERO SECTION ANIMATIONS (GSAP + SPLITTEXT)
// ===================================
window.addEventListener("DOMContentLoaded", () => {
  // Split text animation for hero title
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");

  if (heroTitle) {
    // Using SplitType library for text splitting
    const splitTitle = new SplitType(heroTitle, { types: "chars, words" });

    gsap.from(splitTitle.chars, {
      autoAlpha: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.03,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.3,
    });
  }

  // Subtitle animation - fade in from bottom
  if (heroSubtitle) {
    gsap.from(heroSubtitle, {
      autoAlpha: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.2,
    });
  }

  // CTAs animation
  gsap.from(".hero-ctas", {
    autoAlpha: 0,
    y: 40,
    scale: 0.9,
    duration: 1,
    ease: "back.out(1.7)",
    delay: 1.8,
  });
});

// ===================================
// SERVICE CARDS - Sem animações (apenas CSS)
// ===================================

// ===================================
// SOBRE SECTION ANIMATIONS
// ===================================
// Animação do título
gsap.from(".sobre-title", {
  autoAlpha: 0,
  x: -100,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".sobre-title",
    start: "top center+=100",
    toggleActions: "play none none reverse",
  },
});

// Animação dos parágrafos
gsap.from(".sobre-content p", {
  autoAlpha: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sobre-content",
    start: "top center+=150",
    toggleActions: "play none none reverse",
  },
});

// Animação das estatísticas
gsap.utils.toArray(".stat-item").forEach((stat, index) => {
  gsap.from(stat, {
    autoAlpha: 0,
    scale: 0.5,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: index * 0.15,
    scrollTrigger: {
      trigger: ".stats-grid",
      start: "top center+=100",
      toggleActions: "play none none reverse",
    },
  });
});

// Animação do botão CTA
gsap.from(".sobre-content .cta-primary", {
  autoAlpha: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sobre-content .cta-primary",
    start: "top center+=150",
    toggleActions: "play none none reverse",
  },
});

// ===================================
// SECTION HEADER SPLIT TEXT ANIMATION
// ===================================
document.addEventListener("DOMContentLoaded", (event) => {
  // Inicializa ícones Lucide se disponíveis
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Registra o plugin ScrollTrigger no GSAP
  gsap.registerPlugin(ScrollTrigger);

  // 1. Divide o texto em letras usando a biblioteca SplitType
  const meuTexto = new SplitType(".split-text", { types: "chars" });

  // Torna o texto visível novamente após a divisão
  const splitTextEl = document.querySelector(".split-text");
  if (splitTextEl) {
    splitTextEl.style.visibility = "visible";
  }

  // 2. Cria a animação com GSAP e ScrollTrigger
  gsap.from(meuTexto.chars, {
    scrollTrigger: {
      trigger: ".section-header", // O elemento que ativa o gatilho
      start: "top 80%", // Quando o topo da seção atingir 80% da tela
      end: "top 50%", // Fim da ativação (opcional)
      toggleActions: "play none none none", // O que acontece: reproduzir ao entrar
      // markers: true            // Descomente esta linha se quiser ver a marcação do scroll na tela
    },
    opacity: 0, // Começa invisível
    y: 50, // Começa 50px abaixo
    rotateX: -90, // Efeito opcional de rotação 3D
    stagger: 0.02, // Tempo de atraso entre cada letra (efeito cascata)
    duration: 0.8, // Duração da animação de cada letra
    ease: "power2.out", // Curva de velocidade suave
  });
});
// ===================================
// FLOATING IMAGES ANIMATION
// ===================================
const floatingImages = document.querySelectorAll(".floating-img");

if (floatingImages.length > 0) {
  // Animação de entrada — aparece ao rolar, mas NÃO reverte ao voltar
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".floating-images-container",
      start: "top bottom-=80",
      toggleActions: "play none none none", // nunca reverte
    },
  });

  tl.from(".floating-img-1", {
    autoAlpha: 0,
    x: -80,
    duration: 0.7,
    ease: "power3.out",
  })
    .from(
      ".floating-img-2",
      {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.7,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    )
    .from(
      ".floating-img-3",
      {
        autoAlpha: 0,
        x: 80,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5",
    );

  // Flutuação contínua — roda em TODOS os dispositivos logo após entrada
  tl.call(() => {
    gsap.to(".floating-img-1", {
      y: -18,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      overwrite: "auto",
    });

    gsap.to(".floating-img-2", {
      y: -22,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.4,
      overwrite: "auto",
    });

    gsap.to(".floating-img-3", {
      y: -18,
      duration: 2.7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.8,
      overwrite: "auto",
    });
  });
}

// ===================================
// FOOTER ANIMATIONS
// ===================================
gsap.utils.toArray(".footer-section .grid > div").forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: item,
      start: "top bottom-=50",
      toggleActions: "play none none none",
    },
    delay: index * 0.1,
  });
});

// Social links animation
gsap.from(".social-link", {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".social-links-container",
    start: "top bottom-=50",
    toggleActions: "play none none none",
  },
});

// ===================================
// WHATSAPP FLOAT BUTTON
// ===================================
const whatsappFloat = document.querySelector(".whatsapp-float");

// Show/hide on scroll
let lastScrollPosition = 0;
window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > 300) {
    gsap.to(whatsappFloat, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  } else {
    gsap.to(whatsappFloat, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.in",
    });
  }

  lastScrollPosition = currentScrollPosition;
});

// Initial state
gsap.set(whatsappFloat, {
  opacity: 0,
  scale: 0.5,
});

// ===================================
// PARALLAX EFFECT FOR SECTIONS
// ===================================
gsap.utils.toArray(".servicos-section, .sobre-section").forEach((section) => {
  const img = section.querySelector("img");
  if (img) {
    gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});

// ===================================
// CURSOR EFFECT (OPCIONAL - DESKTOP ONLY)
// ===================================
if (window.innerWidth > 768) {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(199, 162, 132, 0.5);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.display = "block";
    gsap.to(cursor, {
      x: e.clientX - 10,
      y: e.clientY - 10,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Hover effect on interactive elements
  document.querySelectorAll("a, button, .service-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy loading images
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// ===================================
// REFRESH SCROLLTRIGGER ON RESIZE
// ===================================
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
  lucide.createIcons(); // Refresh icons
});

// ===================================
// PAGE LOAD ANIMATION
// ===================================
window.addEventListener("load", () => {
  gsap.to("body", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });

  // Refresh icons after page load
  setTimeout(() => {
    lucide.createIcons();
  }, 100);
});

// Set initial body opacity
gsap.set("body", { opacity: 0 });

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log(
  "%c✨ Agenda Glamour - Site desenvolvido com ❤️",
  "color: #ec4899; font-size: 16px; font-weight: bold;",
);
console.log(
  "%c🚀 Animações: GSAP + ScrollTrigger",
  "color: #a855f7; font-size: 14px;",
);
console.log("%c💅 Design: Tailwind CSS", "color: #06b6d4; font-size: 14px;");

// Animação da seção de depoimentos
function setupTestimonialsAnimations() {
  ScrollTrigger.create({
    trigger: ".testimonials",
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.from(".testimonials .section-heading", {
        autoAlpha: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".testimonials-carousel", {
        autoAlpha: 0,
        y: 40,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });
    },
  });
}

// Carrossel automático de depoimentos
function setupTestimonialsCarousel() {
  const testimonialsTrack = document.querySelector(".testimonials-track");
  if (!testimonialsTrack) return;

  const testimonialCards = gsap.utils.toArray(".testimonial-card");
  if (!testimonialCards.length) return;

  const cardWidth = testimonialCards[0].offsetWidth + 32;
  const totalWidth = cardWidth * testimonialCards.length;

  // Duplicar cards para loop infinito
  testimonialCards.forEach((card) => {
    const clone = card.cloneNode(true);
    testimonialsTrack.appendChild(clone);
  });

  // Animação infinita da direita para esquerda
  const tween = gsap.to(testimonialsTrack, {
    x: -totalWidth,
    duration: 30,
    ease: "none",
    repeat: -1,
  });

  // Pausar ao hover (desktop)
  if (window.matchMedia("(min-width: 769px)").matches) {
    testimonialsTrack.addEventListener("mouseenter", () => {
      gsap.to(tween, { timeScale: 0, duration: 0.3 });
    });

    testimonialsTrack.addEventListener("mouseleave", () => {
      gsap.to(tween, { timeScale: 1, duration: 0.3 });
    });
  }
}

// Executar inicialização dos depoimentos ao carregar o script
setupTestimonialsAnimations();
setupTestimonialsCarousel();
