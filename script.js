const input_numero_decimal = document.getElementById("numero_decimal_input"); // seleciona o campo de entrada do número decimal
const converter_button = document.getElementById("converter_button"); // seleciona o botão de conversão
converter_button.addEventListener("click", converterParaBinario); // adiciona um ouvinte de evento ao botão para chamar a função de conversão quando clicado

function converterParaBinario() { // Define o que acontece quando o botão é clicado
    const escolher_numero = parseInt(input_numero_decimal.value); // obtém o valor inserido pelo usuário e converte para inteiro
// .value pega o valor do input

const Numero_escolhido = document.getElementById("numero_escolhido") // seleciona o elemento HTML para exibir o número escolhido
Numero_escolhido.innerHTML = escolher_numero; // exibe o número escolhido na página

let numero_binario = escolher_numero.toString(2);
const Resultado = document.getElementById("numero_binario")
Resultado.innerHTML = numero_binario;

if (isNaN(escolher_numero)) { // verifica se o valor inserido não é um número
    alert("Por favor, insira um número."); // alerta o usuário para inserir um número válido
    Numero_escolhido.innerHTML = "Não é um número válido"; // exibe mensagem de erro no elemento HTML
    Resultado.innerHTML = "Não é um número válido";
} 
} 
