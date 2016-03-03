var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/login.html');
});

router.post('/', function(req, res, next) {

    var usuario = req.body.jugador_usuario;
    var password = req.body.jugador_password;

    var usuarios = {
        "usuario1": {
            "usuario": "richard",
            "password": "richard"
        },
        "usuario2": {
            "usuario": "rianjara",
            "password": "password"
        }
    }

    for( var i in usuarios  ){

        if( usuarios[i].usuario == usuario && usuarios[i].password == password ){
            req.session.usuario = usuarios[i].usuario;
            break;
        }
    }

    res.redirect('/');
});

module.exports = router;