

const calculateTip = () => {
    let billAmount = document.querySelector('#amount').value
    let percentage = document.querySelector('#percent').value
    let tip = (billAmount * percentage) / 100
    document.querySelector('h2').innerHTML = tip 
   
}



