// yhe prr ab hum apna server setup karenge.

const http = require ('http')
/* Node.js ka built-in HTTP module import karo, jo tumhe bina Express ke server banane ka power deta hai.

Express ek shortcut hai, lekin Node.js me pehle se ek HTTP module hota hai.
Isse tum server bana sakte ho aur manually request/response handle kar sakte ho.

http → low-level control, tumhe sab cheez manually likhni padegi.
express → high-level helper, easy syntax, shortcuts ready-made. */

const app = require('./app')
/* Jo app tumne app.js file me module.exports karke export kiya tha, use yahan import kar lo.
Code clean & organized rehta hai.
Routes, middleware, config alag file me; server startup alag file me.
Professional projects me yehi pattern use hota hai.
*/

const port = process.env.PORT || 3000
// Pehle check karo ki environment variable me port diya hai ya nahi.
//Agar diya hai → wahi port use karo.
//Agar nahi diya hai → default 3000 use karo.

const server = http.createServer(app)
/* HTTP server banao aur bolo ki jo bhi request aaye, uska handling kaam Express app karega
Normally, http.createServer() me tum ek callback dete ho (req, res) => { ... }
Lekin Express ka app khud ek function hota hai jo request aur response handle kar sakta hai.
Isliye tum sidha app de sakte ho, aur Node.js HTTP server Express ko delegate kar dega.

Node.js ka http.createServer() expect karta hai ki tum usko ek callback function do jo (req, res) accept kare
Ab kyunki app khud ek (req, res) function hai, tum usko sidha de sakte ho */

server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
/* server.listen(port, ...) → Yeh Node.js ka method hai jo tumhare server ko start karta hai aur ek specific port par "sunne" lagta hai (matlab request accept karega).
port variable me tumne .env se 4000 liya hoga (ya koi aur value).
Agar port 4000 hai, iska matlab tumhare computer ka localhost:4000 par server chalu ho jayega.
()=>{ ... } → Yeh ek callback function hai jo tab run hota hai jab server successfully start ho jata hai.
console.log(...) → Sirf terminal me message print karta hai taki tumhe pata chale ki server start ho chuka hai. */

/* Port ka kaam — tumhare computer pe alag-alag services ko alag-alag darwaze milte hain (port = darwaza).
Port 4000 → tumhara app ka darwaza.
Browser me open karke dekhoge: http://localhost:4000
*/