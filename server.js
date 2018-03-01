const mongoose = require('mongoose');
const config = require('./config')
const app = require('./app')

mongoose.connect(config.db)
    .then(() => {
        console.log('conexion con la base de datos establecida');
        app.listen(config.port, () => {
            console.log(`server is listening on port ${config.port}`);
            
        })
    })