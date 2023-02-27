//Planejamento do projeto
//Montar os arquivos js, html e css e testalos 
//1- Criar o Html
//2- Criar o Css
//3- Começar o js:

let x = document.querySelector(".x");
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let menssageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando o evento click aos boxes 
for(let j = 0; j < boxes.length; j++){
    //quando clica na caixa
    boxes[j].addEventListener("click", function() {
        
        let el = checkElemento(player1, player2)
       
    if(this.childNodes.length == 0){  // verifica se ja tem x ou o

        let cloneel = el.cloneNode(true)
        this.appendChild(cloneel);

        //computa jogada
        if(player1 == player2){
            player1++;
            if(secondPlayer == "ia-player"){

                computerPlay()
                player2++;
                checkWin();
            }     

            
        }else {
            player2++
        };
        //checa quem venceu
        checkWin();
        
    }
        
    });
}

// evento para saber se é 2 players ou IA
for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){

        secondPlayer = this.getAttribute("id")
        for( j =0; j < buttons.length; j++){
            buttons[j].style.display = 'none';

        }
        setTimeout(function(){

            let container = document.querySelector("#container");
            container.classList.remove("hide")

        }, 500);


    })
}

//ve quem vai jogar
function checkElemento(player1, player2){
    if(player1 == player2) {
        
        el = x;
    } else {
    
        el = o;
    }
 
    return el;
}

function checkWin(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b2Child == 'x'){
            //x
            decalarWin('x')
        }else if(b1Child == 'o' && b2Child == 'o' && b2Child == 'o'){
            //o
            decalarWin('o')
        }


    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x
            decalarWin('x')
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            //x
            decalarWin('x')
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
        let vb1Child = b1.childNodes[0].className;
        let vb4Child = b4.childNodes[0].className;
        let vb7Child = b7.childNodes[0].className;

        if(vb1Child == 'x' && vb4Child == 'x' && vb7Child == 'x'){
            //x
            decalarWin('x')
        }else if(vb1Child == 'o' && vb4Child == 'o' && vb7Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
        let vb2Child = b2.childNodes[0].className;
        let vb5Child = b5.childNodes[0].className;
        let vb8Child = b8.childNodes[0].className;

        if(vb2Child == 'x' && vb5Child == 'x' && vb8Child == 'x'){
            //x
            decalarWin('x')
        }else if(vb2Child == 'o' && vb5Child == 'o' && vb8Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let vb3Child = b3.childNodes[0].className;
        let vb6Child = b6.childNodes[0].className;
        let vb9Child = b9.childNodes[0].className;

        if(vb3Child == 'x' && vb6Child == 'x' && vb9Child == 'x'){
            //x
            decalarWin('x')
        }else if(vb3Child == 'o' && vb6Child == 'o' && vb9Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    //diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let db1Child = b1.childNodes[0].className;
        let db5Child = b5.childNodes[0].className;
        let db9Child = b9.childNodes[0].className;

        if(db1Child == 'x' && db5Child == 'x' && db9Child == 'x'){
            //x
            decalarWin('x')
        }else if(db1Child == 'o' && db5Child == 'o' && db9Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
        let db3Child = b3.childNodes[0].className;
        let db5Child2 = b5.childNodes[0].className;
        let db7Child = b7.childNodes[0].className;

        if(db3Child == 'x' && db5Child2 == 'x' && db7Child == 'x'){
            //x
            decalarWin('x')
        }else if(db3Child == 'o' && db5Child2 == 'o' && db7Child == 'o'){
            //o
            decalarWin('o')
        }
    

    }
    //deu velha
    let couter = 0;

    for( let i=0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            couter++
        }
    }
    
    if(couter == 9){
        decalarWin('Deu velha!')
    }
}


//limpa o jogo, declara o vencedor e atualiza o placar
function decalarWin(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'O jogador 1 venceu'

    } else if (winner == 'o'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = 'O jogador 2 venceu'

    } else {
        msg = 'Deu velha!'
    }

    //exibe msg
    messageText.innerHTML = msg;
    menssageContainer.classList.remove("hide")

    //esconde msg
    setTimeout(function(){
        menssageContainer.classList.add("hide")

    }, 1500);

    //zerar jogadas
    player1 =0;
    player2 =0;

    //remover x e o
    let boxesToRemove = document.querySelectorAll(".box div");
    
    for(let i=0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}

//exutar logica da jogada da CPU

function computerPlay(){

    let cloneO = o.cloneNode(true);
    counter = 0;
    preenchido =0;

    for(let i=0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5);
        
        // so preencher se tiver vazio o filho
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            preenchido++;
        }
    }
    //checagem pra ver quantas estão preenchidas
    if(counter == 0 && preenchido < 9){
        computerPlay();
    }
}

