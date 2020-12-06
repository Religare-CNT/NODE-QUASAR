const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routesUser = require('./routes/user.js');
const cors = require ('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors())

routesUser(app)



// View engine
app.set('view engine','ejs');

app.use(express.static('public'));

//Body parser


// End Router
const port = process.env.PORT || 3000
app.listen(port)

console.log("Servidor funcionando na porta " , port)