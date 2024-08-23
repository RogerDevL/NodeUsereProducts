const ProdutosController = require('../controller/ProdutosController');
const { validateProduto, validateProdutoId } = require('../middlewares/Validate');
const {Router} = require('express');


const router = Router();


router.post('/produtos/', validateProduto, (req, res)=>{
    ProdutosController.create(req, res)
})
router.get('/produtos/', (req, res)=>{
    ProdutosController.getAll(req, res);
});

router.delete('/produtos/:id', validateProdutoId, (req, res)=>{
    ProdutosController.delete(req, res);
});

router.get('/produtos/:id', validateProdutoId, (req, res)=>{
    ProdutosController.getOne(req, res)
});

router.put('/produtos/:id', validateProduto, ValidateUserId, (req, res)=>{
ProdutosController.update(req, res);
});
