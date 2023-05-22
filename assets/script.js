let customerInvestAmount = document.getElementById('customerInvestAmount')
let averageBalance = document.getElementById('averageBalance')
let bankFunds = document.getElementById('bankFunds')
let totalIncome = document.getElementById('totalIncome')
let sharingRatio = document.getElementById('sharingRatio')
let inputButton = document.getElementById('input-button')

let sharingAmountContainer = document.getElementById('sharingAmount-container')
let paybackAmountContainer = document.getElementById('paybackAmount-container')

inputButton.addEventListener("click", function() {
    let xa = Number(customerInvestAmount.value)
    let xt = Number(averageBalance.value)
    let xb = Number(bankFunds.value)
    let yt = Number(totalIncome.value)
    let n = Number(sharingRatio.value)

    let sharingAmount, paybackAmount, x
    x = (95/100)*xa
    let y
    y = x + xb
    let H
    H = (x/xa)*(yt/y)*1000
    let portion
    portion = (n/100)*H*(xt/1000)

    sharingAmount = portion*1000
    paybackAmount = sharingAmount + xa

    sharingAmountContainer.innerText = (Math.round(sharingAmount)).toString()
    paybackAmountContainer.innerText = (Math.round(paybackAmount)).toString()
})