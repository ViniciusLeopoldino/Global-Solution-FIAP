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
            title: "Manual de Conservação Marinha",
            author: "Dr. Carlos Souza",
            date: "05/06/2024",
            content: "Um guia completo sobre práticas de conservação marinha e como implementá-las.",
            fullContent: "Este manual aborda em detalhes as estratégias de conservação marinha que podem ser aplicadas tanto por indivíduos quanto por organizações. Inclui estudos de caso, técnicas de monitoramento e dicas de sustentabilidade.",
            imageUrl: "../img/conservacao-manual.jpg"
        },
        {
            title: "Curso de Biologia Marinha",
            author: "Prof. Ana Clara",
            date: "10/06/2024",
            content: "Curso online gratuito sobre os princípios da biologia marinha e ecossistemas oceânicos.",
            fullContent: "Este curso oferece uma introdução abrangente à biologia marinha, cobrindo tópicos como ecossistemas marinhos, a vida dos organismos marinhos, e os impactos das atividades humanas nos oceanos. Inclui vídeos, artigos e quizzes interativos.",
            imageUrl: "../img/bio-marinha.jpg"
        },
        {
            title: "Documentário: O Oceano Vivo",
            author: "Nature Films",
            date: "15/06/2024",
            content: "Um documentário que explora a diversidade e a importância dos ecossistemas marinhos.",
            fullContent: "O documentário 'O Oceano Vivo' leva os espectadores em uma viagem através dos oceanos do mundo, destacando a biodiversidade incrível e as interações complexas que sustentam a vida marinha. Disponível para streaming gratuito.",
            imageUrl: "../img/oceano-vivo.jpg"
        },
        // Adicione mais recursos conforme necessário
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
