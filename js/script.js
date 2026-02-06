document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO FORMULÁRIO WHATSAPP (NOVO) ---
    const sendBtn = document.getElementById('sendWhatsapp');

    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const name = document.getElementById('clientName').value;
            const message = document.getElementById('clientMessage').value;

            // Validação simples
            if (name === "" || message === "") {
                alert("Por favor, preencha seu nome e a ideia do projeto.");
                return;
            }

            // Seu número aqui (apenas números, com código do país 55 e DDD)
            const phoneNumber = "5521999999999";

            // Formata a mensagem para URL
            const text = `Olá! Meu nome é ${name}. Gostaria de falar sobre: ${message}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

            // Abre o WhatsApp
            window.open(url, '_blank');
        });
    }


    // --- SCROLL ANIMATION (REVEAL) ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal();

    // --- LÓGICA DO MENU MOBILE ---
    const mobileBtn = document.querySelector('.mobile-menu-icon');
    const closeMenuBtn = document.querySelector('.close-menu-icon');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // --- EFEITO TYPEWRITER ---
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
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (textElement) typeEffect();

    // --- LÓGICA DO MODAL NAVEGADOR ---
    const modal = document.getElementById('browserModal');
    const closeBtn = document.getElementById('closeBrowser');
    const iframe = document.getElementById('projectFrame');
    const urlDisplay = document.getElementById('browserUrl');
    const viewButtons = document.querySelectorAll('.view-project');
    const toggleBtn = document.getElementById('interactionToggle');
    const clickBlocker = document.getElementById('clickBlocker');
    let isInteractive = false;

    function updateInteraction() {
        if (isInteractive) {
            toggleBtn.classList.add('toggle-active');
            clickBlocker.style.display = 'none';
        } else {
            toggleBtn.classList.remove('toggle-active');
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

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            iframe.src = '';
            document.body.style.overflow = 'auto';
            isInteractive = false;
            updateInteraction();
        });
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isInteractive = !isInteractive;
            updateInteraction();
        });
    }

    // --- FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });
});