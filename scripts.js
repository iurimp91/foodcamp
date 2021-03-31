function escolha () {
    const escolhaBorda = document.querySelector("li");
    escolhaBorda.classList.toggle("check-borda");
    
    const escolhaCheck = document.querySelector("ion-icon");
    escolhaCheck.classList.toggle("escondido");
}