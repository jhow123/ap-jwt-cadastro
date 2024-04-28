import express from "express";
import {config} from 'dotenv';
config({path :'src/.env'});

const app = express ();

app.get('/', (_, res) => {
    res.status(200).json({Message: "Esta rota é publica" });
});

app.listen(process.env.PORT || 3000, () => {
    console.log ('o servidor  esta rodando ma porta: $( process.env.PORT')
});
