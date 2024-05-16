import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
	content: String,
	askedTo: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
	},
})

const questionModel = mongoose.model('question', questionSchema)

export default questionModel
