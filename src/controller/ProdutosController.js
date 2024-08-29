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
            produtoAtualizado.nome = nome;
            produtoAtualizado.preco = preco;
            produtoAtualizado.quantidade = quantidade;

            produtoAtualizado.save();

            return res.status(200).json({
                msg: "produto atualizado",
                produtoAtualizado
            })

           
            
            
        } catch (error) {
            res.status(200).json({
                msg:"Contate o roger"
            })
            
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

        try {
            const { id } = req.params;

            const produtoEspecifico = await Produtos.findByPk(id);


            return res.status(200).json({
                msg:"Usuario encontrado",
                product: produtoEspecifico
            })
        } catch (error) {
            
        }

    },

    delete:async(req, res)=>{
        try {
            const { id } = req.params;

            const produtoDeletado = await Produtos.findByPk(id);
            produtoDeletado.destroy();


            return res.status(200).json({
                msg:"Produto deletado",
                product: produtoDeletado
            })

            


        } catch (error) {
            res.status(500).json({
                msg:"contate o Roger"
                }
            )
        }
    }
}
module.exports = ProdutosController;




