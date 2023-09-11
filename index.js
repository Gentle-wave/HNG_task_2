const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
require ('dotenv').config()

const app = express()

let corsOption = {
    origin: 'http://localhost:8081'
}

const db = require('./models')
db.sequelize.sync({force: true})
.then(() => {
    console.log("Database connected")  //successfull connection
})
.catch((err) => {
    console.error(`Error connecting database ${err.message}`)
})

app.use(cors(corsOption))

//parse request of content_type application/json
app.use(express.json())

//parse request of content_type aplication/x-www-form-urllencoded
app.use(express.urlencoded({extende: true}))


app.get('/', (req, res)=> {
    res.json({
       message: 'welcome to Adebayo\'s HNG stage 2 task homepage'
    })
   })
   

 require('./routes/person.route.js')(app)

app.listen(process.env.PORT || 4000, () => {
    console.log('server is running on port: 4000 ')
})