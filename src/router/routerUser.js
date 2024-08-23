const UserController = require('../controller/UserController');
const {Router} = require('express');
const { validateUser, ValidateUserId } = require('../middlewares/Validate');

const router = Router();

router.post('/user/', validateUser, (req, res)=>{
    UserController.create(req, res)
});

router.get('/user/', (req, res)=>{
    UserController.getAll(req, res)
});

router.delete('/user/:id', ValidateUserId, (req, res)=>{
    UserController.delete(req, res)
});

router.put('/user/:id', validateUser, ValidateUserId, (req, res)=>{
    UserController.update(req, res)
});

router.get('/user/:id', ValidateUserId, (req, res)=>{
    UserController.getOne(req, res)
});
