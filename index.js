import express from 'express';
import { heroRouter } from './routes/heroes.js';
import { actorRouter } from './routes/actors.js';
import { comicRouter } from './routes/comics.js';

const app = express();

const PORT = process.env.PORT ?? 3005;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use('/heroes', heroRouter);
app.use('/comics', comicRouter);
app.use('/actors', actorRouter);

app.use((req, res) => { res.status(404).json({ message: '404 NOT FOUND'}); });

app.listen(PORT, () => {
    console.log(`server es http://localhost:${PORT}`);
});