//Estrutura de uma Função sem argumento
function imprimirNoConsole() {
    console.log("slv slv pae")
}
imprimirNoConsole();

//Função com parametro
function imprimirUmNumero(num){
    console.log("o numero é: " + num)
}

imprimirUmNumero(2)
imprimirUmNumero(4)
imprimirUmNumero(7)
imprimirUmNumero(1000)

//Declarando função como variavel

const numeroAleatorio = function(){
    console.log(Math.random())
}
numeroAleatorio();
numeroAleatorio();

//extra sobre função

function multiplicar(x, y, z){
    return x*y*z
}
console.log(multiplicar(2, 5, 1))

const mult = multiplicar(100, 1, 2)
console.log(mult)

//ex

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("pode dirigir")
    } else {
        console.log("nao pode")
    }
}
podeDirigir(20, true)
podeDirigir(10, 1)
podeDirigir(18, 0)

//ex de escopo
let a = 10
function soma(x , y){
      let a = x + y;
      console.log(a)

}
console.log(a)
soma(5,2)


// Arrow functions
const saudacao = () => {
    console.log("upup")
}
saudacao()

const adicao = (n, m) => {
    return n + m;
}
console.log(adicao(1, 4))


//arrow em 1 linha
const multt =  s => s*s;
console.log(multt(2)) 
console.log(multt(5)) 

//Argumento opcionais

function argumento(nome, idade){
    if(idade === undefined){
        console.log("seu nome é "+ nome)
    } else{
        console.log("seu nome é:" + nome + " sua idade é: " + idade)

    }
}
argumento("paulo", 20)
argumento("Arthur")

//Argumento default

function potencia(base, exp=2){
    return Math.pow(base, exp)
}
console.log(potencia(2,3))
console.log(potencia(3))
console.log(potencia(5))

//Closure 
function lembrarSoma(x){
    return function(y){
        return x + y
    }
}
let soma1 = lembrarSoma(2)
console.log(soma1(5))

//Recursion

function retornarNumeroPar(p){
    if(p % 2 == 0){
        console.log("o numero " + p+ " é par" )
    } else{
        console.log(p)
        retornarNumeroPar(p-1)
    }
}
retornarNumeroPar(17)

//exercicios
//1
function print(){
    console.log("hello word")
}
print()

//2
function idade(x){
    console.log("sua idade é " + x)
}

idade(20)

//3
function somaaa(x, y){
    return x+y;
}

console.log(somaaa(2, 5))

//4
function nAleatorio(z){
    return Math.floor(Math.random()* z ) + 1
}
console.log(nAleatorio(79123))

//5
function autoEscola(idad){
    if(idad >= 18){
        console.log("pode fazer auto escola")
    } else{
        console.log("so pode fazer com 18")
    }
}
autoEscola(19)

//6
function tipoDado(dadoo){
    if(typeof dadoo === 'number'){
        console.log('esse dado é um number')
    } else if(typeof dadoo === 'string'){
        console.log('esse dado é uma string')
    } else if(typeof dadoo === 'boolean'){
        console.log('esse dado é um boleano')
    }
}

tipoDado(2)
tipoDado("salve")
tipoDado(true)

//7
function numeroPositivo(k){
    if(k < 0){
        console.log(Math.abs(k))
    }else{
        console.log(k)
    }
}

numeroPositivo(-1267)

//8
function textoLongo(t){
    if(t.length > 10 ){
        console.log("texto muito longo")
    } else{
        console.log("texto curto")
    }
}
textoLongo("helicopterooooo")

//9
function calculadora(b, p){
    return console.log(b**p)

}

calculadora(5, 3)

//10

function xtudo(v){
    for(let q = v; q > 1; q--){
        if(q % 2 == 0){
            console.log(q)
        }        
    }
}

xtudo(20)





