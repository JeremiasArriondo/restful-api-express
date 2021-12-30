const debug = require('debug')('app:inicio');
const express = require('express');
const config = require('config');
//Instanciamos express
const app = express();
const morgan = require('morgan');

//Especificamos un middlewares para manipular datos(body)
app.use(express.json);
//Middlewares para recibir datos del tipo key y value
app.use(express.urlencoded({extended: true}));
//Middlewares static, me permite acceder mas facilmente a recursos publicos
app.use(express.static('public'));

//configuracion de entorno
console.log('Aplicación '+ config.get('nombre'));

//Uso de un middleware de tercero
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //con la funcion vamos a ir mostrando la depuración
    debug('Morgan está habilitado');
};

const usuarios = [
    {id: 1, nombre:'One'},
    {id:2, nombre:'Two'},
    {id:3, nombre:'Three'}
];


app.get('/', (req, res) => {
    res.send('Hello wordl');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['Arriondo', 'Jeremias']);
});

app.get('/api/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(user => user.id === parseInt(req.params.id));
    if (!usuario) {
        res.status(404).send('El usuario no existe')
    }
    res.send(usuario);
});

app.post('/api/usuarios', (req, res) => {
    const usuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre
    };
    usuarios.push(usuario)
})

//Creando una variable de entorno
const port = process.env.PORT || 5000;

//Configuramos el puerto
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})
