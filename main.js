$(document).ready(function(){

    $("header button").click(function(){
        $("form").slideToggle(100);
    });

    $("#botao-cancelar").click(function(){
        $("form").slideUp(100);
    });

    $("form").on("submit", function(e){
        e.preventDefault();
        const enderecoNovaImagem = $("#imagem-nova").val();
        const novoItem = $("<li style='display:none'></li>");
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href=${enderecoNovaImagem} target="__blank" title="ver imagem em tamanho real">
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo("ul");
        $(novoItem).fadeIn(1000);
        $("#imagem-nova").val("") 
    });
});
