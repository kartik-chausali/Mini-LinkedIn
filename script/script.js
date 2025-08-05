
const axios = require('axios')
const URL = "https://mini-linkedin-p3yg.onrender.com"

function pingServer(){
    axios.get(URL).then(()=>{
        const date = new Date().toLocaleDateString()
        console.log(`Pinged at ${date}`)
    }).catch((err)=>{
         console.error("Ping failed:", err.message);
    })
}

setInterval(pingServer , 14 * 60 * 1000);

pingServer();