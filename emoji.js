function emojiRunner(){
    let emoticon = document.querySelector('.emoticon').value
    const html = document.querySelector('.html')
    if (emoticon === ':)' || emoticon === ': )' || emoticon === ';)' || emoticon === ')') {
        html.innerHTML = '😊'
    } else if (emoticon === ':(' || emoticon === ': (' || emoticon === '(') {
        html.innerHTML = '😔'
    } else {
        html.innerHTML='😐'
    }
}
