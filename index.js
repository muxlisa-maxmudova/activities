function list (){
    const input = document.querySelector(".input");
    const name = input.value
    const p = document.querySelector('.answer')
    if(name === 'apple'){
        p.innerHTML = '130 calories'
    } else if(name === 'banana'){
        p.innerHTML = '110 calories'
    } else if(name === 'avocado'){
        p.innerHTML = '50 calories'
    } else if(name === 'canta loupe'){
        p.innerHTML = '50 calories'
    } else if(name === 'grape fruit'){
        p.innerHTML = '60 calories'
    } else if(name === 'grapes'){
        p.innerHTML = '90 calories'
    } else if(name === 'melon'){
        p.innerHTML = '50 calories'
    } else if(name === 'kiwi'){
        p.innerHTML = '90 calories'
    } else if(name === 'lemon'){
        p.innerHTML = '15 calories'
    } else if(name === 'lime'){
        p.innerHTML = '20 calories'
    } else{
        p.innerHTML = 'not found'
    }
}
