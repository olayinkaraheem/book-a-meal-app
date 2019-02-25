import express from 'express';
import MealsRoutes from './routes/MealsRoutes';
import MenuRoutes from './routes/MenuRoutes';
import OrdersRoutes from './routes/OrdersRoutes';
import bodyParser from 'body-parser';


export const app = express();
require('dotenv').config();
// const db = require('db');
// db.connect({
  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // pass: process.env.DB_PASSWORD,
// });

// const result = dotenv.config();
// if(result.error) {
//   throw result.error
// }
app.use(bodyParser.json());
app.use('/api/v1/meals', MealsRoutes);
app.use('/api/v1/menu', MenuRoutes);
app.use('/api/v1/orders', OrdersRoutes);
const PORT = 8080;
const server = app.listen(process.env.PORT || PORT, ()=>{
  console.log(`server started on port ${PORT}`)
});
