
const mongoose = require('mongoose')
// Mongoose idhar aa, hume database se baat karni hai.


/* Hum ek function bana rahe hain jiska naam connectToDb hai.
Iska kaam hoga MongoDB se connection establish karna jab hum isse call karenge. */
function connectToDb() {
    return mongoose.connect("mongodb://127.0.0.1:27017/taxi-sys")
    .then(() => console.log("connected to db 🚀"))
    .catch(err => console.error("DB connection error ❌:", err));
}
/* mongoose.connect(...) → Mongoose ka method jo tumhe MongoDB ke saath connect karwa deta hai.
process.env.DB_CONNECT → Yeh .env file me likha hua tumhara MongoDB connection string hai.
Iska fayda: connection string hardcode nahi karni padti, secure rehta hai.
{ useNewUrlParser: true, useUnifiedTopology: true } → Yeh MongoDB ke latest parser & topology engine ka use karta hai, taaki old deprecated warnings na aaye.
Callback function ()=>{ console.log("connected to db") } → Agar connection successful hua, toh yeh function chalega aur console me message print karega: "connected to db". 
Agar connection ke time koi error aaya (jaise connection string galat, internet off, database down), toh yeh .catch() block chalega aur error message print karega.*/

module.exports=connectToDb
/* Yeh Node.js ka tareeka hai is function ko dusri files me export karne ka.
Bhai yeh connectToDb function tum le jao aur kahin bhi use karo.*/