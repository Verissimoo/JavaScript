//CRIANDO UM EVENTO
/*
let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    console.log("clicou em mim filho da puta")
});

//REMOVENDO EVENTO 

let btnr1 = document.querySelector("#btn1")
let btnr2 = document.querySelector("#btn2")

function msg(){
    console.log("quero ganja")
};

btnr1.addEventListener("click", msg)

btnr2.addEventListener("click", function(){
    btnr1.removeEventListener("click", msg);
});

//OBJETO DO EVENTO

function mm(e){
    console.log(e);
};
btnr1.addEventListener("click", mm) 

//PROPAGAÇÃO (stopPropagation)

//DEFAULT

let a = document.querySelector("a")

a.addEventListener("click", function(e){
    e.preventDefault();  //link parou de funcionar
    console.log("vai ficar pesando com anão não fdp") //novo evento do click no link
})

//EVENTOS COM TECLAS

window.addEventListener("keyup", function(e){  //window adiciona evento na pagina do navegador
    if(e.key == 'v'){
        console.log("você apertou a letra V")
    } else if(e.key == "Enter"){
        console.log("você apertou o enter")
    }
})

//EVENTOS COM O MOUSE

let btnr1 = document.querySelector("#btn1")
let btnr2 = document.querySelector("#btn2")

btnr1.addEventListener("mousedown", function() {
    console.log("clicou com o botao")
})

btnr2.addEventListener("dblclick", function() {
    console.log("deu um duble com o botao")
})
//usando o botao direito:

btnr2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("click com o direito")
})

//MOVIMENTO DO MOUSE
window.addEventListener("mousemove", function(e){
    console.log(e.x)
    console.log(e.y)
})


//EVENTO COM SCROLL
window.addEventListener("scroll", function(e){
    if(window.pageYOffset > 1000 ){  //determina que depois de certo ponto Y vai resultar na função
        console.log("Ativou")
    }            
})


//EVENTO POR FOCO

let input = document.querySelector("input")

input.addEventListener("focus", function(){
    console.log("entrou no input")
})
input.addEventListener("blur", function(){
    console.log("saiu do input")
})


//EVENTO DE CARREGAMENTO

window.addEventListener("load", function(){
    alert("Assine os termos de uso")
})

window.addEventListener("beforeunload", function(){
    event.returnValue = null; //mensagem ao fechar que diz que talvez nao tenha sido tudo salvo
})
*/

//DEBOUNCE
let timeOut;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeOut);
    timeOut = setTimeout(function(){
        console.log(e.x)
    }, 500);
});

