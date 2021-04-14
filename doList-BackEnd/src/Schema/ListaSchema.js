// Arquivo que gera a lista com seus devidos dados no banco não relacional

import mongoose from 'mongoose';

const ListaSchema = new mongoose.Schema(
  {
    nome: { type: String },
    descricao: { type: String },
    data: { type: String }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Lista', ListaSchema);