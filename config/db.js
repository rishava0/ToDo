const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://kashinathagarwal8507_db_user:HKfeknHx1AhiLOqe@cluster0.wkwexnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(DB_URL,{
});
const conn= mongoose.connection;
conn.once('open',()=>{
console.log("MongoDb Connected");
})
conn.on('error',(err)=>{
 console.log("MongoDb connection error",err);
})

module.exports = conn;

