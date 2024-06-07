document.addEventListener('DOMContentLoaded', () => {
    const educationResources = document.getElementById('education-resources');
    const loadMoreResourcesButton = document.getElementById('load-more-resources');
    
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modal-title");
    const modalAuthorDate = document.getElementById("modal-author-date");
    const modalContent = document.getElementById("modal-content");
    const modalImage = document.getElementById("modal-image");

    let currentPage = 1;
    const resourcesPerPage = 3;

    const resources = [
        {
            title: "Conferência sobre Conservação Marinha",
            author: "Organizado por ONG Marinha",
            date: "25/06/2024",
            content: "Participe da nossa conferência anual para discutir as novas estratégias de conservação marinha.",
            fullContent: "A conferência reunirá especialistas de todo o mundo para discutir as melhores práticas em conservação marinha. Serão apresentadas novas pesquisas, casos de sucesso e estratégias inovadoras para proteger nossos oceanos.",
            imageUrl: "../img/conferencia.webp"
        },
        {
            title: "Dia de Limpeza da Praia",
            author: "Projeto Limpeza Costeira",
            date: "01/07/2024",
            content: "Junte-se a nós para um dia de limpeza na praia e ajude a manter nossas costas limpas.",
            fullContent: "O evento de limpeza de praia visa remover resíduos sólidos das áreas costeiras. Todos os voluntários receberão equipamentos e orientação para realizar a limpeza de maneira eficiente e segura.",
            imageUrl: "../img/limpeza-praia.jpg"
        },
        {
            title: "Workshop de Fotografia Subaquática",
            author: "FotoMar",
            date: "10/07/2024",
            content: "Aprenda técnicas de fotografia subaquática com profissionais experientes.",
            fullContent: "O workshop oferecerá aulas práticas e teóricas sobre fotografia subaquática. Os participantes aprenderão sobre o uso de equipamentos, técnicas de iluminação e composição, além de práticas de conservação para fotógrafos.",
            imageUrl: "../img/fotografia.jpg"
        },
        // Adicione mais eventos conforme necessário
    ];

    function loadResources(page) {
        const start = (page - 1) * resourcesPerPage;
        const end = start + resourcesPerPage;
        const resourcesToLoad = resources.slice(start, end);

        resourcesToLoad.forEach(resource => {
            const resourceElement = document.createElement('article');
            resourceElement.classList.add('resource');
            resourceElement.innerHTML = `
                <h3>${resource.title}</h3>
                <p>Autor: <strong>${resource.author}</strong> em ${resource.date}</p>
                <p>${resource.content}</p>
                <a href="#" class="learn-more" data-title="${resource.title}" data-author="${resource.author}" data-date="${resource.date}" data-fullcontent="${resource.fullContent}" data-image="${resource.imageUrl}">Saiba mais</a>
            `;
            educationResources.appendChild(resourceElement);
        });

        if (end >= resources.length) {
            loadMoreResourcesButton.style.display = 'none';
        }

        document.querySelectorAll('.learn-more').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(e.target.dataset.title, e.target.dataset.author, e.target.dataset.date, e.target.dataset.fullcontent, e.target.dataset.image);
            });
        });
    }

    function openModal(title, author, date, content, imageUrl) {
        modalTitle.textContent = title;
        modalAuthorDate.textContent = `Autor: ${author} em ${date}`;
        modalContent.textContent = content;
        modalImage.src = imageUrl;
        modalImage.width = 100; // Define a largura da imagem para 50 pixels
        modalImage.height = 100; // Define a altura da imagem para 50 pixels
        modal.style.display = "block";
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    loadMoreResourcesButton.addEventListener('click', () => {
        currentPage++;
        loadResources(currentPage);
    });

    // Load the first page initially
    loadResources(currentPage);
});
