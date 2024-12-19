const mongoose = require("mongoose")

const ProdutoSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId, 
        auto: true 
    },
    nome: {
        type: String, 
        required: true,
    }, 
    descricao: {
        type: String, 
        required: true,
    },
    quantidade: {
        type: Number, 
        required: true,
    },
    foto: {
        type: String, 
        required: true,
    }
})

const Produto = mongoose.model("Produto", ProdutoSchema);
module.exports = Produto; 