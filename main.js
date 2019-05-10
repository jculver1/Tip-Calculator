
const menuItems = [
    {id: 1, name: 'pizza', price:5.00},
    {id: 2, name: 'sushi', price: 8.00},
    {id: 3, name: 'tacos', price: 7.00}
]

const calculateTip = () => {
    let billAmount = document.querySelector('#amount').value
    let percentage = document.querySelector('#percent').value
    let tip = (billAmount * percentage) / 100
    document.querySelector('h2').innerHTML = tip  
}

const generateMenu = () => {
    const menuItems = [
        {id: 1, name: 'pizza', price:5.00},
        {id: 2, name: 'sushi', price: 8.00},
        {id: 3, name: 'tacos', price: 7.00}
    ]
    let selectMenu = document.querySelector('#menuItems')

    for(let i=0; i < menuItems.length; i++){
        let option = document.createElement('option')
        option.value = menuItems[i].id
        option.innerHTML = menuItems[i].name + ' ' + menuItems[i].price
        selectMenu.appendChild(option)
    }
}

generateMenu()





