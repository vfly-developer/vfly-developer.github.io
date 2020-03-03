const express = require('express');
const DataStore = require('nedb');

const app = express();

app.use(express.json());

app.post('/api', (req, res) => {
    res.send("Post Recieved!");
    database.insert(req.body);
});

const port = process.env.PORT || 5501;
app.listen(port, () => console.log(`Listening on port ${port}`));

const database = new DataStore('database.db');
database.loadDatabase();

