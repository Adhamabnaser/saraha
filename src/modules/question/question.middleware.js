import { AppError, catchAsyncError } from '../../utils/error.handler.js'
import userModel from '../user/user.model.js'

export const assertIdExist = catchAsyncError(async (req, res, next) => {
	const { id } = req.params
	const user = await userModel.findById(id)
	if (!user) throw new AppError("This user doesn't exist", 400)
	next()
})
