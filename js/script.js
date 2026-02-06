document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU MOBILE (NOVO) ---
    const mobileBtn = document.querySelector('.mobile-menu-icon');
    const closeMenuBtn = document.querySelector('.close-menu-icon');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    // Abrir Menu
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Trava o scroll da página
    });

    // Fechar Menu (Botão X)
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto'; // Destrava scroll
    });

    // Fechar Menu (Ao clicar em um link)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });


    // --- EFEITO TYPEWRITER (NOVO) ---
    const textElement = document.querySelector('.typing-text');
    const words = ["Experiências Digitais.", "Soluções Web.", "o Futuro.", "Resultados."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, charIndex++);
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Tempo de pausa com a palavra completa
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Inicia o efeito se o elemento existir
    if (textElement) typeEffect();


    // --- LÓGICA DO MODAL NAVEGADOR ---
    const modal = document.getElementById('browserModal');
    const closeBtn = document.getElementById('closeBrowser');
    const iframe = document.getElementById('projectFrame');
    const urlDisplay = document.getElementById('browserUrl');
    const viewButtons = document.querySelectorAll('.view-project');

    // Controle de Interatividade
    const toggleBtn = document.getElementById('interactionToggle');
    const clickBlocker = document.getElementById('clickBlocker');
    let isInteractive = false;

    function updateInteraction() {
        const toggleDiv = toggleBtn;
        if (isInteractive) {
            toggleDiv.classList.add('toggle-active');
            clickBlocker.style.display = 'none';
        } else {
            toggleDiv.classList.remove('toggle-active');
            clickBlocker.style.display = 'block';
        }
    }

    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            if (url) {
                iframe.src = url;
                urlDisplay.textContent = url;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        iframe.src = '';
        document.body.style.overflow = 'auto';
        isInteractive = false;
        updateInteraction();
    });

    toggleBtn.addEventListener('click', () => {
        isInteractive = !isInteractive;
        updateInteraction();
    });

    // --- LÓGICA DO FAQ ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });
});