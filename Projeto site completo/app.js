const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const router = require('./routes/jobs');
const { patch } = require('./routes/jobs');
const Job = require('./models/Job');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;         //para a barra de busca



const PORT = 3000;
app.listen(PORT, function(){
    console.log("O express esta rodando");
});

//body parser

app.use(bodyParser.urlencoded({extended: false}));

//handle bars
app.set('views', path.join(__dirname, 'views'));   
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

//static folder

app.use(express.static(path.join(__dirname, 'public')));

//conexão com banco de dados
db
   .authenticate()
   .then(() => {
    console.log("conectou no banco")
   })
   .catch(err => {
    console.log("ocorreu o erro:", err)
   });


//rotas
app.get('/', (req, res) =>{

    let search = req.query.job;
    let query = '%'+search+'%'; // PH -> PHP, Word -> Wordpress
    
    if(!search){                      //se nao for feito pesquisa:
        Job.findAll({order: [         //puxando do banco de dados e colocando em ordem
        ['createdAt', 'DESC']
    ]})
    .then(jobs => {                  //colocando na tela os jobs
        res.render('index', {
            jobs
        })
    })
    .catch(err => console.log(err));
    } else {
        Job.findAll({
        where:{title: {[Op.like]: query}},         //Op.like para aceitar palavras parecidas    
            
        order: [         
        ['createdAt', 'DESC']
    ]})
    .then(jobs => {                 
        res.render('index', {
            jobs, search
        })
    })
    .catch(err => console.log(err))
    }
    
});

//jobs routes

app.use('/jobs', require('./routes/jobs'));

//chama









