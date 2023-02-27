//Js e o navegador
/*

Protocolos: uma comunicação de dados
-HTTP (usado em sites)

URL: protocolo, servidor e arquivo
http://www.horadecodar.com.br/index.html
                               
HTML: uma linguagem de marcação, para montar 
o esqueleto do site
-tags: criam titulos, paragrafos,imagens, listas e etc
<p></p>; h1 e etc
-id: so 1 id na pagina, como algo principal
-classes: grupo de elementos que compartilham o mesmo estilo

-Estrutura do html: Head e body
   Head: configuração do documento
   Body: parte visual (p,h1,div,ul,li)
     h1= titulo principal da pagina
     h2= segundo titulo da pagina
     p= paragrafo
     div= agrupa elementos
     ul= lista de itens sem ordem rigida
     li= itens da lista

HTML E JS: para ligar os dois usa a tag (script) ou
linka um arquivo .js com o atributo (src)
quando um arquivo externo é ligado é por meio de HTTP
- O arquivo src é colocado no fim o body

HTML E DOM: acessa o html atraves do DOM
é como se fosse uma copia onde vai ser feito os ajustes
então com o JS vc altera o DOM e ele altera o HTML

DOM: separa como se fosse uma arvore os elementos
e atributos do html
acesso atraves do (document)
-html=arvore
-document=raiz
-elementos=node(nó) (childNodes)
-textos e afins: leaf nodes(as folhas)

Encontrar elementos pelo DOM:
Um HTML possui tags, clasees e ids e tem alguns
metodos pra achar eles no JS
 -getElementsByTagName: encontra elementos pela tag(h1)
 -getElementsByld: encontra o unico item id da pagina
 -getElementsByClassName: encontra uma classe especifica
 -querySelector: cria um id no div num lugar estrategico pra ser puxado quando vc quisr

Alterar um elemento pelo DOM: possivel adicionar,
remover e clonar elementos 
 -insertBefore: insere algo antes do elemento alvo
 -appenChild: insere algo depois do elemento alvo
 -replaceChild: troca pelo elemento alvo
 -createElement: atribui a uma variavel e cria um elemento

Modificando e lendo atributos pelo DOM:
Pode resgatar ou trocar um valor de um atributo
  -getAttribute: pega valor
  -setAttribute: atualiza valor

Verificando altura e largura dos elementos
  -offsetWidth: largura
  -offsetHeight: altura
  -clientWidth: largura desconsiderando as bordas
  -clientHeight: altura desconsiderando as bordas
Checando posição do elemento na tela:
 - getBoudingClientRect

selecionar varios elementos com query
 - querySelectorAll


 















*/