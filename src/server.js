const express = require('express');
const router =  require('./router/router');
const sequelize = require('./config/config');
const User = require('./models/User');
const Produtos = require('./models/Produtos');
const Funcionario = require('./models/Funcionario');



const app = express();
 

//modelo API json
app.use(express.json());

// rota de Users
app.use('/api/', router);

// rota de Produtos
// app.use('/api/produtos', routerProduto)


// rotas 
//req -> requisicao
//res -> Reponse
app.get('/healthcheck', (req, res) => {

    // 200 -> Ok
    return res.status(200).json({
        message: 'Estamos vivos',
        alive: true
    });
});


//Conectar ao banco de dados
sequelize.authenticate()
.then(async ()=>{
    console.log("conexao estabelecida com sucesso!");
    await sequelize.sync();
})

//Listen -> ouvindo na porta 8080
.then(()=>{
    app.listen(8080, ()=>[
        console.log('###############################'),
        console.log('Estamos onlines na http://localhost:8080'),
        console.log('###############################')
    ]);
})



 //encerra o processo se houver um erro
.catch((error)=>{
    console.error("Erro ao se conectar com o banco:", error);
});




