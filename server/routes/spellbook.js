import express from 'express';

import { fetchAll } from '../controllers/spellbook.js';

const router = express.Router();

router.get('/', fetchAll);

export default router;