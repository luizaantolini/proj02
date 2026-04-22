function calcularFreteEcommerce() {
    console.log(" --- Sistema de Cálculo de Frete --- ");

    // 1. Entrada de dados
    let valorCompra = parseFloat(prompt("Digite o valor total da compra: R$"));
    
    if (isNaN(valorCompra) || valorCompra <= 0) {
        alert("Por favor, insira um valor de compra válido.");
        return;
    }

    let menuRegiao = "Selecione a região de entrega:\n" +
        "1 - Sudeste (R$ 10,00)\n" +
        "2 - Sul (R$ 20,00)\n" +
        "3 - Outras (R$ 30,00)";
    
    let regiao = prompt(menuRegiao);
    let valorFrete = 0;
    let mensagemFrete = "";

    // 2. Lógica do Frete
    // Regra Especial: Acima de 250, o frete é ZERO independente da região
    if (valorCompra > 250.00) {
        valorFrete = 0;
        mensagemFrete = "Frete Grátis aplicado! ";
    } else {
        // Caso não seja frete grátis, verificamos a região
        switch (regiao) {
            case '1':
                valorFrete = 10.00;
                mensagemFrete = "Região Sudeste: R$ 10,00";
                break;
            case '2':
                valorFrete = 20.00;
                mensagemFrete = "Região Sul: R$ 20,00";
                break;
            case '3':
                valorFrete = 30.00;
                mensagemFrete = "Outras Regiões: R$ 30,00";
                break;
            default:
                alert("Região inválida. Reinicie o processo.");
                return;
        }
    }

    // 3. Cálculo Final
    let valorTotal = valorCompra + valorFrete;

    // 4. Exibição dos Resultados
    alert(`--- Resumo do Pedido ---\n` +
        `Compra: R$ ${valorCompra.toFixed(2)}\n` +
        `Frete: ${valorFrete === 0 ? "GRÁTIS" : "R$ " + valorFrete.toFixed(2)}\n` +
        `Total a Pagar: R$ ${valorTotal.toFixed(2)}\n\n` +
        `${mensagemFrete}`);
}

// Rodar o simulador
calcularFreteEcommerce();