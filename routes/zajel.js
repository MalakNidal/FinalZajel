const express = require('express')
const Message = require('../models/zajelDB')
const router = express.Router()

router.get('/', (req, res) => {
    message = [{
        body: 'Message Body'
    }]
    res.render('page2', { message: message })
})

router.get('/:id',async (req, res) => {
    const message = await Message.findById(req.params.id)
    res.render('page2' , { message: message})
})

router.post('/', async(req, res) => {
    let message = new Message({
       body: req.body.body
    })
    try {
    message = await message.save()
    res.redirect(`/zajel/${message.id}`)
    } catch (e) {
        console.log(e)
        res.render('page1', { message: message })
    }
})


router.delete('/:id', async(req, res) => {
    await Message.findOneAndDelete(req.params)
    res.redirect('/')
})

module.exports = router