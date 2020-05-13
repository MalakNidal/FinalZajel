const express = require('express')
const mongoose = require('mongoose')
const zajelRouter = require('./routes/zajel')
const methodOverride = require('method-override')
const app = express()


mongoose.connect('mongodb://localhost/zajel', { useUnifiedTopology: true, useNewUrlParser: true })

app.set('view engine', 'ejs')

app.use(express.static("style"))
app.use(express.urlencoded({ extended: false }))
app.use('/zajel', zajelRouter)
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('page1')
})

app.listen(2000, () => {
    console.log('Server is connected!')
})



