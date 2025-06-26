document.getElementById('btn-cashOut').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldById('cash-out');
    const pinNum = getInputFieldById('pin');

    if (pinNum === 1234) {
        const balance = getTextFieldById('account-balance');
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');

        div.innerHTML = `<h4 class="text-2xl  font-bold">Cash Out</h4>
        <p> ${cashOut}  Withdraw .New Balance ${newBalance}</p>`

        document.getElementById('transaction-section').appendChild(div);
    }
    else {
        alert('Faild to CashOut');
    }

});