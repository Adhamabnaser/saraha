import { AppError } from '../utils/error.handler.js'

export const validate = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body, { abortEarly: false })
		if (error) {
			throw new AppError(
				error.details.map((d) => d.message),
				400
			)
		}
		next()
	}
}
