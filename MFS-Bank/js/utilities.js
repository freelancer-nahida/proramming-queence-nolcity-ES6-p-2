// console.log('utilies loaded');

// common function here

// function getInputFieldById() {
//     // console.log('button clicked');

//     const addMoney = document.getElementById('add-money').value

//     // console.log(addMoney);
//     return addMoney;



// };

function getInputFieldById(Id) {
    const inputValue = document.getElementById(Id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldById(Id) {
    const textValue = document.getElementById(Id).innerText;

    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showASectionById(Id) {
    document.getElementById('add-money-form').classList.add('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');

    document.getElementById('transaction-section').classList.add('hidden');

    /// show section by proving parameter
    document.getElementById(Id).classList.remove('hidden');
} 