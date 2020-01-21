const express = require('express');
const router = express.Router();

const usuariosModel = require("../models/usuarios");

router.get('/', function (req, res, next) {
    usuariosModel
        .obtener()
        .then(usuarios => {
            res.render("usuarios/ver", {
                usuarios: usuarios,
            });
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo usuarios");
        });

});
router.get('/agregar', function (req, res, next) {
    res.render("usuarios/agregar");
});
router.post('/insertar', function (req, res, next) {

    const { firstname, lastname } = req.body;
    if (!firstname || !lastname) {
        return res.status(500).send("No hay firstname o lastname");
    }

    usuariosModel
        .insertar(firstname, lastname)
        .then(idUsuarioInsertado => {
            res.redirect("/usuarios");
        })
        .catch(err => {
            return res.status(500).send("Error insertando usuario");
        });
});
router.get('/eliminar/:id', function (req, res, next) {
    usuariosModel
        .eliminar(req.params.id)
        .then(() => {
            res.redirect("/usuarios");
        })
        .catch(err => {
            return res.status(500).send("Error eliminando");
        });
});
router.get('/editar/:id', function (req, res, next) {
    usuariosModel
        .obtenerPorId(req.params.id)
        .then(usuario => {
            if (usuario) {
                res.render("usuarios/editar", {
                    usuario: usuario,
                });
            } else {
                return res.status(500).send("No existe usuario con ese id");
            }
        })
        .catch(err => {
            return res.status(500).send("Error obteniendo usuario");
        });
});
router.post('/actualizar/', function (req, res, next) {

    const { id, firstname, lastname } = req.body;
    if (!firstname || !lastname || !id) {
        return res.status(500).send("No hay suficientes datos");
    }
    usuariosModel
        .actualizar(id, firstname, lastname)
        .then(() => {
            res.redirect("/usuarios");
        })
        .catch(err => {
            return res.status(500).send("Error actualizando el usuario");
        });
});

module.exports = router;
