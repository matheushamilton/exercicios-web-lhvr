document.addEventListener('DOMContentLoaded', () => {

    let bloco = document.getElementById("bloco");
    let campo1 = document.getElementById("campo1");
    let campo2 = document.getElementById("campo2");
    let mensagem = document.getElementById("mensagem");

    bloco.addEventListener('click', () => {
        bloco.textContent = "Clicado!";
        bloco.style.backgroundColor = "lightblue";
        mensagem.textContent = "Você clicou no bloco";
    });

    bloco.addEventListener('dblclick', () => {
        bloco.textContent = "Duplo!";
        bloco.style.backgroundColor = "red";
        mensagem.textContent = "Clique duplo detectado";
    });

    bloco.addEventListener('mouseover', () => {
        bloco.textContent = "Entrou";
        bloco.style.backgroundColor = "gray";
    });

    bloco.addEventListener('mouseout', () => {
        bloco.textContent = "Saiu";
        bloco.style.backgroundColor = "black";
    });

    campo1.addEventListener('focus', () => {
        mensagem.textContent = "Campo 1 com foco";
    });

    campo1.addEventListener('blur', () => {
        mensagem.textContent = "Campo 1 sem foco";
    });

    campo2.addEventListener('keydown', () => {
        mensagem.textContent = "Tecla pressionada";
    });

    campo2.addEventListener('keyup', () => {
        mensagem.textContent = "Tecla liberada";
    });

    campo2.addEventListener('input', () => {
        mensagem.textContent = "Digitando: " + campo2.value;
    });

});