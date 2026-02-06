document.addEventListener('DOMContentLoaded', () => {

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

    // Função para atualizar estado de interatividade
    function updateInteraction() {
        const toggleDiv = toggleBtn;
        if (isInteractive) {
            toggleDiv.classList.add('toggle-active');
            clickBlocker.style.display = 'none'; // Libera cliques no iframe
        } else {
            toggleDiv.classList.remove('toggle-active');
            clickBlocker.style.display = 'block'; // Bloqueia cliques
        }
    }

    // Abrir Modal
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            if (url) {
                iframe.src = url;
                urlDisplay.textContent = url;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Impede scroll do site principal
            }
        });
    });

    // Fechar Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        iframe.src = ''; // Limpa iframe para parar execução de fundo
        document.body.style.overflow = 'auto';

        // Reseta estado para "Apenas Ver" ao fechar
        isInteractive = false;
        updateInteraction();
    });

    // Toggle Interatividade ao clicar no switch
    toggleBtn.addEventListener('click', () => {
        isInteractive = !isInteractive;
        updateInteraction();
    });

    // --- LÓGICA DO FAQ (ACCORDION) ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });
});