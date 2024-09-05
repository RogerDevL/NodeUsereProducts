const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs'); // file system
const path = require('path');

const UploadController = {

    // funcao para subir uma imagem
    uploadImage: async (req, res) =>{

        const imageName = req.file.originalname;


        // dados da imagem
        const imageData = req.file.buffer;

        // salvar imagem original no disco
        await sharp(imageData).toFile(`uploads/${imageName}`)


        return res.status(200).json({
            msg: "Imagem salva com sucesso!",
            status:200
        });
    },

    // listar imagens de uma pasta
    listImages: async(req, res) =>{
        // const fs = require('fs')
        // vai entrar na pasta uploads, err e files funcionam como um try catch
        fs.readdir('uploads/', (err, files)=>{


            // Se o err for verdade, entra neste return
            if(err){
                return res.status(500),json({
                    msg:"Erro ao listar imagens"
                });
            }

            // filtrando para subir apenas imagens png, jpeg e jpg
            const images = files.filter(
                (file) => 
                    // se o arquivo terminar com .png, pode subir a imagem
                    file.endsWith(".png") || // ou
                    file.endsWith(".jpg") ||
                    file.endsWith(".jpeg")
            );
            res.send(images);
        });
    },

    getimage: (req, res) =>{

        const imageName = req.params.imageName;
        

        // const path
        const imagePath = path.join(__dirname, '..', '..', 'uploads', imageName) 
        return res.sendFile(imagePath);
    }
}

module.exports = UploadController;