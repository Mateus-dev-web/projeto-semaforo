let img = document.getElementById('img');
let btn = document.getElementById('botoes');
let granFinale = 0

let mudarCor = (event) => {
     console.log(event.target.id);//saida para testa
     TrocaCor[event.target.id]();
}

const MudarCor = () => {
    granFinale = granFinale < 2 ? ++granFinale : 0;
}

let corAltomatica = () =>{
    console.log('teste');//saida para teste 
    const cores = ['vermelho','amarelo', 'verde'];
    const cor = cores[granFinale];
    TrocaCor[cor]();
    MudarCor()

}


let TrocaCor = {
    'vermelho': () => img.src = 'vermelho.png',
    'amarelo':  () => img.src = 'amarelo.png',
    'verde':  () => img.src  = 'verde.png',
    'automatico': () => setInterval(corAltomatica, 2000)
}

btn.addEventListener('click',mudarCor)