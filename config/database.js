const mongoose = require("mongoose")

const connection = async () => { 
    try {

        await mongoose.connect ("mongodb+srv://gabrielasantanamaiamaia:cm9k3oF1uwV5n9q5@cluster0.2vhj9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Banco conectado! ")
   
    } catch (err){ 
        console.error (err)
        process.exit(1)
    }
}; 

module.exports = connection