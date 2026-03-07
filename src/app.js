const express = require('express');

const app = express();


app.get('/test', (req,res) => {
    res.send('The Server is being tested!');
});

app.post('/test', (req,res) => {
    res.send('The server is tested successfully!');
});

app.delete('/test', (req,res) => {
    res.send('The test route is deleted!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});