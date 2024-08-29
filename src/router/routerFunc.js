const {  validateFunc, validateFuncId } = require('../middlewares/Validate');
const FuncionarioController = require('../controller/FuncionarioController');
const {Router} = require('express');


const router = Router();

router.post('', validateFunc, (req, res)=>{
    FuncionarioController.create(req,res)
});

router.get('', (req, res)=>{
    FuncionarioController.getAll(req,res)
});

router.delete('/:id', validateFuncId, (req, res)=>{
    FuncionarioController.delete(req, res)
});

router.get('/:id', validateFuncId, (req, res)=>{
    FuncionarioController.getOne(req, res)
});

router.put('/:id', validateFunc,  validateFuncId, (req, res)=>{
    FuncionarioController.update(req, res)
});

module.exports = router;