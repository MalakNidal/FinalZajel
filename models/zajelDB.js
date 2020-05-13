const mongoose = require('mongoose')

const zajelSchema = new mongoose.Schema({
    body: {
        type: String
    }
})

module.exports = mongoose.model('Message', zajelSchema)