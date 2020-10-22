/*escreval ("digite o nome do aluno")
leia(nome)
escreval ("digite a notaA do aluno")
leia(notaA)
escreval ("digite a notaB do aluno")
leia(notaB)
media := (notaA + notaB) / 2

 se media >= 5 entao
escreval ("aprovado!", nome)
senao
escreval ("reprovado!", nome)
fimse
*/
var nome, nota1, nota2, passou;
passou = false;

nome = prompt("digite o nome do aluno:")
nota1 = prompt("digite a nota1:")
nota2 = prompt("digite a nota2:")

media = (parseInt(nota1) + parseInt(nota2)) / 2; 

if (media >= 5 )
    passou = true;
    

if (passou>= 5)
    alert("aprovado"+ nome)



