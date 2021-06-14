require('dotenv').config() ;
const express = require('express')
const mongoose = require('mongoose') 
const cors = require('cors');

const app = express()

app.use(express.json({limit: '80mb'}));
app.use(express.urlencoded({limit: '80mb'}));
app.use(cors())

mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}) ;
mongoose.set('useCreateIndex',true) ;
const con = mongoose.connection

con.on('error', (err)=> {console.log('connection error:', err)});
con.once('open', ()=> {
  console.log("Connected to mongodb")
});

//const projectRouter = require('./routes/ProjectRoute')
const routers = require('./routes/routes')
app.use('/', routers)

const port = process.env.PORT || 8000
app.listen(port, ()=>{console.log(`server started on port ${port}`)})