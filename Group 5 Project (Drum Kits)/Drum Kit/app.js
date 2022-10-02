// selecting all the drum elements and add event listerner
// add animation when a button is clicked
// play music()
let audio_volume = 0.6;


const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    //to make blury
    currentKey.classList.add('pressed')
    //to return back to normal state
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)
}
//method to play sound
const playMusic = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume
    audio.play();

}

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animate(triggeredKey)
})


const slider = document.getElementById("volume_slider")
const volumeIcon=document.getElementById("set")
slider.oninput = (event) => {
    audio_volume = event.target.value / 100
    console.log(event.target.value);
}

const makeSound = (key) => {

    switch(key){
        case "w":
        case "W":
            playMusic("sounds/sound-1.mp3");
            break;
         case "a":
         case "A":
             playMusic("sounds/sound-2.mp3");
             break;
        case "s":
        case "S":
            playMusic("sounds/sound-3.mp3");
            break;
        case "d":
        case "D":
            playMusic("sounds/sound-4.mp3");
            break;
        case "j":
        case "J":
            playMusic("sounds/sound-5.mp3");
            break;
        case "k":
        case "K":
            playMusic("sounds/sound-6.mp3");
            break;
        case "l":
        case "L":
            playMusic("sounds/sound-7.mp3");
            break;
        default:
            alert("You have clicked the wrong button!!")
            console.log("You've clicked the wrong button!!");
    }

}

const handleDrumClick = (event) => {
    var innerHTML = event.target.innerHTML;
    animate(innerHTML)
    makeSound(innerHTML)
}

var drums = document.querySelectorAll(".drum")
for(let i = 0; i <drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick)
}