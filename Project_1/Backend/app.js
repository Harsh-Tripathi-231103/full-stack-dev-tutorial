const dotenv = require('dotenv')
// dotenv ek npm package hai jo tumhare project me .env file se variables load karta hai.
//Tumhare system ke environment variables (process.env) me woh values set kar deta hai.
dotenv.config()
// .config() function .env file ko read karta hai aur process.env object me un variables ko set kar deta hai.
// Matlab .env file ka PORT=5000 ab tum code me process.env.PORT likh ke use kar sakte ho.
/* Isko sabse upar kyu likhna chahiye?
Tumhare project ke baaki files me kahin pe bhi tum process.env.PORT ya process.env.DB_URI use karoge.
Agar tumne dotenv.config() baad me call kiya, toh usse pehle wale code ko variables nahi milenge (undefined mil sakta hai).
Isliye professional practice hai ki server ya entry point file ke bilkul upar ye lines likho, taaki variables sab jagah pehle se load ho jayein.

-------------------------PRO TIP-----------------------------
.env file kabhi git me commit mat karo — ye sensitive hota hai.
.gitignore me .env add karo.
Production me hosting service ke environment variables me ye values manually set karo.
*/

// 'npm i express' kr k humne express package ko install , ab neeche dekho hum isko use kaise krte hai
const express = require('express')
// Express ek chhota sa helper hai jo tumhara server banana asaan bana deta hai. 
// require se bulao, fir express() se shuru karo, bas kaam ho gaya!

const cors = require('cors')
/* CORS = Cross-Origin Resource Sharing
Jab tumhara backend aur frontend alag origin (domain/port) pe chal rahe hote hain, browser security ke chakkar me request block kar sakta hai.
Example:
Frontend: http://localhost:5173 (React)
Backend: http://localhost:3000 (Express)
Agar tum CORS enable nahi karoge, to browser bolega — "Blocked by CORS policy". */

const app = express()
// ab jo cheez laayi usko express naam k variable mein store krdiya takki hum isko aage use kr sake

app.use(cors())
/* Bhai backend pe koi bhi domain se request aaye, allow kar de.
abhi k liye thik hai aage jab production level ki baat ayegi tab cors() k andr humlog specific domain pass
karenge , sirf ussi ki req ko accept krega.
Dev vs Prod
Dev: Sab origins allowed (easy testing).
Prod: Sirf apne domain(s) allowed (security).*/

app.get('/',(req,res)=>{
    res.send("hello everyone")
})
// app.get('/') ka matlab — jab koi user root URL (/) pe GET request bheje, toh niche wala function chalana.
// (req, res) — req matlab request ki details, res matlab jo tum bhejoge.
// res.send("hello everyone") — user ko “hello everyone” message wapas bhej diya.

module.exports=app
// Yeh app object ko is file ke bahar bhej do, taaki koi aur file ise import karke use kar sake.
// Tumne app banaya Express se.
// Lekin agar tum apna project multiple files me todoge (jo professional projects me hota hai), toh tumhe app ko export karna padega.
// Isse tum server start karna, routes banana, alag-alag jagah handle kar paoge.
// Bhai, yeh app le jaa, jahan use karna ho kar lena.