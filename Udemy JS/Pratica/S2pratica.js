let corre = 25
console.log(corre + corre)

corre = corre+2
console.log(corre)

let colombia = 5
console.log(colombia * corre - colombia)

console.log(`eu peguei desse corre foi as ${corre}`);

//let favDrug = prompt();
//console.log(favDrug)

//alert('HORA DE BOLAR UM!!!!')

let maiorNumero = Math.ceil(5.25439)
console.log(maiorNumero)

//-----------------------------
//Estrtura do If
let data = 5
let num = 25
if(data > 3) {
    console.log('ai sim em paizao')
} 

if(num == 25 && data == 5 ) {
    console.log('ta sabendo mttt mlkote')
}

//Estrutura do Else
let vulgo = "vera"
if(vulgo == "vera") {
    console.log("slv slv verazin")
} else{
    console.log('oxi quem é tu')
}

//Estrutura do else if
let maryjuana = "imperial"
let bebida = "vinho"
if(maryjuana == "prensado"){
    console.log('quero dms')
}else if(bebida == "vinho"){
    console.log('muito bom')
} else{
    console.log('aff vou ficar na estiga')
}

//Estrutura do Whille
let x = 5
while(x>0){
    console.log("o valor de x é " + x)
    x= x-1;
} 

//Estrtura do For
for(let numero = 2; numero < 100; numero = numero * 2){
    console.log("o numero é " + numero)
}
//o numero é 2
//o numero é 4
//o numero é 8
//o numero é 16
//o numero é 32
//o numero é 64



//Estrtura de uma identação boa
let a= 2;
let c= 0;

if(a >= 2) {
    c = a + 2
    if(c == 4){
        console.log("c é 5")
    }
}

//Utilizando o Break
let name = "Verissimo";
for(let p=0; p < 5; p = p + 1 ) { //essa estrtura faz repetir 10 vezes algo
   
     if(p == 1);{
        console.log("achei! seu nome é " + name)
    }
    if(p == 5 && name == "Verissimo" ) {
        console.log("parou")
        break
    }
    console.log(p)
}

//Utilizando o Continue
for(let v = 10; v > 0 ; v = v-1){
    if(v % 2 == 0 ){
        console.log("numero par")
        continue
    }
     console.log(v)
}


//Incremento simplificado na variavel
for(let o= 0; o<5;o += 1 ) {
    console.log(o)
}

//Exercicios

//1
let string = "upup malandragem"
let numb = 2
let boo = true
console.log(typeof string)
console.log(typeof numb)
console.log(typeof boo)

//2
let idadee = 18
if(idadee > 18){
    console.log("pode entrar")
} else if(idadee == 18){
    console.log("por pouco em, mas entra ai")
} else {
    console.log("de menor aqui nn")
}

//3
let n = "Felipe Verissimo"
if(n == "Felipe Verissimo"){
    console.log("Salve salve mano vera")
}else {
    console.log("sei quem é tu nn, rala")
}

//4 
console.log(Math.pow(2,2))
console.log(Math.pow(3,2))
console.log(Math.pow(18,2))

//5
let velocidadeMax = 79
if(velocidadeMax > 80){
    console.log("multado")
}else{
    console.log("ta de boas")
}

//6
let id = 18
let cnh = true

if(id >= 18 && cnh == true){
    console.log("pode dirigir")
} else if(id >= 18 && cnh == false){
    console.log("é preciso tirar a cnh")
} else if(id <= 18 && cnh == false){
    console.log("tu nn pode dirigir maluco")
}

//7
b = 0
while(b <= 10 ){
    //console.log(b)
    b ++
}

//8
for( m = 100; m >= 50; m--){
    //console.log(m)
}

//9
for( m = 0; m <= 50; m++){
    if( m % 2 == 0){
        //console.log(`o numero ${m} é par`)
    } else{
        //console.log(`o numero ${m} é impar`)
    }
}

//10
let numm = 10;
let divisoes = 0;

for(ç= 1; ç<=numm; ç++){
    if(numm % ç == 0){
        divisoes++}
}

if(divisoes == 2){
    console.log(`o numero ${numm} é primo`)
} else{
    console.log(`o numero ${numm} não é primo`)
}


