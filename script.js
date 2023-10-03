const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image'); //variável para pegar o seletor que possui a classe ".app__image"
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.getElementById('alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
let tempoCorridoEmSegundos = 5;
const startPauseBt = document.getElementById('start-pause');
let intervaloId = null;
musica.loop = true;
const musicaInicio = new Audio('./sons/play.wav');
const musicaPause = new Audio('./sons/pause.mp3');
const musicaFinal = new Audio('./sons/beep.mp3');

musicaFocoInput.addEventListener('change', function()
{
    if(musica.paused){
        musica.play();
    }
    else
    musica.pause();
});
console.log(musicaFocoInput);
focoBt.addEventListener('click', function()
{
  //  html.setAttribute('data-contexto', 'foco');
    //banner.setAttribute('src', './imagens/foco.png');
    alterarContexto('foco');
    focoBt.classList.add('active')
});
curtoBt.addEventListener('click', ()=>{
  //  html.setAttribute('data-contexto', 'descanso-curto');
   // banner.setAttribute('src', './imagens/descanso-curto.png');
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});
longoBt.addEventListener('click', function(){
    // html.setAttribute('data-contexto', 'descanso-longo');
    // banner.setAttribute('src', './imagens/descanso-longo.png');
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});
function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    }); 
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`); //para templates string eu uso crase e não aspas simpless
    switch (contexto){
        case 'foco':
        titulo.innerHTML = `Otimize sua produtividade,<br>
        <strong class="app__title-strong"> mergulhe no que importa.</strong>`
        break; 

        case 'descanso-curto': 
        titulo.innerHTML = `Que tal dar uma respirada?,<br>
        <strong class="app__title-strong"> Faça uma pausa curta.</strong>`
        break; 

        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superficie,<br>
            <strong class="app__title-strong"> Faça uma pausa longa. </strong>`
        break;
        default:
            break;
    }
}

const contagemRegressiva = () =>{
    // iniciar();
    
    if(tempoCorridoEmSegundos > 0){
        console.log('Temporizador: '+tempoCorridoEmSegundos);
        musicaInicio.play();
        tempoCorridoEmSegundos -= 1;
        return;
    }
    else
    zerar();
    musicaFinal.play();
    musicaFinal.currentTime = 4;
    alert('tempo finalizado!');
}
startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloId!=null){
        zerar();
        musicaPause.play();
        //console.log(intervaloId);
        return; //return para interromper a execução do código
    }
intervaloId = setInterval(contagemRegressiva, 1000);
}
function zerar(){
    clearInterval(intervaloId);
    intervaloId = null;
}