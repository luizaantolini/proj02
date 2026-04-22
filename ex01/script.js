// Função para simular a venda
function calcularVenda() {
    console.log(" --- Sistema de Vendas AutoExpert JS ---");

    // 1. Entrada do valor inicial
    let valorBase = parseFloat(prompt("Digite o valor de tabela do veículo:"));

    if (isNaN(valorBase)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    // 2. Menu de Opções
    let menu = "Escolha a forma de pagamento:\n" +
        "1 - À vista no PIX (15% de desconto)\n" +
        "2 - Cartão de Crédito (até 24x - 5% de juros)\n" +
        "3 - Financiamento (até 48x - 20% de juros)";
    
    let opcao = prompt(menu);

    let valorFinal = 0;
    let parcelas = 1;
    let mensagem = "";

    // 3. Lógica de Processamento
    switch (opcao) {
        case '1':
            valorFinal = valorBase * 0.85; // Desconto de 15%
            mensagem = ` No PIX, o valor final com 15% de desconto é: R$ ${valorFinal.toFixed(2)}`;
            break;

        case '2':
            valorFinal = valorBase * 1.05; // Juros de 5%
            parcelas = parseInt(prompt("Em quantas parcelas no cartão (1 a 24)?"));
            
            if (parcelas >= 1 && parcelas <= 24) {
                let valorParcela = valorFinal / parcelas;
                mensagem = `💳 No Cartão (5% juros): R$ ${valorFinal.toFixed(2)}\nParcelado em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`;
            } else {
                mensagem = " Número de parcelas inválido para Cartão.";
            }
            break;

        case '3':
            valorFinal = valorBase * 1.20; // Juros de 20%
            parcelas = parseInt(prompt("Em quantas parcelas no financiamento (1 a 48)?"));
            
            if (parcelas >= 1 && parcelas <= 48) {
                let valorParcela = valorFinal / parcelas;
                mensagem = ` No Financiamento (20% juros): R$ ${valorFinal.toFixed(2)}\nParcelado em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`;
            } else {
                mensagem = " Número de parcelas inválido para Financiamento.";
            }
            break;

        default:
            mensagem = " Opção inválida.";
            break;
    }

    // 4. Exibição do Resultado
    alert(mensagem);
    console.log(mensagem);
}

// Chamar a função para rodar
calcularVenda();