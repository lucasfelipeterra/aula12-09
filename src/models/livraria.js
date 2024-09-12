const db = require("../config/db.js");
const Schema = db.Schema;

const livrariaSchema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: Object, required: true, minLength: 8, maxLength: 8 },
    ano: { type: String, required: true },
    genero: { type: String, required: true },
});
console.log("Conectado");
const Livro = db.model("livraria", livrariaSchema);

module.exports = Livro;