import express from 'express';
import cors from 'cors';
import './DB/index.js';
import errorHandler from './middlewares/errorHandler.js';
import stonesRouter from './routes/stonesRouter.js';
import adminRouter from './routes/adminRouter.js';
import mailerLiteRouter from './routes/mailerLiteRouter.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello KLUGELOU!');
    });

app.use('/stones', stonesRouter);
app.use('/admin', adminRouter);
app.use('/mailerLite', mailerLiteRouter);

app.use('*', (req, res,) => res.status(404).json({ success: false, error: 'Route not found on KLUGELOU API' }));    
app.use(errorHandler);

app.listen(port, () => console.log(`Klugelou server is running on http://localhost:${port}`));