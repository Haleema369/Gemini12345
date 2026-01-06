let result = document.getElementById('result');
let operator = '';
let firstValue = '';
let secondValue = '';

function appendValue(val) {
    result.value += val;
}

function setOperator(op) {
    operator = op;
    firstValue = result.value;
    result.value = '';
}

function clearResult() {
    result.value = '';
    firstValue = '';
    secondValue = '';
    operator = '';
}

function calculateResult() {
    secondValue = result.value;
    let res = 0;
    switch (operator) {
        case '+':
            res = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            res = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            res = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            res = parseFloat(firstValue) / parseFloat(secondValue);
            break;
    }
    result.value = res;
}