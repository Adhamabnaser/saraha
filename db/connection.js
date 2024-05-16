import mongoose from 'mongoose'

export const connectToDb = () => {
	mongoose
		.connect(process.env.DB_CON)
		.then(() => console.log('connected to DB...'))
		.catch(() => console.error('Failed to connect to DB!'))
}
