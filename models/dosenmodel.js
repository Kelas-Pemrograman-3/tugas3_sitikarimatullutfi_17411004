const mongoose = require('mongoose')
const Schema = mongoose.Schema
const DosenSchema = new Schema({
    id:{
        type: String
    },
    namads:{
        type: String
    },
    mk:{
        type: String
    },
    jam:{
        type: String
    },
    hari:{
        type: String
    },
    ruangan:{
        type: String
    }
})

module.exports = mongoose.model('dosen', DosenSchema)