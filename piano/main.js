alert("Caso esteja utilizando o computador, pode também utilizar as teclas: \n A - S - D - F - G - H - J - K - L - Ç. \n\n Espero que aproveitem!")

//pegar todas teclas
const keys = document.querySelectorAll('.key')
console.log(keys)

//tocar notas
function playNotes(event){
  //codigo da tecla
    let audioKeyCode = getKeyCode(event)
  //teclas clicada ou pressionada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    //se a tecla existe
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey){
        return;
    }
  //tocar o audio
    playAudio(audioKeyCode)

  //toggle class
    addPlayingClass(key)
}   

function addPlayingClass(key){
    key.classList.add('playing')
}

function getKeyCode(event){
    let keyCode;

    const isKeyBoard = event.type === 'keydown'

    if(isKeyBoard){
        keyCode = event.keyCode
    } else{
        keyCode = event.target.dataset.key
    }
     
    return keyCode
}

  //tocar o audio
function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event){
    event.target.classList.remove('playing')
}
//com mouse
 function regsiterEvent(){
    keys.forEach(function(key){
        key.addEventListener('click', playNotes)
        key.addEventListener('transitionend', removePlayingClass)
    })
    
 }

 window.addEventListener('load', regsiterEvent)
//com teclas
window.addEventListener('keydown', playNotes)