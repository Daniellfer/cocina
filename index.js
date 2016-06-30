//importar express para la comunicación de la aplicación 
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 7000));

//carpeta estática donde se van a ubicar los asets
app.use(express.static(__dirname + '/public'));

// directorio de las los templates de las vistas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//directorio del archivo donde sestan las rutas
require('./app/frontend/routes.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


