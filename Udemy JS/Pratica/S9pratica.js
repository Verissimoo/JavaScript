//localizar pelo DOM(forma manual)

console.log(document);
console.log(document.body.childNodes[1]) //acessando o nó 1
console.log(document.body.childNodes[1].childNodes[1]) //acessando o nó 1 dentro do 1* nó
console.log(document.body.childNodes[1].childNodes[1].innerText) //mostra qual titulo tem naquele nó

//localizar pelo dom(forma mais objetiva)
console.log(document.getElementsByTagName('p'))

console.log(document.getElementById('titulo-principal'))

console.log(document.getElementsByClassName('itens-azuis'))

console.log(document.querySelector('#primeiro'))
console.log(document.querySelector('footer h2'))
console.log(document.querySelector('ul .itens-azuis '))

//alterando pelo dom (antes do alvo)

let novoElemento = document.createElement('p')
let texto = document.createTextNode("texto novo")
novoElemento.appendChild(texto)

let elementoAlvo = document.querySelector("#titulo-principal") //h1
let elementoPai = document.querySelector('#primeiro') //div

elementoPai.insertBefore(novoElemento, elementoAlvo);

//alterando pelo dom (apos o alvo)
let nElemento = document.createElement('p')
let txt = document.createTextNode("novo")
nElemento.appendChild(txt)

let p = document.querySelector('#paragrafo-principal')
let pai = p.parentNode; //acha o pai da tag
pai.appendChild(nElemento);

//trocando elementos pelo dom
let newElemento = document.createElement('h1')
let text = document.createTextNode("novo paragrafo")
newElemento.appendChild(text)

let mudar = document.querySelector("#titulo-principal")
let paiMudar = mudar.parentNode;

//paiMudar.replaceChild(newElemento, mudar)

//criando nós de texto (adicionando texto)
let b = document.getElementById("sem-texto")
let novoTexto = document.createTextNode('Esse é o texto')
b.appendChild(novoTexto)

//criando nós de elementos

let lista = document.createElement('ul')


for(i=0; i<5; i++){

    let item = document.createElement('li')
    let conteudo = document.createTextNode('texto lista' + i)

    item.appendChild(conteudo)
    lista.appendChild(item)
}

let add = document.getElementById('paragrafo-principal')
add.appendChild(lista)

//atribuindo valores a atributos 

let a = document.querySelector("footer a")
console.log(a.getAttribute('href'))

let link = 'https://www.horadecodar.com.br'

a.setAttribute('href', link)

//verificando altura e largura do elemento

let element = document.querySelector("#paragrafo-principal")

console.log(element.offsetWidth)
console.log(element.clientHeigth)

//checar a posição do elemento na tela

let elTeste = document.getElementById("primeiro")
console.log(elTeste.getBoundingClientRect())

//mudando o estilo (css) pelo Js(por meio do dom)

let elem = document.querySelector("#titulo-principal")

elem.style.color = 'red'
elem.style.backgroundColor = 'blue'

//selecionar varios elementos com query

let item = document.querySelectorAll(".itens-vermelhos")
item[0].style.color = 'red'
console.log(item[0])