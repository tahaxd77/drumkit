
function playSound(e){
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0; //rewind to the start
    key.classList.add('playing')
    audio.play();
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown' , playSound)