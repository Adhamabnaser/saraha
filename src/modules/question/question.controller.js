import { catchAsyncError } from '../../utils/error.handler.js'
import questionModel from './question.model.js'

export const addQuestion = catchAsyncError(async (req, res) => {
	const { id } = req.params
	const { content } = req.body
	await questionModel.create({ content, askedTo: id })

	res.status(201).json({ message: 'Added successfully' })
})

export const getQuestions = catchAsyncError(async (req, res) => {
	const questions = await questionModel.find({ askedTo: req.user.id })
	res.json({ questions })
})
