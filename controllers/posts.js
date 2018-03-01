const Post = require('../models/post');
const Comment = require('../models/comment');
// post 
function getAll(req, res) {
    Post.find({}, (err, posts) => {
        if(err) return res.status(500).send({message: `error al obtener todos los posts ${err}`})
        if(posts) {
            return res.status(200).send({posts})
        } else {
            return res.status(404).send({message: 'no existe ningun post'})
        }
    })
}

function getOnePost(req, res) {
    let postId = req.params.id;
    Post.findById(postId, (err, post) => {
        if(err) return res.status(500).send({message: `error al obtener todos los posts ${err}`})
        if(post) {
            return res.status(200).send({post})
        } else {
            return res.status(404).send({message: 'este post no existe'})
        }
    })
}

function savePost(req, res) {
    
    let post = new Post();
    post.titulo = req.body.titulo;
    post.imagen = req.body.imagen;
    post.autor = req.body.autor;
    post.contenido = req.body.contenido
    post.save((err, postStored) => {
        if(err) return res.status(500).send({message: `error al guardar el post ${err} `})
        return res.status(200).send({postStored})
    })
}



module.exports = {
    getAll,
    getOnePost,
    savePost
}