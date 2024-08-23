const Funcionario = require("../models/Funcionario");

const FuncionarioController = {
    create:async(req,res) =>{

        try {
        
            const { nome, idade, cargo, salario } = req.body;

            const funcionarioCriado = await Funcionario.create({nome, idade, cargo, salario})


            return res.status(200).json({
                msg:"Usuario deletado",
                funcionarioCriado
            })
        } catch (error) {
            res.status(500).json({
                msg:"contate o Roger"
                }
            )
        }
    },

    update:async(req,res) =>{
        try {
            const { id } = req.params;
            const { nome, idade, cargo, salario } = req.body;

            const funcEditado = await Funcionario.findByPk(id);

            if(funcEditado == null){
                res.status(404).json({
                    msg:"Func não encontrado",
                })
            }

            funcEditado.nome = nome;
            funcEditado.idade = idade;
            funcEditado.cargo = cargo;
            funcEditado.salario = salario;

            funcEditado.save();
        

            return res.status(200).json({
                msg:"Funcionario editado",
                funcEditado
            })
        } catch (error) {
            res.status(500).json({
                msg:"contate o Roger"
                }
            )
        }

    },

    getAll: async(req, res) =>{
        try {

            const funcAll = await Funcionario.findAll();
        
            return res.status(200).json({
                msg:"Todos funcionarios",
                funcAll
            })
        } catch (error) {
            res.status(500).json({
                msg:"contate o Roger"
                }
            )
        }

    },

    getOne: async(req, res) =>{
        try {
            const { id } = req.params;

            const funcOne = await Funcionario.findByPk(id);

            return res.status(200).json({
                msg:"Funcionario encontrado",
                funcOne
            })
        } catch (error) {
            res.status(500).json({
                msg:"contate o Roger"
                }
            )
        }
    },

    delete:async(req, res) =>{
        try {

            const { id } = req.params;
            const funcDeletado = await Funcionario.findByPk(id);

            funcDeletado.destroy();

            return res.status(200).json({
                msg:"Usuario deletado",
                funcDeletado
            })
        } catch (error) {
            res.status(500).json({
                msg:"contate o Roger"
                }
            )
        }

    }
}

module.exports = FuncionarioController;