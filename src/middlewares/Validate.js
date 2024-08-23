//nome, senha, email 

const validateUser = (req, res, next) => {
    const { nome, senha, email } = req.body;

    if(!nome || !senha || !email){
        return res.status(404).json({
            msg:"Campos invalidos, revise caro amigo.",
        });
    }
    // pode avancar
    return next();
};

const ValidateUserId = (req, res, next) =>{
    const {id} = req.params;

    if(!id){
        return res.status(404).json({
            msg:"Parametro faltando"
        });
    }

    return next();
};

const validateProduto = (req, res, next) => {
    const { nome, preco, quantidade } = req.body;
    if(!nome || !preco || !quantidade ){
        return res.status(404).json({
            msg:"Campos invalidos, revise caro amigo."
        });
    }
};

const validateProdutoId = (req, res, next) =>{
    const { id } = req.params;
    if(!id){
        return res.status(404).json({
            msg:"Parametro faltando"
        });
    }
};

const validateFunc = (req, res, next) =>{
    const {nome, idade, cargo, salario} = req.body;

    if(!nome || !idade || !cargo || !salario){
        return res.status(404).json({
            msg:"Campos invalidos, revise caro amigo."
        });

    }
};

const validateFuncId = (req, res, next) => {
    const { id } = req.params;

    if(!id){
        res.status(404).json({
            msg:"Parametro faltando."
        });
    }
};

module.exports = { validateUser, ValidateUserId, validateProduto, validateProdutoId,  validateFunc, validateFuncId};
