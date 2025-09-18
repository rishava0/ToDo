const app = require('./app');
const db = require('./config/db')
const userModel = require('./model/user.model')

const port = 3000;

app.get('/', (req,res)=>{
    res.send("Hello Worldkkk")
});
app.listen(port, ()=>{
console.log(`server listening on Port http://localhost:${port}`);
});