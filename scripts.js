function escolha(item, check, opcao) {
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
