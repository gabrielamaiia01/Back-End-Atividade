const express = require("express")
const ProdutoController = require ("../controller/ProdutoController")
const router = express.Router()

router.post("/", ProdutoController.criarProduto)
router.get("/", ProdutoController.visualizarProdutos)
router.get("/:id", ProdutoController.visualizarProdutoID)
router.put("/:id", ProdutoController.editarProduto)
router.delete("/:id", ProdutoController.deletarProduto)

module.exports = router; 