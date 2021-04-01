let prato;
let bebida;
let sobremesa;

function escolha1(item, check, opcao) {
    prato = opcao;
    const selecionadoBorda = document.querySelector(".menu-prato .borda-verde");
    const selecionadoCheck = document.querySelector(".menu-prato .borda-verde ion-icon");

    if (selecionadoBorda !== null) {
        selecionadoBorda.classList.remove("borda-verde");
    }

    if (selecionadoCheck !== null) {
        selecionadoCheck.classList.add("escondido");
    }

    const escolhaBorda = document.querySelector(item);
    escolhaBorda.classList.add("borda-verde");
    
    const escolhaCheck = document.querySelector(check);
    escolhaCheck.classList.remove("escondido");
}

function escolha2(item, check, opcao) {
    bebida = opcao;
    const selecionadoBorda = document.querySelector(".menu-bebida .borda-verde");
    const selecionadoCheck = document.querySelector(".menu-bebida .borda-verde ion-icon");

    if (selecionadoBorda !== null) {
        selecionadoBorda.classList.remove("borda-verde");
    }

    if (selecionadoCheck !== null) {
        selecionadoCheck.classList.add("escondido");
    }

    const escolhaBorda = document.querySelector(item);
    escolhaBorda.classList.add("borda-verde");
    
    const escolhaCheck = document.querySelector(check);
    escolhaCheck.classList.remove("escondido");
}

function escolha3(item, check, opcao) {
    bebida = opcao;
    const selecionadoBorda = document.querySelector(".menu-sobremesa .borda-verde");
    const selecionadoCheck = document.querySelector(".menu-sobremesa .borda-verde ion-icon");

    if (selecionadoBorda !== null) {
        selecionadoBorda.classList.remove("borda-verde");
    }

    if (selecionadoCheck !== null) {
        selecionadoCheck.classList.add("escondido");
    }

    const escolhaBorda = document.querySelector(item);
    escolhaBorda.classList.add("borda-verde");
    
    const escolhaCheck = document.querySelector(check);
    escolhaCheck.classList.remove("escondido");
}

