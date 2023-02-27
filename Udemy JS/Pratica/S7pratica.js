//criando uma expressão regular
//Estrutura

let reg1 = new RegExp("test");
let reg2 = /teste/;

//aplicando na string

console.log(/testando/.test("ttttestandooo")) //true
console.log(/testando/.test("ksad")) //false

let corre = /maryjuana/;
console.log(corre.test('tem maryjuana?'))
console.log(corre.test("ta miado"))

let marquin = "tem maryjuana"
console.log(corre.test(marquin))

//conjunto de caracteres
let conj1 = /[125]/; // numeros que tem 1, 2 ou 5
let conj2 = /[0-7]/; // numeros entre 0 e 7 (65 é valido por exemplo)

console.log(conj1.test("aqui tem o numero 52")) // true
console.log(conj2.test("tem  aqui 54")) //true

let conferidorDeNumero = /[0-9]/;

console.log(conferidorDeNumero.test("somente texto")) //false
console.log(conferidorDeNumero.test("tem numero 4")) //true
console.log("--------------------------")
//Caracteres especiais

let dRegex = /\d/; //(0-9)
console.log(dRegex.test("letras")) //false
console.log(dRegex.test("12345")) //true
console.log(dRegex.test(" ")) //false
console.log(dRegex.test("letras123")) //true

let wRegex = /\w/; //[0-9, a-z]
console.log(wRegex.test("letras")) //true
console.log(wRegex.test("12345")) //true
console.log(wRegex.test(" ")) //false
console.log(wRegex.test("letras123")) //true

let sRegex = /\s/;
console.log(sRegex.test("letras")) //false
console.log(sRegex.test("12345")) //false
console.log(sRegex.test(" ")) //true
console.log(sRegex.test("letras123")) //true

console.log("-------------")


let DRegex = /\D/; //[^0-9]
console.log(DRegex.test("letras")) //TRUE
console.log(DRegex.test("12345")) //FALSE
console.log(DRegex.test(" ")) //TRUE
console.log(DRegex.test("letras123")) //TRUE (pq tem letra)

let WRegex = /\W/; 
console.log(WRegex.test("letras")) //FALSE
console.log(WRegex.test("12345")) //FALSE
console.log(WRegex.test(" ")) //TRUE
console.log(WRegex.test("letras123")) //FALSE

let SRegex = /\S/; 
console.log(SRegex.test("letras")) //TRUE
console.log(SRegex.test("12345")) //TRUE
console.log(SRegex.test(" ")) //FALSE
console.log(SRegex.test("letras123")) //TRUE

console.log("_________________________")

//testes praticos de regex


let ano = /\d\d\d\d/; //ter mais de 4 digitos
console.log(ano.test("05")) //false 
console.log(ano.test("2019")) //true
console.log(ano.test("slv")) //false

let palavra3letras = /\w\w\w/; //ter pelo menos 3 letras
console.log(palavra3letras.test("sal")) //true
console.log(palavra3letras.test("21")) //false
console.log(palavra3letras.test("testando")) //true
// nao valida porque nao limita a quantidade de caracteres

console.log("_________________________")

//not

let usandoNot = /[^123]/;
console.log(usandoNot.test("142")) //true
console.log(usandoNot.test("567")) //true
console.log(usandoNot.test("122")) //false

//plus

const maisDeum = /\d+/
console.log(maisDeum.test("543")) //true
console.log(maisDeum.test("")) //false

//?


let padrao = /abacax?i/
console.log(padrao.test("abacaxi")) //true
console.log(padrao.test("abacai")) // true
console.log(padrao.test("abaca2i")) //false

//preciso

const telefone = /\d{4,5}-\d{4}/
console.log(telefone.test("98555-8463")) //true
console.log(telefone.test("8555-8463")) //true
console.log(telefone.test("855-8463")) //false

const telefoneddd = /\(\d{2}\)\d{4,5}-\d{4}/
console.log(telefoneddd.test("(61)98555-8463")) //true
console.log(telefoneddd.test("(98)8555-8463")) //true
console.log(telefoneddd.test("98555-8463")) //false

//Choice pattern


const name = /\w+: (Felipe|Joao|Paulo)/
console.log(name.test("Nome: Felipe")) //true
console.log(name.test("Nome: Isaias")) //false
console.log(name.test("Nome: Paulo")) //true

//Validando um dominio

const site = /www.\w+\.com|.com.br/
console.log(site.test("www.banana.com")) //true
console.log(site.test("www.banana.abc")) //false
console.log(site.test("borafumar.com.br")) //true

//Validando email


const email = /\w+@\w+\.\w+/;
console.log(email.test("verissimo2013@gmail.com")) //true
console.log(email.test("vv2013@hotmail.com.br")) //true
console.log(email.test("verissimo2013-gmail.com")) //false

//Validando data de nascimento

const data = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(data.test("21/03/2002")) //true
console.log(data.test("5/8/2001")) //false
console.log(data.test("12/08/1999")) //true


console.log("--------------------------")
//EXERCICIO

//1
const grande = /[A-Z]/
console.log(grande.test("hoje")) //false
console.log(grande.test("AMANHA")) //ture

//2
const id = /\d+ID\b/; //b = terminação
console.log(id.test("7283")) //false
console.log(id.test("871273ID")) //true
console.log(id.test("DAVID")) //false

//3


const marca = /marca: (Nike|Adidas|Puma|Asics)/
console.log(marca.test("marca: Nike"))
console.log(marca.test("marca: lacoste"))
console.log(marca.test("marca: Adidas"))

//4
const ip  = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(ip.test("123.23.152.23")) //true
console.log(ip.test("2313.321321")) //false
console.log(ip.test("222")) //false
console.log(ip.test("111.111.1.1")) //true

//5
const nickname = /^(?=.{3,16}$)[a-z,0-9,_,-]/;
console.log(nickname.test("juninpocas"))
console.log(nickname.test("junin_pocas"))
console.log(nickname.test("junin-pocas09"))
console.log(nickname.test("j"))
console.log(nickname.test("juninpocasbalamlk"))












