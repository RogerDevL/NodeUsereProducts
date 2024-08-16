const User = require("../models/User");
const UserController = {
    create: async(req, res)=>{
        
        try {
            // pegando imformacoes do body, o que o usuario digitou.
            const {nome, senha, email} = req.body;
            

            const userCriado = await User.create({nome, senha, email})





            return res.status(200).json({
                msg:"USUARIO CADASTRADO",
                user: userCriado
            
        })

        } catch (error) {

            console.log(error)
            return res.status(500).json({
                msg:"Acione o suporte"
            })
            
        }
    },
    update: async(req, res)=>{

        try {

            const { id } = req.params;
            const {  nome, senha, email } = req.body;
            const usuarioEditado = await User.findByPk(id);

            if(usuarioEditado === null){
                res.status(404).json({
                    msg:"Usuario inexistente"   
                })
            }

            usuarioEditado.nome = nome;
            usuarioEditado.senha = senha;
            usuarioEditado.email = email;

            usuarioEditado.save();
             
           
            return res.status(200).json({
                msg:"USUARIO EDITADO"  
        }
    )     
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg:"Contate o Roger"
            })
        }
    },
    getAll: async(req, res)=>{
        try {

            const usuarios = await User.findAll();

            if(usuarios.length === null){
                res.status(404).json({
                    msg:"usuarios nao encontrado!!!"
                })
            }


            return res.status(200).json({
                msg:"USUARIOS ENCONTRADOS",
                user: usuarios
            
        }
    )
            
        } catch (error) {

            console.log(error)
            return res.status(500).json({
                msg:"Contate o Roger"
            })

            
        }

    },
    getOne: async(req, res)=>{

        try {
            const { id } = req.params;

            const usuarioEspecifico = await User.findByPk(id);

            if(usuarioEspecifico.length === null){
                res.status(404).json({
                    msg:"usuario não encontrado"
                })
            }


            return res.status(200).json({
                msg:"USUARIO ENCONTRADO",
                user: usuarioEspecifico

                
            
        }
    )
            
        } catch (error) {

            console.log(error)
            return res.status(500).json({
                msg:"Contate o Roger"
            })

            
        }

    },
    delete: async(req, res)=>{
        try {

            const { id } = req.params;

            const UsuarioDeletado = await User.findByPk(id);

            if(UsuarioDeletado === null){
                res.status(404).json({
                    msg:"usuario não existe"
                })
            }

            UsuarioDeletado.destroy();

           
            return res.status(200).json({
                msg:"usuario deletado"
            })
            
        } catch (error) {
            res.status(500).json({
                msg:"Contate o roger..."
            })  
        }
    }

}
module.exports = UserController;