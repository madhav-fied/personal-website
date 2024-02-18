import express from "express";
import cors from "cors"
const app = express();
// app.use(cors);
app.use(express.json());

const PORT = 3100;

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello! World');
});

app.post('/api/cmd', (req, res) => {
    const payload = req.body;
    console.log(payload.data);
});
