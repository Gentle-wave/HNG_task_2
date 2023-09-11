const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
require ('dotenv').config()

const app = express()

let corsOption = {
    origin: 'http://localhost:8081'
}

const db = require('./models')
db.sequelize.sync({})
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


app.get('/api', (req, res)=> {
    res.json({
       message: 'welcome homepage please navigate to the endpoint you wish to access'
    })
   })

app.get('/', (req, res)=> {
    res.json({
       message: 'welcome to Adebayo\'s HNG stage 2 task homepage'
    })
   })
   

 require('./routes/person.route.js')(app)

app.listen(process.env.PORT || 5432, () => {
    console.log('server is running on port:'+ process.env.PORT)
})
