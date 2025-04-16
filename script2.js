        // Função para somar usando 'var'
        function calcularComVar() {
            // Declaração das variáveis com 'var'
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var soma = num1 + num2;

            // Verificação e exibição do resultado
            if (isNaN(soma)) {
                document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
            } else {
                document.getElementById("resultado").innerHTML = "Resultado com var: " + soma;
            }
        }

        // Função para somar usando 'let'
        function calcularComLet() {
            // Declaração das variáveis com 'let'
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let soma = num1 + num2;

            // Verificação e exibição do resultado
            if (isNaN(soma)) {
                document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
            } else {
                document.getElementById("resultado").innerHTML = "Resultado com let: " + soma;
            }
        }

        // Função para somar usando 'const'
        function calcularComConst() {
            // Declaração das variáveis com 'const'
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            const soma = num1 + num2;

            // Verificação e exibição do resultado
            if (isNaN(soma)) {
                document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
            } else {
                document.getElementById("resultado").innerHTML = "Resultado com const: " + soma;
            }
        }