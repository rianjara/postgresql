var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      { title: 'Express',
        usuario: req.session.usuario
      }
  );
});

/*
router.get('/login', function(req, res, next) {
  res.redirect('/login.html');
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/login.html');
});

router.post('/login', function(req, res, next) {

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
*/

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

router.get('/asignar-equipos', function(req, res) {

  var hijo_value = 'roberto';
  var papa_value = 'fernando';

  var equipo_value = 'Invencibles';

  models.Usuario.findOne({
    where: {
      usuario: hijo_value
    }
  }).then(function(hijo){

    console.log(hijo);

    models.Usuario.findOne({
      where: {
        usuario: papa_value
      }
    }).then(function(papa){

      console.log(papa);

      models.Equipo.findOne({
        where: {
          nombre: equipo_value
        }
      }).then(function(equipo){

        console.log(equipo);

        equipo.update({
          puntaje: 100
        }).then(function(){
          res.send('ok');
        });
      });

    });

  });
});

module.exports = router;