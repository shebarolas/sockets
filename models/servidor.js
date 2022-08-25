const cors = require('cors');
const express = require('express');
// const passport = require('passport');
// const session = require('express-session');
const http = require('http');
const io_Server = require('socket.io');
const {socketController} = require('../sockets/socket.controller')

class Servidor {
    constructor(){

        this.app = express();
        this.server = http.createServer(this.app);
        this.io = io_Server(this.server);

        this.middleware();

        this.routes();

        this.sockets();
      



    }

    middleware(){

        this.app.use(cors());

        this.app.use(express.json());

        // this.app.use(session({secret : 'zorro'}));
        // this.app.use(passport.initialize());
        // this.app.use(passport.session());
        // Directorio Público
        this.app.use( express.static('public') );



    }

    routes(){
        
    }

    sockets(){

        this.io.on('connection', socketController);

    }    

    listen(){
        this.server.listen(process.env.PORT || 7000, () => {
            console.log("Servidor corriendo en el puerto 7000");
        })
    }
}

module.exports = Servidor;