const dosenmodel = require('../models/dosenmodel/')
const mongoose = require('mongoose')

exports.simpan = (data) =>
new Promise((resolve, reject)=>{
    dosenmodel.create(data)
    .then(res =>{
        resolve({error:false, pesan: 'data tersimpan'})
    })
    .catch(res =>{
        reject({error:true, pesan: 'data tidak tersimpan'})
    })
})