//Callbacks

console.log("1")

setTimeout(function(){
    console.log("5")
}, 2000); //2 segundos

console.log("2")
console.log("3")
console.log("4")

//Promise

let p = Promise.resolve(5+2)

console.log("blabla");

console.log(p);

p.then((value) => {return value * 2})
.then((value) => (console.log(value))) //manipulando a promisse

//Achando erro na Promise

let errorp = Promise.resolve(new Error("não deu certo"))
 console.log("lala")
 errorp.then((value) => console.log(value))
 .catch(reason => console.log(reason)) //catch acha o erro nele

//função que rejeita ou resolve

function verificarNumero(num){
    new Promise((reject, resolve) => {
        if(num ==2){
            resolve(console.log(`o numero é ${num}`))
        } else {
            reject(new Error("deu falha"))
        }
    }) 
}
verificarNumero(2)
verificarNumero(56)

//resolvendo varias promises

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(10);
    }, 5000)
});

const p2 = Promise.resolve(5);

const p3 = new Promise((resolve, reject) => {
    resolve(2);
});
//executa quando todas as promisses tiverem prontas
Promise.all([p1, p2, p3]).then((values) => console.log(values));

//Async function

async function somar(a,b){
    return a + b
};

somar(5, 10).then(value => console.log(value))

//Await

function somaComDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function() {
            resolve(a+b)
        }, 5000);
    })
}


async function resSoma(a,b,c){
    
    let x = somaComDelay(a,b)
    let y = c;

    return await x + y;
}

resSoma(5,10,2).then(value => console.log(value));