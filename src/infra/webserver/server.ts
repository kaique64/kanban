import * as express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running! Access on http://localhost:${PORT}`));
