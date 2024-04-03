 // Função para verificar se um elemento está visível na tela
 function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        (rect.top <= windowHeight && rect.bottom >= 0) ||
        (rect.bottom >= 0 && rect.top <= 0)
    );
}

// Função para aplicar a animação de fade in aos elementos visíveis na tela
function fadeInVisibleElements() {
    $('h1, p').each(function() {
        if (isElementVisible(this)) {
            $(this).addClass('visible');
        }
    });
}

// Evento de scroll para chamar a função de animação ao rolar a página
$(window).on('scroll', function() {
    fadeInVisibleElements();
});

// Chama a função ao carregar a página para animar elementos já visíveis inicialmente
$(document).ready(function() {
    fadeInVisibleElements();
});