import { Router } from 'express'
import { updateBalance } from "../controllers/business.logic.controller";
const router = Router()


router
    .post('/update-balance', updateBalance);


export { router };