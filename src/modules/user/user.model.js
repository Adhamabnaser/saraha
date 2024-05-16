import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		unique: true,
		lowercase: true,
		match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	},
	password: String,
	role: {
		type: String,
		enum: ['USER', 'ADMIN'],
		default: 'USER',
	},
})

const userModel = mongoose.model('user', userSchema)

export default userModel
