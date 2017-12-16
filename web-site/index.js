const express = require('express');
const database = require('./database');
const app = express();

database.initializeMongo();


app.listen(3000, function(){
    console.log('Example app listening on point 3000')
})

//For displaying all users.
app.get('/users', function(req, res){
    database.Kitten.find(function(err, Kitten){
        if(err) return res.error(err);
        console.log(Kitten);
        res.status(200).json(Kitten);
    }) 
})


//For adding new users.
app.post('/user', function(req, res){
    database.initializeMongo();    
})
