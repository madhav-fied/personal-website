const express = require('express');
const app = express();

const PORT: number = 3100;

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`);
});

app.get('/', (req: any, res: any) => {
    res.send('Hello! World');
});
