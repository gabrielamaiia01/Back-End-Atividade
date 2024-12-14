const Produto = require ("../models/Produto")

class ProdutoService {
    static async criarProduto(dados){
        try{
            const produto = new Produto(dados)
            return await produto.save(); 
        }
        catch (err){
            throw new Error("erro ao criar o produto. " + err.message)
        }
    } 
    static async visualizarProdutos(){
        try{
            return await Produto.find()
        }
        catch(err){
            throw new Error ("erro ao buscar produto." + err.message)
        }
    }

    static async visualizarProdutoID(id){
        try{
            const produto = await Produto.findById(id) 
            if (!produto ) throw new Error ("Produto não encontrado.")
            return produto
        }
        catch(err){
            throw new Error ("erro ao encontrar produto." + err.message)
        }
    }

    static async editarProduto(id,dados){
        try{
          const produto = await Produto.findByIdAndUpdate(id,dados, {
            new: true,
          })
          if(!produto) throw new Error ("Produto não encontrado")
            return produto
        }
        catch (err){
            throw new Error("Erro ao buscar produto." + err.message)
        }
    }

    static async deletarProduto(id){
        try{
         const produto = await Produto.findById(id); 
         if (!produto) throw new Error ("Produto não encontrado!"); 
         await Produto.findByIdAndDelete(id)
         return produto
        }
        catch (err){
            throw new Error ("Erro ao encontrar produto." + err.message)
        }
    }

}

module.exports = ProdutoService; 