//console .log("Hola Mundo desde NodeJS")

const express = require("express");
const mongoose = require("mongoose");
const TareaSchema = require("./modelos/Tarea.js");


const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Conexion a Base de datos
mongoose.connect("mongodb+srv://Eduarts:soporte2021@clusterc4g6.aceia.mongodb.net/ActividadesBD?retryWrites=true&w=majority")


// Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.get('/tarea', (req, res) => {
    TareaSchema.find(function(err, datos)
    {
        if (err)
        {
            console.log("Error leyendo los registros");
        }
        else
        {
            res.send(datos);
        }
    })
});


 router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        OfertaLaboralTarea: req.body.OfertaLaboral,
        tipoDocumentoTarea: req.body.tipoDocumento,
        DocumentoIdentificacionTarea: req.body.DocumentoIdentificacion,
        NombresTarea: req.body.Nombres, 
        ApellidosTarea: req.body.Apellidos,
        DireccionTarea: req.body.Direccion,
        CorreoTarea: req.body.Correo,
        TelefonoTarea: req.body.Telefono,
        MovilTarea: req.body.Movil,
        SitioWebTarea: req.body.SitioWeb,
        DescripcionPerfilTarea: req.body.DescripcionPerfil

    });

    nuevaTarea.save(function(err, datos)
    {
        if (err)
            {
                console.log(err);
            }
        res.send("Registro Almacenado Correctamente.")    
    })

});


app.use(router);


app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});
