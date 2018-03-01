const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/posts')
const Post = require('../models/post');
const Comment = require('../models/comment');
// posts
router.get('/',  (req, res) => {

    Post.find({}, (err, posts) => {
        if(err) return res.status(500).send({message: `error al obtener todos los posts ${err}`})
        if(posts) {
            res.render('index', { posts })
        } else {
            return res.status(404).send({message: 'no existe ningun post'})
        }
    })
});

router.get('/one-posts/:id', (req, res) => {
    console.log(req.params.id);
    
    let postId = req.params.id;
    Post.findById(postId, (err, post) => {
        if(err) return res.status(500).send({message: `error al obtener todos los posts ${err}`})
        if(post) {

         Comment.find({post: postId}, (err, comments) => {
            if(err) return res.status(500).send({message: `error al obtener todos los comentarios ${err}`}); 

            res.render('detalles', { 
                post,
                comments
             })
        })
        } else {
            return res.status(404).send({message: 'este post no existe'})
        }
    })
});

router.get('/delete/:id', (req, res) => {
    let commentId = req.params.id;
    Comment.remove({_id: commentId}, (err) => {
        if(err) return res.status(500).send({message: `error al eliminar ${err} `})
        res.redirect('/')
    })
})

// comments
router.post('/save-comment/:id', (req, res) => {
    let postId = req.params.id;
    let comment = new Comment();
    comment.nombre = req.body.name;
    comment.contenido = req.body.text;
    comment.post = postId
    comment.save((err, commentStored) => {
        if(err) return res.status(500).send({message: `error al obtener todos los posts ${err}`});
        res.redirect('/')
    })

})

module.exports = router