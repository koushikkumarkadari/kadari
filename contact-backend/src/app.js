import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import messageRoutes from './routes/messageRoutes.js';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://portfolio-sigma-beryl-93.vercel.app/',
      'https://portfolio-koushikkadari-s-projects.vercel.app/',
      'https://portfolio-git-main-koushikkadari-s-projects.vercel.app/'
      
    ]; 
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api', messageRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected'); 
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error('MongoDB connection failed:', error.message);
});
