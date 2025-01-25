const express = require('express')
const app = express()
const path = require('path')

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: '500mb'}))

app.use('/', express.static(path.join(__dirname, 'public', 'views')))

app.use('/', require('./routes/root'))

app.use('/users', require('./routes/userRoute'))

app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')) {
        res.send("File not Found")
    } else if (req.accepts('json')) {
        res.json({msg: "File not Found"})
    } else {
        res.type('txt').send("File not Found")
    }
})

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`)
})