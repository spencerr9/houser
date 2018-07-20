const express = require('express');
const bodyParser = require('body-parser');

const app = express();



const port = 3009

app.listen(port, () => console.log(`Tommy want wingy! Port: ${port}`) )