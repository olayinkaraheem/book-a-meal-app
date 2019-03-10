import express from 'express';
import MealsRoutes from './routes/MealsRoutes';
import MenuRoutes from './routes/MenuRoutes';
import OrdersRoutes from './routes/OrdersRoutes';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';


const app = express();
app.use(bodyParser.json());
app.use('/api/v1/meals', MealsRoutes);
app.use('/api/v1/menu', MenuRoutes);
app.use('/api/v1/orders', OrdersRoutes);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
const PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`)
});
