const express = require('express')
const app = express()
//const db = require('./models')

app.use(express.urlencoded({extended:false}))

app.get('/', (req,res) => {
    res.send("API")
})

app.use('/coffees', require('./controllers/coffee'))

app.listen(3000, () => {
    console.log("Touching coffee API");
})