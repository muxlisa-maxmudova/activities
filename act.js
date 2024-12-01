const products = [

]

function sortingProducts() {
   let list=''
    const result = document.querySelector('.result')
    const input = document.querySelector(".list");
    let name = input.value;
    products.push(name)
    for (let i = 0; i < products.length; i++) {
        const html = products[i]
        const element = `<p>${html}</p>`
        list += html
    }



    console.log(products)

    document.querySelector('.result').innerHTML = `<p>${list}</p>`
}

