        // Função que realiza o cálculo da soma

        function calcular() {

            // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
            var num1 = parseFloat(document.getElementById("num1").value);

            // Criação da variável 'num2' com o valor do segundo campo, convertido para número
            var num2 = parseFloat(document.getElementById("num2").value);

            // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
            var soma = num1 + num2;

            // Verificação para garantir que os valores são números válidos
            if (isNaN(soma)) {
                // Exibe mensagem de erro se os valores não forem numéricos
                document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
            } else {
                // Atualiza o parágrafo com o resultado da soma
                document.getElementById("resultado").innerHTML = "A soma é: " + soma;
            }
        }