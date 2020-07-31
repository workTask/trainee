
const operations = function (operator,num1,num2){

    if (operator == '+'){
        return num1+num2;
    } else  if (operator == '-'){
        return num1-num2;
    } else  if (operator == '*'){
        return num1*num2;
    } else  if (operator == ':'){
        return num1/num2;
    } else  if (operator == '^'){
        return Math.pow(num1,num2);
    } else {
        return "Error";
    }
}

module.exports = operations;