const Nome = document.querySelector('#nome')
const Unidade_1 = document.querySelector('#uni1')
const Unidade_2 = document.querySelector('#uni2')
const Unidade_3 = document.querySelector('#uni3')
const Unidade_4 = document.querySelector('#uni4')
const Resultado = document.querySelector('#resultado')
const botao = document.querySelector('#botao')

botao.addEventListener('click',media)

function media(){
    
    no = (Nome.value)
   uni = Number(Unidade_1.value)
   uni_2 = Number(Unidade_2.value)
   uni_3 = Number(Unidade_3.value)
   uni_4 = Number(Unidade_4.value)

   calculo = (uni+uni_2+uni_3+uni_4)/4

   if (calculo>=6){
   Resultado.textContent = `Sr(a) ${no} a sua média final foi ${calculo.toFixed(1)},você foi Aprovado! `
   Resultado.style.color = "green";
} else{
    Resultado.textContent = `Sr(a) ${no} a sua média final foi ${calculo.toFixed(1)},você foi Reprovado! `
    Resultado.style.color = "red";
}
}