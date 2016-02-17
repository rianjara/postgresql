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
    /* console.log(usuario.get({ plain: true })) */
    res.send(
        usuario.get({
          plain: true
        })
    );
  });
});

router.post('/crear-equipo', function(req, res) {
  models.Equipo.create({
    nombre: req.body.equipo_nombre,
  }).then(function(equipo) {
    /* console.log(usuario.get({ plain: true })) */
    res.send(
        equipo.get({
          plain: true
        })
    );
  });
});

router.get('/jugadores-no-asociados', function(req, res) {
  models.Usuario.findAll({
    where: {
      EquipoId: null
    }
  }).then(function(usuarios) {
    res.render('ver-jugadores', { usuarios: usuarios });
  });
});

router.get('/ver-jugadores', function(req, res) {
  models.Usuario.findAll().then(function(usuarios) {
    res.render('ver-jugadores', { usuarios: usuarios });
  });
});

router.get('/ver-equipos', function(req, res) {
  models.Equipo.findAll().then(function(equipos) {
    res.render('ver-equipos', { equipos: equipos });
  });
});






module.exports = router;
