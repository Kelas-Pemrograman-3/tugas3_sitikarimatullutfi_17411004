const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matakuliahSchema = new Schema({
    namaMK:{
        type: String
    },
    jamMK:{
        type: String
    },
    Hari:{
        type: String
    },
    Ruangan: {
        type: String
    },
    idDosen: {
        type: String
    },
    NamaDosen: {
        type: String
    }
})

module.exports = mongoose.model('matakuliah', matakuliahSchema)