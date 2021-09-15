const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.use(express.static('views'));
app.get('/',(req,res)=>{

});

const PORT = process.env.PORT || 3001
app.listen(PORT,() => {console.log(`running ${PORT}`)} )
