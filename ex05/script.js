function calcularBilheteria() {
    const PRECO_INTEIRA = 40.00;
    const PRECO_MEIA = 20.00;

    // 1. Entrada de dados
    let idade = parseInt(prompt("Digite a sua idade:"));
    let eEstudante = prompt("Voce e estudante? (sim/nao)").toLowerCase();

    let valorFinal = PRECO_INTEIRA;

    // 2. Logica de Meia-Entrada
    // Condicoes: Menor que 12 OU maior que 60 OU estudante
    if (idade < 12 || idade > 60 || eEstudante === "sim") {
        valorFinal = PRECO_MEIA;
        console.log("Desconto de meia-entrada aplicado.");
    } else {
        valorFinal = PRECO_INTEIRA;
        console.log("Valor de inteira aplicado.");
    }

    // 3. Exibicao do resultado
    alert("Valor final do ingresso: R$ " + valorFinal.toFixed(2));
}

// Iniciar o sistema
calcularBilheteria();