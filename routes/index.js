var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/crear-jugador', function(req, res) {
  models.Usuario.create({
    usuario: req.body.jugador_usuario,
    clave: req.body.jugador_password,
    nombre: req.body.jugador_nombre,
    email: req.body.jugador_email,
    perfil: req.body.jugador_perfil
  }).then(function(usuario) {

    /*
     console.log(usuario.get({
     plain: true
     }))
     */

    res.send(
        usuario.get({
          plain: true
        })
    );

  });
});

router.get('/ver-jugadores', function(req, res) {

  models.Usuario.findAll().then(function(usuarios) {
    res.render('ver-jugadores', { usuarios: usuarios });
  });

});










module.exports = router;
