const ProdutoService = require("../service/ProdutoService")

module.exports = { 
    async criarProduto(req, res){
        try{
            const produto = await ProdutoService.criarProduto(req.body)
            res.status(201).json(produto)
        }
        catch (err){
            res.status(500).json({err: err.message})
        }
    }, 
    async visualizarProdutos(req,res){
        try{
            const produtos = await ProdutoService.visualizarProdutos()
            res.status(200).json(produtos)
        }
        catch (err){
            res.status(500).json({err: err.message})
        }
    }, 

    async visualizarProdutoID(req,res){
        try{
            const id = req.params.id; 
            const produto = await ProdutoService.visualizarProdutoID(id)
            res.status(200).json(produto)
        }
        catch(err){
            res.status(500).json({err: err.message})
        }
    }, 
    async editarProduto(req, res){
        try{
            const id = req.params.id; 
            const dados = req.body; 
            const produto = await ProdutoService.editarProduto(id,dados)
            res.status(200).json(produto)
        }
        catch (err){
            res.status(500).json({err: err.message})
        }
    },

    async deletarProduto(req, res){
        try{
        const id = req.params.id; 
        const produtoDeletado = await ProdutoService.deletarProduto(id)
        res.status(200).json({
            mensagem: "Produto deletado.", 
            produto: produtoDeletado, 
        })
        }
        catch (err){
        res.status(500).json({err: err.message})

        }
    }
 
}