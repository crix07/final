const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    titulo: { type: String, required: true },
    imagen: { type: String, required: true },
    autor: { type: String, required: true },
    contenido: { type: String, required: true },
})

module.exports = mongoose.model('post', PostSchema)