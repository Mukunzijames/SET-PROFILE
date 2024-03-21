import express from 'express';
import router from './routes/authGoogle'
import  passportSetup from './passportconfig/passport-setup'

import dotenv from 'dotenv';
dotenv.config();

const app = express();

console.log(passportSetup)

app.use(express.json());
app.use('/api/auth', router)



export default app;