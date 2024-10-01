import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import 'dotenv/config'
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.route.js';
import orderRoute from './routes/order.route.js';


const app = express();

 const port = process.env.PORT || 4000;

 connectDB();
 connectCloudinary()

 //middlewares

  app.use(express.json())
  app.use(cors());

  // api endpoints
  app.use('/api/user', userRouter);
  app.use('/api/product', productRouter);
  app.use('/api/cart', cartRouter);
  app.use('/api/order',orderRoute);

  app.get('/', (req, res) => {
    res.send("Hi, Everyone");
  });

  app.listen(port, () => {
    console.log(`Server running on ${port}`)
  });