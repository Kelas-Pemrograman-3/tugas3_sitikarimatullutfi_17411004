const dosen = require('express').Router()
const dosencontroller = require('../controller/dosencontroller/')

dosen.post('simpan',(req, res)=>{
    dosencontroller.simpan(req,body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = dosen