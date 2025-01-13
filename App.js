const express = require('express')
const app = express()
require("dotenv").config();
const port = process.env.PORT
const expressSession=require("express-session")
const cookieparser=require('cookie-parser')
const dbgr=require('debug')("development:App.js")
const path=require('path');
const flash=require("connect-flash")
const db=require('./config/mongoose-connection')
const ownersrouter=require("./routes/ownersrouter")
const usersrouter=require("./routes/usersrouter")
const productsrouter=require("./routes/productsrouter")
const indexrouter=require("./routes/index")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
  expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SECRET_KEY
  })
)
app.use(flash());
app.use(cookieparser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs");
app.use("/",indexrouter)
app.use("/owners",ownersrouter)
app.use("/users",usersrouter)
app.use("/products",productsrouter)
app.listen(port, () => {
  dbgr('started')
})