const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    nombre: { type: String, required: true },
    contenido: { type: String, required: true },
    post: { type: Schema.ObjectId, ref: 'post' }
})

module.exports = mongoose.model('comment', CommentSchema)