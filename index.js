const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/gui/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/gui/build/index.html'))
})

//Choose the port and start the server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});