import { Router } from 'express'
import { authenticate, authorize } from '../auth/auth.middlewares.js'
import { addQuestion, getQuestions } from './question.controller.js'
import { assertIdExist } from './question.middleware.js'

const router = Router()

router.post('/:id', assertIdExist, addQuestion)
router.get('/', authenticate, authorize('USER'), getQuestions)

export default router
