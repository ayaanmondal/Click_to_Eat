const express = require("express");
const Food = require("./models/foodsModel");
// db model
const app = express();
const db = require("./db.js")
app.use(express.json());
// db connection


const foodsRoute = require('./routes/foodsRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/foods/', foodsRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

app.get("/", (req, res) => {
  res.send("Server Started ");
});

app.get("/getfoods", (req, res) => {
  Food.find({} , (err, docs)=>{
    if(err){
      console.log(err);
    }else{
      res.send(docs);
    }
  })
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
