const express = require('express');
const route = express.Router();

const usuarios = [
    {id: 1, nombre:'One'},
    {id:2, nombre:'Two'},
    {id:3, nombre:'Three'}
];


route.get('/', (req, res) => {
    res.send('Hello wordl');
});

route.get('/', (req, res) => {
    res.send(['Arriondo', 'Jeremias']);
});

route.get('/', (req, res) => {
    let usuario = usuarios.find(user => user.id === parseInt(req.params.id));
    if (!usuario) {
        res.status(404).send('El usuario no existe')
    }
    res.send(usuario);
});

route.post('/', (req, res) => {
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario)
})

module.exports = route;