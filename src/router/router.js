const { Router } = require ('express');
const userRoutes = require('./routerUser');
const produtosRoutes = require('./routerProdutos');
const funcionariosRoutes = require('./routerFunc')
const UserController = require('../controller/UserController');
const authenticateToken = require('../middlewares/authenticateToken');
const uploadRouter = require('./routerUpload');

// const ProdutosController = require('../controller/ProdutosController');
// const { validateUser, ValidateUserId, validateProduto, validateProdutoId, validateFunc, validateFuncId } = require('../middlewares/Validate');
// const FuncionarioController = require('../controller/FuncionarioController');

const router = Router();

router.use('/image', uploadRouter);

router.use('/user', userRoutes);

router.post('/login',  (req, res) =>{
    UserController.login(req, res)
});

router.use('/produtos/', produtosRoutes);

router.use('/funcionarios/', funcionariosRoutes);






module.exports = router;