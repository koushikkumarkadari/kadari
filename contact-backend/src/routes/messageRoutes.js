import express from 'express';
import Message from '../models/Message.js';
import createMessageController from '../controllers/messageController.js';

const router = express.Router();
const messageController = createMessageController(Message);

router.post('/messages', messageController.createMessage);

export default router;
 