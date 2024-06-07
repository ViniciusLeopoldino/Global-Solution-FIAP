
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $(this).toggleClass('menu-open');
        $('nav ul').slideToggle(); 
    });

    // Função para verificar e exibir/ocultar o menu com base na largura da janela
    function toggleMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navUL = document.querySelector('nav ul');

        // Verifica se a largura da janela é menor que 768 pixels (dispositivo móvel)
        if (window.innerWidth < 768) {
            menuToggle.style.display = 'block';
            navUL.style.display = 'none'; 
        } else {
            menuToggle.style.display = 'none'; 
            navUL.style.display = 'block'; 
        }
    }

    // Chama a função toggleMenu quando a página é carregada
    toggleMenu();

    // Chama a função toggleMenu quando a largura da janela é alterada
    window.onresize = function() {
        toggleMenu();
    };
});



// EDITAR PERFIL
$(document).ready(function() {
    $("#ibutton").click(function() {
        // Habilita a edição dos campos de texto
        $("#nome").attr("contenteditable", "true");
        $("#bio").attr("contenteditable", "true");
        // Troca o texto do botão de "Editar" para "Salvar"
        $(this).text("Salvar");
        // Adiciona a função para salvar as alterações
        $(this).off("click").click(function() {
            // Desabilita a edição dos campos de texto
            $("#nome").removeAttr("contenteditable");
            $("#bio").removeAttr("contenteditable");
            // Troca o texto do botão de "Salvar" para "Editar"
            $(this).text("Editar");
        });
    });
});
