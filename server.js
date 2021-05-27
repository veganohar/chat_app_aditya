const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./app/models");
const dbconnfig = require("./app/config/db.config");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.listen(port,()=>{
    console.log("Your Application is running on http://localhost:"+port);
});
app.get("/",(req,res)=>{
    res.send("Welcome to Node js");
})

db.mongoose.connect(`mongodb://${dbconnfig.HOST}:${dbconnfig.PORT}/${dbconnfig.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Connected to DB Successfully");
}).catch((err)=>{
    console.log(err);
    process.exit();
}) 


require("./app/routes/customer.route")(app);