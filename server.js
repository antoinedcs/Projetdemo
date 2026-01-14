const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello express')
});

app.listen(3000, () => {
    let monIp = require('ip').address();
    console.log('Server is running on http://${monIp}:3000');
});