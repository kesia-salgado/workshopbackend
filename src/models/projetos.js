import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({
    titulo: { type: String, required: true},
    imagem: { type: String},
    tecnologias: [{ type: String}], // o método /{ que utiliza chaves e colchetes, significa array.//
    descricao: { type: String },
    categoria: { type: String, required: true},
    data: { type: Date},
    concluído: { type: Boolean},
    link: { type: String},
})

const Projeto = mongoose.model("Projeto", projetoSchema);

export default Projeto;