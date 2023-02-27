//tratamento de input

function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log('digite somente numeros')
    } else {
        return console.log(number)
    }
}



//Try e catch

try{
    let c = a + b;
} catch(error){
    console.log('algo deu errado:' + error)
}

//Try e catch com Finally
try{
    let c = 2 + b;
} catch(error){
    console.log('algo deu errado:' + error)
} finally{
    console.log('executou')
}

//Assertion

let arr = [1, 2, 3, 4];
let arr2 = [];

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error('O array precisa ter pelo menos um elemento')
    } else{
        for(let i = 0; i < arr.length; i++){
            console.log(i)
        }
    }
}

iterarArray(arr2)

