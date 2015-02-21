var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(cb) {
    //console.log('foo');
});

var doggySchema = mongoose.Schema({
    name: String
})

var dog = mongoose.model('dog', doggySchema)

var vimma = new dog({ name: 'Vimma' });
vimma.save(function (err, dogs) {
    if (err) return console.error(err);
    console.log(dogs);
});
