const imagemPainel = document.querySelectorAll(".imagem-painel");
let bntAvancar = document.querySelector("#bnt-avançar");
let bntVoltar = document.querySelector("#bnt-voltar");

let imgAtual = 0;

bntAvancar.addEventListener('click', function() {
    imgAtual += 1;
    
    if(imgAtual > 2){
        imgAtual = 0;
    }

    imagemPainel.forEach(img => img.classList.remove("mostrar"));
    imagemPainel[imgAtual].classList.add("mostrar");
});


bntVoltar.addEventListener('click', function() {
    imgAtual -= 1;
    
    if(imgAtual < 0){
        imgAtual = 2;
    }

    imagemPainel.forEach(img => img.classList.remove("mostrar"));
    imagemPainel[imgAtual].classList.add("mostrar");
});

