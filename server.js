const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => {
   res.sendFile(__dirname + '/build/index.html')
})

app.listen(5000, () => {
   console.log(`Listening on ${5000}`)
})
