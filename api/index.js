import express from 'express';
import MealsRoutes from './routes/MealsRoutes';
import MenuRoutes from './routes/MenuRoutes';

const app = express();
app.use('/api/v1/meals', MealsRoutes);
app.use('/api/v1/menu', MenuRoutes);
const PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`)
});
