
let sec = 00
let min = 00
let hr = 0
let interval

function start(){
    interval = setInterval(contador, 1000)
}

function pause(){
    clearInterval(interval)
}

function stoped(){
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById("timer").innerText="00:00:00"

}


function contador(){
    sec++
    if(sec==60){
        min++
        sec=0
        if (min==60) {
            hr++
            min=0
        }
    }
document.getElementById("timer").innerText=
`${hr}:${min}:${sec}`
}