document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    alert(`Profile saved!\nName: ${name}\nBio: ${bio}`);
});

document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    alert(`Activity published!\nTitle: ${title}\nDescription: ${description}\nLocation: ${location}`);
});

function initMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = 'Map functionality to be implemented';
}

window.onload = function() {
    initMap();
};

$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass('menu-open');
        $('nav ul').slideToggle(); // ou $('nav ul').toggle();
    });

    // Função para verificar e exibir/ocultar o menu com base na largura da janela
    function toggleMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navUL = document.querySelector('nav ul');

        // Verifica se a largura da janela é menor que 768 pixels (dispositivo móvel)
        if (window.innerWidth < 768) {
            menuToggle.style.display = 'block'; // Exibe o menu hamburguer
            navUL.style.display = 'none'; // Oculta o menu principal
        } else {
            menuToggle.style.display = 'none'; // Oculta o menu hamburguer
            navUL.style.display = 'block'; // Exibe o menu principal
        }
    }

    // Chama a função toggleMenu quando a página é carregada
    toggleMenu();

    // Chama a função toggleMenu quando a largura da janela é alterada
    window.onresize = function() {
        toggleMenu();
    };
});
