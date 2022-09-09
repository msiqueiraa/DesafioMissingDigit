let res = 0, x;
let result = "";

function MissingDigit(exp) {

    exp = exp.split(' ')

    let operandOne = exp[0]
    let operator = exp[1]
    let operandtwo = exp[2]
    let resultEq = exp[exp.length - 1]

    if (resultEq.indexOf('x') != -1) {
        x = resultEq
        operandOne = parseInt(operandOne)
        operandtwo = parseInt(operandtwo)

        if (operator == '+')
            res = operandOne + operandtwo
        else if (operator == '-')
            res = operandOne - operandtwo
        else if (operator == '*')
            res = operandOne * operandtwo
        else
            res = Math.floor(operandOne / operandtwo)
    }

    else {

        resultEq = parseInt(resultEq)
        if (operandOne.indexOf('x') != -1) {

            x = operandOne
            operandtwo = parseInt(operandtwo)

            if (operator == '+')
                res = resultEq - operandtwo
            else if (operator == '-')
                res = resultEq + operandtwo
            else if (operator == '*')
                res = Math.floor(resultEq / operandtwo)
            else
                res = resultEq * operandtwo
        }

        else {

            x = operandtwo
            operandOne = parseInt(operandOne)

            if (operator == '+')
                res = resultEq - operandOne
            else if (operator == '-')
                res = operandOne - resultEq
            else if (operator == '*')
                res = Math.floor(resultEq / operandOne)
            else
                res = Math.floor(operandOne / resultEq)
        }
    }

    res = res.toString()
    let k = 0
    for (let i of x) {
        if (i == 'x') {
            result = res[k]
            break
        }
        else
            k = k + 1
    }

    return result
}



const value = "4x + 12 = 46"

console.log(value + ' o valor oculto é: ' + MissingDigit(value))