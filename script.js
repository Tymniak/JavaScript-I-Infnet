//input
 const SALARIO_ATE_20 = 1000
 const SALARIO_ACIMA_20 = 2000
anoNascimento = parseInt(prompt("Informe o seu ano de nascimento"))
nome = prompt("Informe o seu nome")
salarioBase = parseFloat(prompt("Informe o seu salario base"))
gratificacao = parseFloat(prompt("Informe sua gratificação"))
bonus = parseFloat(prompt("Informe seu bônus"))
desconto = parseFloat(prompt("Informe seu desconto"))

salarioLiquido = 0
adicional = 0

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Sou " + nome + " e tenho " + idade + " anos e ganho R$" + salarioLiquido

adicional = 1000
salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

//output
alert(mensagem)




