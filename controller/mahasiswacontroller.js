const mahasiswaModel = require('../models/mahasiswamodel')
const bcrypt = require('bcryptjs')

exports.insertMahasiswa = (data) =>
    new Promise((resolve, reject) => {
        bcrypt.hash(data.password, 10, (err, hash) => {
            data.password = hash
            mahasiswaModel.find({
                npm: data.npm
            }).then(hasil => {
                if (hasil.length > 0){
                    reject({
                        error: true,
                        pesan: ' NPM sudah digunakan'
                    })
                } else {
                   mahasiswaModel.create(data)
                   .then(res => {
                       resolve({
                           error: false,
                           pesan: 'berhasil input data'
                       })
                   })
                   .catch(() => {
                       reject({
                           error: true,
                           pesan: 'gagal input data'
                       })
                   })
       
                }
            })
        })
    })
    exports.login = (data) =>
    new Promise((resolve, reject) => {
        mahasiswaModel.findOne({
            npm: data.npm
        }).then(res => {
            //console.log(res)
            if (res === null) {
                reject({
                    error: true,
                    pesan: 'username tidak trerdaftar'
                })
            } else {
                let hashPassword = res.password
                if (bcrypt.compareSync(data.password, hashPassword)) {
                    resolve({
                        error: false,
                        pesan: 'berhasil login',
                        data: res
                    })
                } else {
                    reject({
                        error: true,
                        pesan: 'Password Anda Salah'
                    })
                }
             }
        })
    })
    exports.getAllMahasiswa = () =>
    new Promise((resolve, reject) => {
        mahasiswaModel.find()
            .then(results => {
                resolve({
                    error: false,
                    pesan: 'yes berhasil ambil data',
                    data: results
                })
            })
            .catch(() => {
                reject({
                    error: true,
                    pesan: 'npm sudah digunakan'
                })
            })
    })