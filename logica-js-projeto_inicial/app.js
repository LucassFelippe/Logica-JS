alert('Boas vindas ao game do número secreto !');
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');

// se o chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Isso ai você descobriu o numero secreto ${numeroSecreto} !`);
} else{
    alert('Você Errou ;( Tente novamente !')
}