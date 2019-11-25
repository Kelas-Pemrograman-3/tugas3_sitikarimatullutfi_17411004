const matakuliah = require('express').Router()
const matakuliahcontroller = require('../controller/matakuliahcontroller')

matakuliah.post('/simpan', (req , res)=>{
    matakuliahcontroller.simpan(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = matakuliah