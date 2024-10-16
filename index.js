import express from 'express';
import cors from 'cors';
import './DB/index.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello KLUGELOU!');
    });

app.listen(port, () => console.log(`Klugelou server is running on http://localhost:${port}`));