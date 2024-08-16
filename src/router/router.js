const { Router } = require ('express');
const UserController = require('../controller/UserController');
const ProdutosController = require('../controller/ProdutosController');

const router = Router();



//Configurar as rotas crud (Users)
router.post('/user/', (req, res)=>{
    UserController.create(req, res)
});

router.get('/user/', (req, res)=>{
    UserController.getAll(req, res)
});

router.delete('/user/:id', (req, res)=>{
    UserController.delete(req, res)
});

router.put('/user/:id', (req, res)=>{
    UserController.update(req, res)
});

router.get('/user/:id', (req, res)=>{
    UserController.getOne(req, res)
});



// Rotas de Produtos
router.post('/produtos/', (req, res)=>{
    ProdutosController.create(req, res)
})
router.get('/produtos/', (req, res)=>{
    ProdutosController.getAll(req, res);
});

router.delete('/produtos/:id', (req, res)=>{
    ProdutosController.delete(req, res);
});

router.get('/produtos/:id', (req, res)=>{
    ProdutosController.getOne(req, res)
});

router.put('/produtos/:id', (req, res)=>{
ProdutosController.update(req, res);
});



module.exports = router;