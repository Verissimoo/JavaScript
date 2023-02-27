//EVENTOS
//Ações do usuario na pagina como: click, tecla e etc.
//Criando:
let btn = document.querySelector("button")

btn.addEventListener("click", () => {
    console.log("clicou em mim filho da puta")
}); 

//REMOVENDO EVENTOS
//tem que criar uma função pra atrelar ao evento

let btnr1 = document.querySelector("#btn1")
let btnr2 = document.querySelector("#btn2")

function msg(){
    console.log("quero ganja")
};

btnr1.addEventListener("click", msg)

btnr2.addEventListener("click", function(){
    btnr1.removeEventListener("click", msg);
});


//OBJEO DO EVENTO
//mostra os detalhes do evento
function mm(e){
    console.log(e);
};
btnr1.addEventListener("click", mm)


//PROPAGAÇÃO (stopPropagation)
//separa para que um nao ative um evento sem querer so por ele estar divindo o msm espaço
function msg(e){
    console.log("clicou no button")
    e.stopPropagation(); //assim o evento nao se mistura com outros
}

//PREVENT DEFAULT
//Serve para criar ações pré definidas,
//Prmeiro ele tira a resposta convencional daquele evento
//E abaixo você pode dizer oque quer que ele faça
let a = document.querySelector("a")

a.addEventListener("click", function(e){
    e.preventDefault();  //link parou de funcionar
    console.log("vai ficar pesando com anão não fdp") //novo evento do click no link
});

//EVENTOS DE TECLAS
//keyup= quando solta a tecla
//keydown= quando aperta a tecla
window.addEventListener("keydown", function(e){  //window adiciona evento na pagina do navegador
    
    if(e.key == 'v'){
        console.log("você apertou a letra V");
    } else if(e.key == 'q'){
        console.log("você apertou a letra q")
    }
})

//EVENTOS COM O MOUSE
//click= click
//mousedown= apertar
//mouseup= soltar
//dblclick= dois click
let btnr1a = document.querySelector("#btn1")
let btnr2a = document.querySelector("#btn2")

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

//MOVIMENTO COM O MOUSE
//mousemove = detecta o movimento do mouse 
window.addEventListener("mousemove", function(e){
    console.log(e.x)
    console.log(e.y)
})

//MOVIMENTO DE SCROLL
window.addEventListener("scroll", function(e){
    if(window.pageYOffset > 1000 ){  //determina que depois de certo ponto Y vai resultar na função
        console.log("Ativou")
    }            
})

//EVENTOS POR FOCO
//geralmente usado em formularios
//focus= quando entra num input, mantem as ações da pagina restrita ao bloco focus
//blur= quando sai, libera o usuario para outras ações na pagina
let input = document.querySelector("input")

input.addEventListener("focus", function(){
    console.log("entrou no input")
})
input.addEventListener("blur", function(){
    console.log("saiu do input")
})

//EVENTO DE CARREGAMENTO
//load = atrela um evento a pagina enquanto ela carrega
//beforeload = gera um evento para o usuario antes dele fechar a pagina
window.addEventListener("load", function(){
    alert("Assine os termos de uso")
})
window.addEventListener("beforeunload", function(){
    event.returnValue = null; //mensagem ao fechar que diz que talvez nao tenha sido tudo salvo
})

//DEBOUNCE
//impede que um evento dispare multiplas vezes
//debounce ent é um suavizador, que evita o evento ser chamado varias vezes
let timeOut;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeOut);
    timeOut = setTimeout(function(){
        console.log(e.x)
    }, 500);
});




