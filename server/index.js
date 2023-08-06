const express = require('express');
const app = express();
const http = require('http').createServer(app)


const port = process.env.PORT || 5000



http.listen(port, () => {
    console.log(`Chat app server ranning on port: ${port}` )
})
app.get('/',(req, res) => {
    res.sendFile(_dirname + '/Chat.jsx')
})

