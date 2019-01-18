import express from 'express';
import mysql from 'mysql';
import config from './config/config.json';
import bodyParser from 'body-parser';
import morgan from 'morgan';


import {Dao} from './dao/Dao';
import {NoAuthRoutes} from './routes/NoAuthRoutes';


const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'));

const con = mysql.createConnection({
   host: config.db_host,
   user: config.db_user,
   password: config.db_pass,
   database: config.db_name,
});

const dao = new Dao(con);

con.connect((err) => {
   if (err) {
      console.log('Error connecting: ', err.stack);
      return;
   }

   console.log('Connected as id: ', con.threadId);
});

const noAuthRoutes = new NoAuthRoutes(dao);

app.use('/joi/api/v1/', noAuthRoutes.router);


app.listen(3000, () => {
   console.log('App listening on port 3000');
});
