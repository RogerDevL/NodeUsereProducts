const { Router } = require ('express');
const userRoutes = require('./routerUser');
const produtosRoutes = require('./routerProdutos');
const funcionariosRoutes = require('./routerFunc')

const ProdutosController = require('../controller/ProdutosController');
const { validateUser, ValidateUserId, validateProduto, validateProdutoId, validateFunc, validateFuncId } = require('../middlewares/Validate');
const FuncionarioController = require('../controller/FuncionarioController');

const router = Router();

router.use('/user/', userRoutes);

router.use('/produtos/', produtosRoutes);

router.use('/funcionarios/', funcionariosRoutes);










module.exports = router;