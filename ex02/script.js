// Simulador de Caixa - Cafeteria Gourmet
function caixaCafeteria() {
    console.log(" --- Bem-vindo à Cafeteria Gourmet --- ");

    // 1. Entrada do valor do pedido
    let valorPedido = parseFloat(prompt("Digite o valor total do pedido:"));

    // Validação básica
    if (isNaN(valorPedido) || valorPedido <= 0) {
        alert("Por favor, insira um valor válido para o pedido.");
        return;
    }

    let valorFinal = valorPedido;
    let brinde = "Nenhum";
    let possuiFidelidade = false;

    // 2. Lógica da Regra de Negócio (Acima de R$ 50,00)
    if (valorPedido > 50.00) {
        // Confirm retorna true para "OK" e false para "Cancelar"
        possuiFidelidade = confirm("O pedido superou R$ 50,00! Você possui Cartão Fidelidade?");

        if (possuiFidelidade) {
            // Aplica 10% de desconto
            valorFinal = valorPedido * 0.90;
            alert(" Cartão Fidelidade detectado! Aplicando 10% de desconto.");
        } else {
            // Ganha o brinde
            brinde = " Cookie Gourmet de brinde";
            alert(" Você não tem o cartão, mas ganhou um Cookie por nossa conta!");
        }
    }

    // 3. Exibição do Resultado Final
    console.log("\n--- Resumo do Pedido ---");
    console.log(`Valor Original: R$ ${valorPedido.toFixed(2)}`);
    console.log(`Valor a Pagar: R$ ${valorFinal.toFixed(2)}`);
    console.log(`Brinde: ${brinde}`);
    
    alert(`Total a pagar: R$ ${valorFinal.toFixed(2)}\nBrinde: ${brinde}\n\nObrigado e volte sempre! ☕`);
}

// Iniciar o sistema
caixaCafeteria();