const mongoose = require('mongoose');

let TareaSchema = new mongoose.Schema
({
    idTarea: Number,
    OfertaLaboralTarea: String,
    tipoDocumentoTarea: String,
    DocumentoIdentificacionTarea: Number,
    NombresTarea: String,
    ApellidosTarea: String,
    DireccionTarea: String,
    CorreoTarea: String,
    TelefonoTarea: Number,
    MovilTarea: Number,
    SitioWebTarea: String,
    DescripcionPerfilTarea: String
});

module.exports = mongoose.model("tarea", TareaSchema, 'Tareas');