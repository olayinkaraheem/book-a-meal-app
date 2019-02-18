import express from 'express';
import MealsRoutes from './routes/MealsRoutes';
import MenuRoutes from './routes/MenuRoutes';
import OrdersRoutes from './routes/OrdersRoutes';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use('/api/v1/meals', MealsRoutes);
app.use('/api/v1/menu', MenuRoutes);
app.use('/api/v1/orders', OrdersRoutes);
const PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`)
});
