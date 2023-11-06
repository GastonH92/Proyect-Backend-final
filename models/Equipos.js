const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    copasInternacionales: {
        type: Number,
        required: true,
    },
    
});


const Equipo = mongoose.model('Equipo', equipoSchema);

module.exports = Equipo;