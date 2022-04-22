import express, { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';
import 'express-async-errors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5001;

// Connect database
const prismaClient = new PrismaClient();
prismaClient.$connect().then(() => console.log('MySQL connected'));
prismaClient.$connect()
    .then(() => console.log('MySQL connected!'))
    .catch((err) => console.log(err));

app.use(express.json());
app.use('/v1', routes);
app.use(errors());

// Handle internal server errors on API
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    console.error(err);

    return res.status(500).json({
        status: 500,
        message: 'Internal server error',
    });
});

app.listen(PORT, () => console.log(`Server is running! Access on http://localhost:${PORT}`));
