import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import MongoDb from './storage/mongodb.storage.js';
import config from './config/variable_info.js';
import PostsRoutes from './api/routes/posts.routes.js';
import UsersRoutes from './api/routes/users.routes.js';
import Logger from './utils/logger.js';

const { PORT, CORS_OPTIONS } = config;

const app = express();

//set cookie

app.use(express.json());

app.use(cookieParser());

app.use(cors(CORS_OPTIONS));

//routes

app.use('/api', PostsRoutes);
app.use('/api', UsersRoutes);


const start = async () => {
    MongoDb.init();
    app.listen(PORT, () => {
      Logger.info('server is started');
    });    
  } 

start();


