const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'))
app.listen(port, function() {
    console.log(`Server in port: ${port}`);
})

app.get('/', (req,res) => {
    res.render('pages/home')
})

module.exports = app;