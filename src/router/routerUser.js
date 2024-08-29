const UserController = require('../controller/UserController');
const {Router} = require('express');
const { validateUser, ValidateUserId } = require('../middlewares/Validate');
const router = Router();

router.post('', validateUser, (req, res)=>{
    UserController.create(req, res)
});

router.get('', (req, res)=>{
    UserController.getAll(req, res)
});

router.delete('/:id', ValidateUserId, (req, res)=>{
    UserController.delete(req, res)
});

router.put('/:id', validateUser, ValidateUserId, (req, res)=>{
    UserController.update(req, res)
});

router.get('/:id', ValidateUserId, (req, res)=>{
    UserController.getOne(req, res)
});

module.exports = router;
