const express = require("express");
const connection = require("./config/database"); 
const app = express(); 
const router = express.Router(); 
const produtoRoutes = require("./routes/produtoRoutes"); 
const port = 3000;
connection(); 

router.use("/produtos", produtoRoutes)

app.get("/", (req, res) => {
  res.send("hello world.");
});

app.use(express.json())
app.use(router) 


app.listen(port, () => {
  console.log("servidor rodando na porta 3000");
}); 