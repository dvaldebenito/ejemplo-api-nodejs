import express from 'express';
import parser from 'body-parser';
import axios from 'axios';
import dotenv from 'dotenv';
import Constants from './constants';
import { UserRouter } from './routes'
import log4js from 'log4js'
import { Logger } from './config'

const app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const { PORT, urlBase } = Constants({ dotenv });
const logger = Logger({ log4js });
const { userRouter } = UserRouter({ express, axios, urlBase, logger });
app.use('/user', userRouter);

process.title = "nfe";
const log = logger.log4js.getLogger('index');
app.listen(PORT, () => log.info(`¡El servicio se está ejecutando en el puerto ${PORT}!`));