import express from 'express';
import MealsRoutes from './routes/MealsRoutes';
import MenuRoutes from './routes/MenuRoutes';
import OrdersRoutes from './routes/OrdersRoutes';
import bodyParser from 'body-parser';


const app = express();
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
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
app.use(bodyParser.json());
app.use('/api/v1/meals', MealsRoutes);
app.use('/api/v1/menu', MenuRoutes);
app.use('/api/v1/orders', OrdersRoutes);
const PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`)
});
