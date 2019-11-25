const mahasiswaModel = require('../models/mahasiswamodel')

exports.insertMahasiswa = (data) =>
    new Promise((resolve, reject) => {
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
    })