import { Router } from 'express';
import { getDB } from '../lib/database.js';

export const router = Router()

router.get('/', async (req, res) => {
    try {
        const data =  await getDB().query('SELECT * FROM `user`');
        return res.json(data[0]);
    } catch (err) {
        return res.status(500).json(err)
    }
});