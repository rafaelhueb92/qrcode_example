const express = require("express");
const qrCode = require("qrcode")
const app = express();

app.use(express.json());

app.post('/', ({body},res) => 
   qrCode.toDataURL(JSON.stringify(body))
    .then(url => res.send(url))
    .catch(err => {
      console.error(err);
    }) 
)

app.listen(3000, _ => console.log("http://localhost:3000"))