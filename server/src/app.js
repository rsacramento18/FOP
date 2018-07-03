
const express = require('express');
const logger = require('morgan');

const app = express();

const associates = require('./associates');

app.use('/associates', associates);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});