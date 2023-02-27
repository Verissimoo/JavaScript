//Metodos em OO
//ex1
let dog ={
    latir: function(){
        console.log("au, au")
    }
}
dog.latir()

//ex2
let poesias ={
    vietna: function(){
        console.log("escrita na praça do relogio...")
    },
    antissiocial: function(){
        console.log("escrita no onibus...")
    },
    proibiçãoEracismo: function(){
        console.log("escrita na rede de casa...")
    },
    
}
poesias.vietna()
poesias.proibiçãoEracismo()
poesias.antissiocial()


//metodo para definir algo
let pessoa= {
    nome:' ',
    setNome: function(novoNome){
        this.nome = novoNome
    },
    getNome: function(){
        return this.nome;
    }
}

pessoa.setNome("verissimo");
console.log(pessoa.getNome())

//Prototypes

let humano = {
    pernas: 2
}

console.log(Object.getPrototypeOf(humano))
console.log(Object.getPrototypeOf(humano) == Object.prototype) 

let novoHumano = Object.create(humano)
console.log(novoHumano.pernas)

//Classes (molde)

let passaro = {
    especie: 'Indefinido'
}

let canario = Object.create(passaro)
canario.especie = 'canario'

console.log(canario.especie)

//Construtor por creates (uma função que serve pra ser uma classe)

function criarCachorro(raça, cor, patas){
    let cachorro = Object.create({});
    cachorro.raça = raça;
    cachorro.cor = cor;
    cachorro.patas = patas;
    cachorro.latir = function() {
        console.log("au au")
    }
    return cachorro
}

let doberman = criarCachorro('Doberman', 'preta', 4);
console.log(doberman)
doberman.latir()

//construtor por new

function Carro(marca, cor, ano) {
    this.marca = marca
    this.cor = cor
    this.ano = ano
}

let fiat = new Carro('Fiat', 'vermelho', 2010) 
console.log(fiat.cor)

let BMW = new Carro("BMW")
console.log(BMW.marca)

//construtor por metodos

function carro(marca, cor, ano) {
    this.marca = marca
    this.cor = cor
    this.ano = ano
}

carro.prototype.acelerar = function(){
    console.log("raaaaaaaan")
} // adicionei um metodo por fora do objeto usando o prototype

let esportivo = new carro()

esportivo.acelerar()

//construtor na classe (es6)

class escola {
    constructor(numero){
        this.numero = numero;
    }
    grito(){
        console.log('aaaaaaaaaaa')
    }
}

let sala = new escola('sala 10')
console.log(sala.numero)

escola.prototype.turma = 'b' 
console.log(sala.turma)
sala.grito()

//override

function Passarin(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Passarin.prototype.nome = 'SND'

let sabia = new Passarin('sabia', 3)
console.log(sabia.idade)

console.log(Passarin.prototype.nome) // um valor constante para o nome

//Symbols (const)

function hobbies(musica, arte) {
    this.musica = musica;
    this.arte = arte;
}

let musica = Symbol();
hobbies.prototype[musica] = 'violao'

let expressaodearte = new hobbies('guitarra', 'pintura')

console.log(hobbies.prototype[musica]) //inalteravel o valor


//Getters e setters
class Maconha {
    constructor(tipo) {
        this.tipo = tipo;
    }

    get verTipo(){
        return 'essa porra é um ' + this.tipo
    }
    set novoTipo(value) {
        this.tipo = value;

    } 
}

let hash = new Maconha('Hashzadaaa');
console.log(hash.verTipo)

class Heroi{
    constructor(nome, uniforme, poder){
      this.nome = nome;
      this.uniforme = uniforme
      this.poder = poder
    }
    get verPoder(){
        return this.poder
    }

    set novoPoder(poder){
        this.poder = poder
    }

}

let HomemAranha = new Heroi('Petter', 'Vermelho', 'SPD')
console.log(HomemAranha)

HomemAranha.novoPoder = 'soltar teia'
console.log(HomemAranha.verPoder)


//Herança 

class Mamiferos {
    constructor(patas){
        this.patas = patas;
    }
}

let elefante = new Mamiferos(4)
console.log(elefante.patas)

class Gato extends Mamiferos{
    constructor(patas, tamanho, cor){
        super(patas, patas);
        this.tamanho = tamanho;
        this.cor = cor;
    }
}

let gadu = new Gato(4, 'medio', 'preto')

console.log(gadu)
console.log(gadu instanceof Mamiferos) //true

console.log('-----------------------')

//1

class contaBanco{
    constructor(saldo){
        this.saldo = saldo;
    }

    Deposito(valor){
        this.saldo += valor
    }

    saque(valor){
        this.saldo -= valor
    }
}



let conta = new contaBanco(1000)

conta.Deposito(100)

console.log(conta.saldo)

conta.saque(800)

console.log(conta.saldo)

//2

class Carrinho{
    constructor(itens, qtd, valor){
        this.itens = itens;
        this.qtd = qtd;
        this.valor = valor;
    }

    adicionarItem(item){
        let contador = 0;
        
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
              this.itens[itemCarrinho].qtd += item.qtd;
              contador = 1;
            }
        }
        if(contador == 0) {
            this.itens.push(item)
        }

        this.qtd += item.qtd
        this.valor += item.preço * item.qtd;
    }
    
    removerItem(item){

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj){return obj.id == item.id})

                this.qtd -= this.itens[itemCarrinho].qtd
                this.valor -= this.itens[itemCarrinho].preço * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: 'banana',
        qtd: 2,
        preço: 20

    },
    {
        id: 02,
        nome: 'leite',
        qtd: 4,
        valor: 30
    }
], 6, 160 )

console.log(carrinho)

carrinho.adicionarItem({id: 01, nome:'banana', qtd:1, preço: 10})

console.log(carrinho)

carrinho.adicionarItem({id:03, nome:'chocolate', qtd:2, preço: 5})

console.log(carrinho)

carrinho.removerItem({id:01, nome:'banana', qtd:2, preço:20})

console.log(carrinho)

//3

class Endereço{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    mudarRua(novaRua){
        this.rua = novaRua;
    }
    mudarBairro(novoBairro){
        this.bairro = novoBairro;
    }
    mudarCidade(novaCidade){
        this.cidade = novaCidade;
    }
    mudarEstado(novoEstado){
        this.estado = novoEstado;
    }

}

let endereço = new Endereço('conjunto V', 'Psul', 'Ceilandia', 'DF')
console.log(endereço)

endereço.mudarRua('conjunto C')
console.log(endereço)

endereço.mudarEstado('RIO')
console.log(endereço)

//3

class Car{
    constructor(marca, cor, gasolinaRestante, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    Dirigir(km){
        let litrosConsumidos = km / this.consumo

        this.gasolinaRestante -= litrosConsumidos
    }

    abastecer(l){
        this.gasolinaRestante += l;
    }
}

let car = new Car('BMW', 'Vermelho', 120, 14)
console.log(car)

car.Dirigir(100)
console.log(car)

car.abastecer(10)
console.log(car)


//4

class ContaBancaria{
    constructor(saldoCorrente, saldoPoupança, jurosPoupança){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupança = saldoPoupança;
        this.jurosPoupança = jurosPoupança;

    }

    sacarDinheiro(valor){
        this.saldoCorrente -= valor;
    }

    depositarDinheiro(valor){
        this.saldoCorrente += valor
    }
    
    transferir(valor){
        this.saldoCorrente -= valor;
        this.saldoPoupança += valor;
    }

    juros(){
        let juross = (this.saldoPoupança * this.jurosPoupança) / 100;
        this.saldoPoupança += juross
    }
}

let contaBancaria = new ContaBancaria(1000, 500, 1)

console.log(contaBancaria)

contaBancaria.sacarDinheiro(100)
console.log(contaBancaria)

contaBancaria.depositarDinheiro(500)
console.log(contaBancaria)

contaBancaria.transferir(200)
console.log(contaBancaria)

contaBancaria.juros()
console.log(contaBancaria)

class ContaEspecial extends ContaBancaria{
    constructor(saldoCorrente, saldoPoupança, jurosPoupança){
        super(saldoCorrente, saldoCorrente, jurosPoupança*2)
    }
}

let contaEspecial = new ContaEspecial(100, 200, 1)
console.log(contaEspecial)

contaEspecial.depositarDinheiro(1000)
console.log(contaEspecial)


