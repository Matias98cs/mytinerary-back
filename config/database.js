const mogosee = require('mongoose')

mogosee.connect(
    process.env.MONGO_CONECT,
    {
        useUnifiedTopology: true, //habilita a mongoose a controlar la base de datos de mongo
        useNewUrlParser: true // utiliza el analizador de errores de mongoose en lugar del de mongo
    }
    //primer parametro link de conexion
    //segundo parametro objeto con dos propiedades en true
)
.then( () => console.log('Connected to database successfully')) //luego de que se cumpla la promesa, aviso con un mensaje
.catch( error => console.log(error)) // si hay algun error muestro el error en consola

//cuanto configuro todo requiero esta config en app.js