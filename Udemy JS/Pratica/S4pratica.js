//Arrays
let va = [1, 2, 3, 4]
console.log(va[0])
let ve = ['carlao', 'juana', 'mary']
console.log(ve[2])
let vea = [1,'abc', 4, true]
console.log(vea[1])

//Propiedades
let name = 'joao'
console.log(name.length) // quantos elementos tem
let nu = [71, 36, 21, 22]
console.log(nu[2]) //qual o elemento da posição 2

//Metodos
let marca = 'nike'
console.log(marca.toUpperCase()) //transforma em maiusculo
let marca2 = marca.toUpperCase();
console.log(marca2.toLowerCase()) //transforma em minusculo

//Objetos
let cachorro = {
    patas: 4,
    nome: 'dobby',
    idade: '3 anos',
    latir: function(){
        console.log('au au')
    }
}

console.log(cachorro.patas)
console.log(cachorro.nome)
console.log(cachorro.idade)
cachorro.latir()

//add e delete de propiedades de Objetos
let carro ={
    portas: 4,
    cor: 'vermelho',
    ano: 2010,
}
console.log(carro.portas)//=4
delete carro.portas;
console.log(carro.portas) //=undefined

carro.estado = 'novo'
console.log(carro.estado)

//copiando informações de um objeto pra outro
Object.assign(cachorro, carro)
console.log(cachorro) 

//Mutação
let objetoA = {
    pontos: 10
};
let objetoB = objetoA

let objetoC = {
    pontos: 10
}

console.log(objetoA == objetoB)//true
console.log(objetoA == objetoC)//false

objetoB.pontos = 20

console.log(objetoB)// Alterei o valor do objeto para 20

//Loops em arrays
let nomes = ['matheus', 'maria', 'jose']
for(let i=0; i <= nomes.length; i++){
    console.log(nomes[i]) // mostra todos os nomes
}

//METODOS DE ARRAY
//Pop
let teste = [1, 3, 6, 8]
console.log(teste) // 1, 3, 6, 8
let testeRemocao = teste.pop()
console.log(testeRemocao) //8
console.log(teste) //1, 3, 6
//Push
teste.push(5)
console.log(teste) // 1, 3, 6, 5
console.log('----------------')

//Shift
let teste2 = [5, 10, 15, 20]
console.log(teste2) // 
let testeRemocao2 = teste2.shift()
console.log(testeRemocao2) //5
console.log(teste2) //10, 15, 20
//Unshift
teste2.unshift(1)
console.log(teste2) // 1, 10, 15, 20
console.log('----------------')
 
//IndexOf
let sequencia = [1,2,3,4,5]  
console.log(sequencia.indexOf(3)) //posiçao 2
//lastindexOf  
let numeros = [ 1, 2, 3, 4, 1, 2 ]  
console.log(numeros.lastIndexOf(1)) //posição 4
console.log('----------------')  

//Slice
let nums = [0,1,2,3,4,5,6,7,8,9]

console.log(nums.slice(4,5)) //= 4
console.log(nums.slice(4,6)) //= 4,5
console.log(nums.slice(4)) //= 4,5,6,7,8,9
console.log(nums.slice(-2)) //= 8,9
console.log('----------------') 

//forEach
const numm = ['mateus', 'fernando', 'joao', 'felipe'];

numm.forEach(numm => {
    console.log('o nome dele é ' + numm)
})

//includes
let car = ['bmw', 'fiat', 'chevrolet']
console.log(car.includes('bmw')) // true
if(car.includes('fiat')){
    console.log('temos fiat') 
}else{
    console.log('nao temos fiat')
}

//Reverse
let seq = [1,2,3,4]
console.log(seq.reverse()) //= 4,3,2,1

//METODOS DE STRING
//Trim
let texto = "     Matheus"
console.log(texto)
let textoCorrigido = texto.trim()
console.log(textoCorrigido)

//padStart
let start = '1';
console.log(start.padStart(3,'0')) //= 001
let start2 = '4213'
console.log(start2.padStart(6, '0')) //= 004213

//Split
let frase = 'salve salve rapaziada'
let palavras = frase.split(" ")
console.log(palavras)

//Join
let frase2 = ['banana', 'maça', 'abacate']
let fraseArray = frase2.join(' ')
console.log(fraseArray)

//Repeat
console.log('teste '.repeat(3))

//Rest operator
let n1 = 3
let n2 = 5
let n3 = 1
let n4 = 7
function imprimirN(...args){
    for(i=0; i < args.length; i++){
        console.log(args[i])
    }
}
imprimirN(n1, n2)
console.log('-----')
imprimirN(n1, n2, n3)

//Destructuring com objetos
let obj = {
    cor: 'vermelho',
    tamanho: 18,
    largura: 10
}

const{cor: pcor, tamanho: ptamanho, largura: plargura} = obj;
console.log(pcor) //= vermelho


//Destructuring em arrays
let elementos = ['agua', 'terra', 'fogo', 'ar']
let [e1, e2, e3, e4] = elementos;

console.log(e1) //= agua
console.log(e2) //= terra
console.log(e3) //= fogo
console.log(e4) //= ar

//JSON
let pessoa = {
   "nome": "Verissimo",
   "idade": 19
}
console.log(pessoa.nome)
console.log(pessoa.idade)

//Json para string
const automovel = {
    "marca": 'BMW',
    "potencia": 2.0,
    "ano": 2010 
}
let autoString = JSON.stringify(automovel);
console.log(autoString)
let stringJson = JSON.parse(autoString)
console.log(stringJson)

//Exercicios
//1
let ex1 = [10, 20, 30, 40, 50]
console.log(ex1[0])
console.log(ex1[3])
console.log(ex1[4])

//2
let ex2 = [50,100]
let ex3 = [5,10,15,20]
console.log(ex2.length)
console.log(ex3.length)

//3
let onibus = {
    rodass: 8,
    limiteDePassageiros: 40,
    portas: 2
}

console.log(onibus)
console.log(onibus.rodass)
console.log(onibus.limiteDePassageiros)
console.log(onibus.portas)

//4
onibus.janelas = 20;
console.log(onibus.janelas)
delete onibus.rodass
console.log(onibus)
console.log(onibus.rodass)

//5
let nomes5 = ['joao', 'carlos','verissimo', 'felipe', 'luis']
if(nomes5.includes('verissimo')){
    console.log('seu nome é Verissimo')
}

//6
let array1 = [10, 20, 30, 40, 50, 60]
let array2 = [5, 10, 15]

function contadorDeElementos(arr){
  if(arr.length >= 5){
    console.log('muitos elementos')
  }else{
    console.log('poucos elementos')
  }
} 
contadorDeElementos(array1)
contadorDeElementos(array2)

//7
let array5 = [1,5,10,20,25]

    for(let i= 0; i < array5.length; i++){
        console.log(array5[i]) //acessa os valores do array
    }


//8
let emprego = {
    "area": "programação",
    "salario": 5000,
    "cargaHoraria": "6 horas"
}

console.log(emprego.area)
console.log(emprego.salario)
console.log(emprego.cargaHoraria)

//9
let stringFrase = "vivo a base de carpie diem"
let arrayFrase = stringFrase.split(" ")
for(let i=0; i < arrayFrase.length; i++){
    console.log(arrayFrase[i])
}

//10
let calculadora = {
    soma: function(a, b){
        return a + b
    },
    subtracao: function(a,b){
        return a - b
    },
    divisao: function(a, b){
        return a / b
    },
    multiplicacao: function(a, b){
        return a*b
    } 
}
console.log(calculadora.soma(10, 50))
console.log(calculadora.subtracao(10, 50))
console.log(calculadora.divisao(10, 50))
console.log(calculadora.multiplicacao(10, 50))




