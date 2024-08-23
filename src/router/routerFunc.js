const {  validateFunc, validateFuncId } = require('../middlewares/Validate');
const FuncionarioController = require('../controller/FuncionarioController');

const {Router} = require('express');


const router = Router();

router.post('/funcionarios/', validateFunc, (req, res)=>{
    FuncionarioController.create(req,res)
});

router.get('/funcionarios/', (req, res)=>{
    FuncionarioController.getAll(req,res)
});

router.delete('/funcionarios/:id', validateFuncId, (req, res)=>{
    FuncionarioController.delete(req, res)
});

router.get('/funcionarios/:id', validateFuncId, (req, res)=>{
    FuncionarioController.getOne(req, res)
});

router.put('/funcionarios/:id', validateFunc,  validateFuncId, (req, res)=>{
    FuncionarioController.update(req, res)
});