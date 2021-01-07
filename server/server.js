const express = require('express');
const app = express();
const MongoClient = require('mongobd').MongoClient;


app.get('/', function (req, res){
    res.send("Hello!!");

});


MongoClient.connect('mongodb://localhost:27017')
.then((client)=>{
    const db = client.db('guests');
    const guestsCollection = db.collection("bookings");
    const bookingsRouter = createRouter(guestsCollection);
    app.use('api/bookings', bookingsRouter);
})
.catch(console.error);

app.listen(5000, function(){console.log('App is running on port 5000')})
