const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'))

app.get('*', (req, res) => {
   res.sendFile(__dirname + '/build/index.html')
})

app.listen(config.port || 5000, () => {
   console.log(`Listening on ${config.port || 3000}`)
})
