const mongoose = require('mongoose')

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)

        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log('Mongoose connected to the database')
        })

        connection.on('error', (error) => {
            console.log('Mongoose connection error: ', error)
        })
    } catch (error) {
        console.log('Error connecting to the database: ', error)
    }
}

module.exports = connectDB
