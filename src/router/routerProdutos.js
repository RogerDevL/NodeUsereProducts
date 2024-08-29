const ProdutosController = require('../controller/ProdutosController');
const { validateProduto, validateProdutoId } = require('../middlewares/Validate');
const {Router} = require('express');


const router = Router();


router.post('', validateProduto, (req, res)=>{
    ProdutosController.create(req, res)
})
router.get('', (req, res)=>{
    ProdutosController.getAll(req, res);
});

router.delete('/:id', validateProdutoId, (req, res)=>{
    ProdutosController.delete(req, res);
});

router.get('/:id', validateProdutoId, (req, res)=>{
    ProdutosController.getOne(req, res)
});

router.put('/:id', validateProduto, validateProdutoId, (req, res)=>{
ProdutosController.update(req, res);
}); 

module.exports = router;