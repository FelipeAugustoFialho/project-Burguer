const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
]

let buttonAll = document.querySelector('#all')
let buttonDescount = document.querySelector('#descount')
let allPrice = document.querySelector('#allPrice')
let veganButton = document.querySelector('#vegan')

let list = document.querySelector('ul')

function convertValue(value){

    let convert = value.toLocaleString('pt-BR',{
        style:'currency',
        currency:'BRL',
    })
return convert
}

//MOSTRAR TUDO
function showAll(productsArray) {

    let myLi = ''

    productsArray.forEach(item => {
        myLi = myLi + `
        <li>
        
        <img src=${item.src} >
        <p>${item.name}</p>
        <p class="item-price">${convertValue(item.price)}</p>

        </li>
        `
        list.innerHTML = myLi;

    });
}
//DESCONTO 10%
function newValue() {
    let newPrice = menuOptions.map(value => ({
        name: value.name,
        price:convertValue( value.price - (value.price * 10 / 100)),
        vegan: value.vegan,
        src: value.src


    }))
    showAll(newPrice)

}
//VALOR TOTAL DOS PRODUTOS
function allItens() {
    let totalValue = menuOptions.reduce((acc, valueAll) => acc + valueAll.price, 0)

    list.innerHTML = `
    <li>
    Valor de Todos os Produtos:${convertValue(totalValue)}
    </li>
    `


}


// ITENS VEGANOS

function veganItens() {
    itensVegan =   menuOptions.filter(iten => {
      
        if (iten.vegan === true) return true
        else return false
           
    })
    showAll(itensVegan)
}




buttonAll.addEventListener('click', () => showAll(menuOptions));

buttonDescount.addEventListener('click', newValue);

allPrice.addEventListener('click', allItens);

veganButton.addEventListener('click',veganItens);