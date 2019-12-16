const mahasiswa = require('express')()
const mahasiswaController = require('../controller/mahasiswacontroller')

mahasiswa.post('/insert', (req, res) => {
    console.log(req.body);
    mahasiswaController.insertMahasiswa(req.body)
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})
mahasiswa.post('/login', (req, res) => {
    mahasiswaController.login(req.body)
    .then(result => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
mahasiswa.get('/getAllMhs', (req, res) => {
    mahasiswaController.getAllMahasiswa()
    .then(result => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = mahasiswa