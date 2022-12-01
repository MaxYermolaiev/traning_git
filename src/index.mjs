import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    const data = {
        name: 'Pitter',
    };

    res.send(data);
});

app.listen(port, () => {
    console.log(`Server API was started! Reserved port is ${port}`);
});

export { app };
