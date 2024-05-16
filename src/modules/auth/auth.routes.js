import { Router } from 'express'
import { signin, signup } from './auth.controller.js'
import { assertUniqueEmail } from './auth.middlewares.js'
import { validate } from '../../middlewares/validate.middleware.js'
import { signinSchema, signupSchema } from './auth.validate.js'

const router = Router()

router.post('/signin', validate(signinSchema), signin)
router.post('/signup', validate(signupSchema), assertUniqueEmail, signup)

export default router
