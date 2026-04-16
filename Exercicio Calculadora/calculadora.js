const form = document.getElementById("id_formulario");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const nome = document.getElementById("id_nome").value.trim();
    let altura = document.getElementById("id_altura").value.trim().replace(",", ".");
    let peso = document.getElementById("id_peso").value.trim().replace(",", ".");

    altura = parseFloat(altura);
    peso = parseFloat(peso);

    const resultado = document.getElementById("id_resultado");
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = "Digite valores válidos! (ex: 1,75 (altura) ou 84,2 (peso))";
        resultado.style.color = "red";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao;
    let cor;

    if (imc < 18.5) {
        classificacao = "Magreza";
        cor = "orange";
    } else if (imc <= 25) {
        classificacao = "Normal";
        cor = "green";
    } else if (imc <= 30) {
        classificacao = "Sobrepeso";
        cor = "darkorange";
    } else {
        classificacao = "Obesidade";
        cor = "red";
    }

    resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    resultado.style.color = cor;

    const mensagem = `${nome}, seu IMC é ${imc.toFixed(2)} (${classificacao})`;
    console.log(mensagem);
});

