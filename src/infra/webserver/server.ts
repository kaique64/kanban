import express from 'express';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import 'express-async-errors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5001;

// Connect database
const prismaClient = new PrismaClient();
prismaClient.$connect()
    .then(() => console.log('MySQL connected!'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('/v1', routes);
app.use(errors());

app.listen(PORT, () => console.log(`Server is running! Access on http://localhost:${PORT}`));
