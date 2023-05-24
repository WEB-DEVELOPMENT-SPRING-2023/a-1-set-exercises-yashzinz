const sounds = ['Ah-ha', 'Back of the net','Bang out of order','Dan','Email of the evening','Hello partridge','I ate scotchegg','I\'m confused']

sounds.forEach(sound => {
    const soundbtn = document.createElement('button')
    soundbtn.classList.add('soundbtn')
    soundbtn.innerText = sound
    soundbtn.addEventListener('click', ()=>{
        document.getElementById(sound).play()
        })
    document.getElementById('buttons').appendChild(soundbtn)
})