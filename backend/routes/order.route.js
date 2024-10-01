import express from 'express';
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyRazorpay, verifyStripe } from '../controllers/order.controller.js';
import adminAuth from '../middleware/admin.auth.js';
import authUser from '../middleware/auth.js';


const orderRoute = express.Router();
  
  // Admin Features
orderRoute.post('/list', adminAuth, allOrders);
orderRoute.post('/status', adminAuth, updateStatus);

// Payment Features
orderRoute.post("/place", authUser, placeOrder);
orderRoute.post("/stripe", authUser, placeOrderStripe);
orderRoute.post("/razorpay", authUser, placeOrderRazorpay);


// User Feature
orderRoute.post('/userorders', authUser, userOrders); 

// Verify payment
orderRoute.post("/verifyStripe", authUser, verifyStripe)
orderRoute.post("/verifyRazorpay", authUser, verifyRazorpay);


export default orderRoute;