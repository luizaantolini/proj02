function simuladorEmprestimo() {
    // 1. Entrada de dados
    let salario = parseFloat(prompt("Digite o seu salario mensal bruto:"));
    let valorParcela = parseFloat(prompt("Digite o valor da parcela desejada:"));

    // Validacao de seguranca para evitar valores nulos ou texto
    if (isNaN(salario) || isNaN(valorParcela) || salario <= 0) {
        console.log("Erro: Valores de entrada invalidos.");
        return;
    }

    // 2. Calculo do limite de comprometimento de renda (30%)
    let limiteParcela = salario * 0.30;

    // 3. Verificacao da regra de negocio
    if (valorParcela > limiteParcela) {
        // Caso a parcela exceda o limite permitido
        console.log("Status: Emprestimo Negado");
        alert("Emprestimo Negado: Parcela muito alta");
    } else {
        // Caso a parcela esteja dentro da margem de seguranca
        console.log("Status: Aprovado");
        alert("Emprestimo Pre-aprovado");
    }
}

// Execucao do sistema
simuladorEmprestimo();