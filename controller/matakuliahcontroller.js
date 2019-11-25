const matakuliahmodel = require('../models/matakuliahmodel')
const mongoose = require('mongoose')

exports.simpan = (data) =>
new Promise((resolve, reject)=>{
    matakuliahmodel.create(data)
    .then(res => {
        resolve({error:false, pesan: 'data tersimpan'})
    })
    .catch(res =>{
        reject({error:true, pesan: 'data gagal tersimpan'})
    })
})