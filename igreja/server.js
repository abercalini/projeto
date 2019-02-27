const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/igreja'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/igreja/index.html');
});

app.listen(process.env.PORT || 4200);