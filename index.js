var express= require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");


const app=express();
app.use(bodyParser.json());
app.use(express.static('/'));
app.use(bodyParser.urlencoded({
    extended:true
}));

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
var db=mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"));

app.post("/submit",(req,res)=>{
    var category = req.body.category;
    var model = req.body.model;
    var serialNumber = req.body.serialNumber;
    var date = req.body.date;
    var file=req.body.file;

    console.log(category);
    console.log(model);
    console.log(serialNumber);
    console.log(date);
    console.log(file);


    var data = {
        "category": category,
        "model" : model,
        "serialNumber": serialNumber,
        "date" : date,
        "file":file
    }

    db.collection('values').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('result.html');  

});

app.get('/',(req,res)=>{
    res.set({"Allow-access-Allow-Origin":'*'});
    // ye return line kyu hai
    return res.redirect('index.html');
});
app.listen(3000);
console.log("Listening to the port 3000");
