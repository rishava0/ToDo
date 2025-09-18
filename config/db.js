const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://kashinathagarwal8507_db_user:1234@cluster0.lcjbcpb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


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

