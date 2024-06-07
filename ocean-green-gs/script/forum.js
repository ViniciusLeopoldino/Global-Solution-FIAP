document.addEventListener('DOMContentLoaded', () => {
    const forumPosts = document.getElementById('forum-posts');
    const loadMoreButton = document.getElementById('load-more');
    
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modal-title");
    const modalAuthorDate = document.getElementById("modal-author-date");
    const modalContent = document.getElementById("modal-content");
    const modalImage = document.getElementById("modal-image");

    let currentPage = 1;
    const postsPerPage = 3;

    const posts = [
        {
            title: "Impacto da Poluição Marinha",
            author: "Maria Silva",
            date: "05/06/2024",
            content: "Vamos discutir os principais impactos da poluição marinha em nossas praias e oceanos. Quais são as soluções possíveis?",
            fullContent: "A poluição marinha é um problema crescente. De acordo com estudos recentes, mais de 8 milhões de toneladas de plástico entram nos oceanos a cada ano, prejudicando a vida marinha e contaminando o ecossistema. Para combater isso, é essencial que todos nos envolvamos em práticas sustentáveis e apoiemos iniciativas de limpeza.",
            imageUrl: "../img/poluicao-marinha.jpg"
        },
        {
            title: "Conservação de Corais",
            author: "João Santos",
            date: "10/06/2024",
            content: "Os corais estão desaparecendo rapidamente. Quais medidas podem ser tomadas para proteger esses ecossistemas vitais?",
            fullContent: "Os corais são fundamentais para a biodiversidade marinha, mas estão sob ameaça devido à mudança climática, pesca predatória e poluição. Projetos de restauração de corais e a criação de áreas marinhas protegidas são passos essenciais para a preservação destes habitats.",
            imageUrl: "../img/conservacao-corais.png"
        },
        {
            title: "Iniciativas de Limpeza",
            author: "Ana Costa",
            date: "15/06/2024",
            content: "Compartilhe suas experiências e resultados de iniciativas de limpeza de praias e como elas podem ser organizadas.",
            fullContent: "Organizar iniciativas de limpeza de praias é uma maneira eficaz de combater a poluição marinha. Envolver a comunidade local, fornecer os materiais necessários e promover a conscientização são elementos chave para o sucesso dessas ações.",
            imageUrl: "../img/limpeza-oceanos.webp"
        },
        // Adicione mais posts conforme necessário
    ];

    function loadPosts(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const postsToLoad = posts.slice(start, end);

        postsToLoad.forEach(post => {
            const postElement = document.createElement('article');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>Iniciado por <strong>${post.author}</strong> em ${post.date}</p>
                <p>${post.content}</p>
                <a href="#" class="learn-more" data-title="${post.title}" data-author="${post.author}" data-date="${post.date}" data-fullcontent="${post.fullContent}" data-image="${post.imageUrl}">Saiba mais</a>
            `;
            forumPosts.appendChild(postElement);
        });

        if (end >= posts.length) {
            loadMoreButton.style.display = 'none';
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
        modalAuthorDate.textContent = `Iniciado por ${author} em ${date}`;
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

    loadMoreButton.addEventListener('click', () => {
        currentPage++;
        loadPosts(currentPage);
    });

    // Carrega a primeira página
    loadPosts(currentPage);
});
