const express = require('express');
//Instanciamos express
const app = express();

app.get('/', (req, res) => {
    res.send('Hello wordl');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['Arriondo', 'Jeremias']);
})

//Creando una variable de entorno
const port = process.env.PORT || 5000;

//Configuramos el puerto
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
})
