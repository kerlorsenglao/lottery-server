import express from 'express';
import {createUser,getUser,loginUser} from '../controllers/user.js';

const router = express.Router();

router.get('/',getUser);
router.post('/',createUser);
router.post('/login',loginUser);


export default router