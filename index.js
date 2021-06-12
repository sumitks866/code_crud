require('dotenv').config() ;
const express = require('express')
const mongoose = require('mongoose') ;

const app = express()

app.use(express.json()) ;

mongoose.connect(process.env.DB_URI, {useNewUrlParser:true, useUnifiedTopology:true}) ;
mongoose.set('useCreateIndex',true) ;
const con = mongoose.connection

con.on('error', console.error.bind(console, 'connection error:'));
con.once('open', ()=> {
  console.log("Connected to mongodb")
});

const projectRouter = require('./routes/ProjectRoute')
app.use('/', projectRouter)

const port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`server started on port ${port}`)})