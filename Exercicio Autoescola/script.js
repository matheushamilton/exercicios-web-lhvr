const form = document.getElementById("id_formularioAutoescola");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let idade = document.getElementById("id_idade").value.trim();

    idade = parseInt(idade);

    const resultado = document.getElementById("id_resultado");

    if (!Number.isInteger(idade) || idade <= 0 || idade >= 130) {
        resultado.innerHTML = "Por favor, utilize dados válidos.";
        resultado.style.color = "red";
        return;
    }

    let classificacao;
    let renovacao =  null;

    if (idade < 18 || idade >= 100){
        classificacao = "Inapto para inicio"

    } else if (idade >= 18 && idade <= 49){
        classificacao = "Apto para inicio"
        renovacao = 10

    } else if (idade >= 50 && idade <= 69 ){
        classificacao = "Apto para inicio"
        renovacao = 5

    } else if (idade >= 70 && idade < 100) {
        classificacao = "Apto para inicio"
        renovacao = 3

    }

    if (classificacao === "Inapto para inicio"){
        resultado.innerHTML = `Você está: ${classificacao}.`;
    } else {
        resultado.innerHTML = `Você está: ${classificacao}. <br> 
        Renovação a cada ${renovacao} anos.`;
    }


});