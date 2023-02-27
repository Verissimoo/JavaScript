const previousOperationText = document.querySelector("#previous-operation")
const currectOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currectOperationText){
        this.previousOperationText = previousOperationText
        this.currectOperationText = currectOperationText;
        this.currectOperation = ""
    }

    //adicionar o digito
    addDigit(digit) {
        //checar se ja tem um ponto na operação
        if(digit === "." & this.currectOperationText.innerText.includes(".")){
            return;
        }
        this.currectOperation = digit
        this.updateScreen()
    }
    //processa os operadores
    processOperation(operation){
        //checar se o valor ta vazio para mudar a operação
        if(this.currectOperationText.innerText === "" && operation !== "C"){
            //mudar operação
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        } 
        // Pegar o valor anterior para realizar a operação
        let operationValue;
        let previus = +this.previousOperationText.innerText.split(" ")[0];
        let current = +this.currectOperationText.innerText;

        switch(operation) {
            case "+":
                operationValue = previus + current
                this.updateScreen(operationValue, operation, current, previus)
                break;
            case "-":
                operationValue = previus - current
                this.updateScreen(operationValue, operation, current, previus)
                break;
            case "/":
                operationValue = previus / current
                this.updateScreen(operationValue, operation, current, previus)
                break;
            case "*":
                operationValue = previus * current
                this.updateScreen(operationValue, operation, current, previus)
                break;
            case "DEL":
                this.processDelOperation();
                break;
            case "CE":
                    this.processClearOperation();
                    break;
            case "C":
                this.processClearAllOperation();
                break;
            case "=":
                this.processEqualOperation();
                break;
            default:
                return;
        }

    }
    //mudar o valor do visor da calculadora
    updateScreen(
        operationValue = null,
        operation = null,
        current = null, 
        previous = null
        ) {
            if (operationValue === null) {
                this.currectOperationText.innerText += this.currectOperation;
            } else {
                if (previous === 0) {
                    operationValue = current
                }

                //adicionando os valores digitados na pre visualização
                this.previousOperationText.innerText =  `${operationValue} ${operation}`;
                this.currectOperationText.innerText = "";
            }
        
    }

    //mudar a operação matematica
    changeOperation(operation) {
        const mathOperations = ["*", "/", "+", "-"]

        if(!mathOperations.includes(operation)){
            return 
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }
    
    //deletar digito
    processDelOperation(){
        this.currectOperationText.innerText = this.currectOperationText.innerText.slice(0, -1)
    }

    processClearOperation(){
        this.currectOperationText.innerText = "";
    }

    processClearAllOperation(){
        this.currectOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }

    processEqualOperation(){
        const operation = previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currectOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value)
        }else {
            calc.processOperation(value)
        }
    });
});

