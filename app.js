const express = require('express');
const mongoose = require('mongoose');
//Instanciamos express
const app = express();

const config = require('config');
const usuarios = require('./routes/usuarios')

//const morgan = require('morgan');
//const debug = require('debug')('app:inicio');
//Especificamos un middlewares para manipular datos(body)
app.use(express.json);
//Middlewares para recibir datos del tipo key y value
app.use(express.urlencoded({extended: true}));
//Middlewares static, me permite acceder mas facilmente a recursos publicos
app.use(express.static('public'));

app.use('/api/usuarios', usuarios);


//configuracion de entorno
console.log('Aplicación '+ config.get('nombre'));

//Uso de un middleware de tercero
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //con la funcion vamos a ir mostrando la depuración
    debug('Morgan está habilitado');
};


//Creando una variable de entorno
const port = process.env.PORT || 5000;

//Configuramos el puerto
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})
