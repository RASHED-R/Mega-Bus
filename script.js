document.getElementById("increaseBtn").addEventListener("click", () => {
    handlerTicketChange("input", true);
})
document.getElementById("decreaseBtn").addEventListener("click", () => {
    handlerTicketChange("input", false);
})
document.getElementById("increaseBtn1").addEventListener("click", () => {
    handlerTicketChange("input1", true);
})
document.getElementById("decreaseBtn1").addEventListener("click", () => {
    handlerTicketChange("input1", false);
})
// function for increaseBtn & decreaseBtn for first class 
function handlerTicketChange(ticket, isIncrease) {
    let inputValue = document.getElementById(ticket + "-Value");
    let inputCount = getInoutValue(ticket);
    let newInputCount = inputCount;
    // let newInputCount = inputCount + 1;
    if (isIncrease) { //isIncrease==true
        newInputCount = inputCount + 1;
    } else if (!isIncrease && inputCount > 0) { //isIncrease==false
        newInputCount = inputCount - 1;
    }
    inputValue.value = newInputCount;
    // calculate first class ticker price
    let ticketTotal = 0;
    if (ticket == 'input') {
        ticketTotal = newInputCount * 150;

    } else if (ticket == "input1") {
        ticketTotal = newInputCount * 100;
    }
    document.getElementById(ticket + '-price').innerText = "$" + ticketTotal;
    calculateTotal();
}
//calculation function
function calculateTotal() {
    // let inputValue = document.getElementById("input-Value");
    // let inputCount = parseInt(inputValue.value);
    // let inputValue1 = document.getElementById("input1-Value");
    // let inputCount1 = parseInt(inputValue1.value);
    let inputCount = getInoutValue("input");
    let inputCount1 = getInoutValue('input1');
    const totalPrice = inputCount * 150 + inputCount1 * 100;
    document.getElementById("total-price").innerText = "$" + totalPrice
    let tax = Math.round(totalPrice * .1);
    document.getElementById("tax").innerText = "$" + tax;
    let greetTotal = totalPrice + tax;
    document.getElementById("greet-total").innerText = "$" + greetTotal;
}
// get input function
function getInoutValue(ticket) {
    let ticketInput = document.getElementById(ticket + "-Value")
    let ticketCount = parseInt(ticketInput.value);
    return ticketCount;

}

// buy now butn alert
let buyBtn = document.getElementById("book-now").addEventListener("click", () => {
    let inputCount = getInoutValue("input");
    let inputCount1 = getInoutValue('input1');
    alert("Congratulations!! " + "You booked " + (inputCount + inputCount1) + " Tickets.")
})