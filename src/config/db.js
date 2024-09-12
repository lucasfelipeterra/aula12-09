const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
        process.exit(1);
    }
};

connectDB();

module.exports = mongoose;
