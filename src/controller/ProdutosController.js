const Produtos = require("../models/Produtos");
const ProdutosController = {

    create: async(req, res)=>{

        try {
            const {nome, preco, quantidade} = req.body;
            const produtoCriado = await Produtos.create({nome, preco, quantidade});

            return res.status(200).json({
                msg: "Produto criado",
                product: produtoCriado
            })
        } catch (error) {
            res.status(500).json({
                msg:"Contate o roger..."
            })
            
        }
    },

    update: async(req, res)=>{

        try {
            const { id } = req.params;
            const {nome, preco, quantidade} = req.body;
            const produtoAtualizado = await Produtos.findByPk(id);
            
            if(produtoAtualizado === null){
                res.status(404).json({
                    msg:"Usuario inexistente"   
                })
            }
            produtoAtualizado = nome;
            produtoAtualizado = preco;
            produtoAtualizado = quantidade;


            return res.status(200).json({
                msg: "produto atualizado",
                produtoAtualizado
            })

            
            
        } catch (error) {
            
        }

    },

    getAll:async(req, res)=>{
        try {

            const listarTodos = await Produtos.findAll();

            return res.status(200).json({
                msg:"Todos usuarios",
                listarTodos
            })
            
        } catch (error) {
            
        }

    },

    getOne:async(req, res)=>{

    },

    delete:async(req, res)=>{

    }
}
module.exports = ProdutosController;




