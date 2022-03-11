let dado1;
let dado2;
let lancamento = [];
let frequencia;
let frequenciaArray = [];


for (let i = 1; i <= 1000; i++) {
    dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);

    let soma = dado1 + dado2;

    lancamento.push(soma);
}

frequencia = lancamento.reduce((a, b) => {
    if (a[b]) {
        a[b]++;
    } else {
        a[b] = 1
    }

    return a;
}, {})

for (let index in frequencia) {
    frequenciaArray.push(frequencia[index]);
}

let divs = document.querySelectorAll('li div');
let botao = document.getElementById('rolar');
let img = document.querySelector('#demonstracao img');

function rolar() {
    for (let i = 0; i < frequenciaArray.length; i++) {
        divs[i].style.height = 10 + 'px';
        divs[i].innerText = '';
    }
    img.setAttribute('src', 'images/dados.webp');

    setTimeout(() => {
        img.setAttribute('src', 'images/parados.png')

        for (let i = 0; i < frequenciaArray.length; i++) {
            divs[i].style.height = frequenciaArray[i] + 'px';
            divs[i].innerText = frequenciaArray[i]
        }
    }, 3000)
}


botao.addEventListener('click', rolar)