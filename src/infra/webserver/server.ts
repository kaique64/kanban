import express from 'express';
import 'dotenv/config';
import 'express-async-errors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(PORT, () => console.log(`Server is running! Access on http://localhost:${PORT}`));
