//calling library 
const express = require('express')

const path=require('path')

const bodyParser=require('body-parser')
// execute express
const app=express()
//initiate default port
const defaultPort=3000
//import route dari config/routes
const router=require('./config/routes')

//set static front end
app.use(express.static(path.join(__dirname,'public')))
app.use('/node_modules', express.static(__dirname + 'node_modules'))


//parsing body
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//add router to express
app.use('/api', router)
// set express to running on port 3000
const server =app.listen(defaultPort,()=>{
    const port=server.address().port

    console.log(`magic happen on port:${port}`)
})