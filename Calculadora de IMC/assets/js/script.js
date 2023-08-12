var btn = document.getElementById("CliqueAqui")

btn.addEventListener("click", function (){
    var nome = document.getElementById("nome").value
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resultado = document.getElementById("resultado")
    var classificacao = ""

    var AlturaQuadrado = altura * altura
    var IMC = peso / AlturaQuadrado

    if (IMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (IMC < 24.9) {
        classificacao = "Peso normal";
    } else if (IMC < 29.9) {
        classificacao = "Sobrepeso";
    } else if (IMC < 34.9) {
        classificacao = "Obesidade grau I";
    } else if (IMC < 39.9) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    var resposta = nome + ", seu IMC é: " + IMC.toFixed(2) + " - " + classificacao
    resultado.textContent = resposta
})
