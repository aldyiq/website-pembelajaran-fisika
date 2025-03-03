const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to Express.js');
});
app.post('/data', (req, res) => {
    const { name } = req.body;
    res.send(`Received data: ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});