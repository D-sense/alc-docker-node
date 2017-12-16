const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://mongo/test';

var kittySchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema);

exports.initializeMongo = function (){
    mongoose.connect(DATABASE_CONNECTION);
    
    console.log("Trying to connect to " + DATABASE_CONNECTION);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, "connection error: we might not be as connected as I thought"));
    db.once('open', function(){
        console.log("we are now connected");
        addRandomCat();
    });
}

var addRandomCat = function () {
    var user = new Kitten ({
       name: 'alc' + Math.random(),
       email: 'alc-mcro@' + Math.random() + ".com",
       password: 'pass' + Math.random()
    });
    
    user.save(function(err, fluffy){
        if(err) return console.error(err);
    });
}