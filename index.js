const express = require('express')

const engine = require('express-handlebars').engine
const app = express()


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/employe", require('./controllers/api'))

// app.get("/test",(req,res) =>{
//           res.render('home')
//})

const PORT =3001
app.listen(PORT,()=>console.log(`Server is running at ${PORT} `))