/**
 * Required External Modules
 */
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'

import connectDB from './database/index.js'
import api from './api/index.js'

/**
 * App Variables
 */
dotenv.config()

const PORT = process.env.PORT
const app = express()

if (!PORT) {
    process.exit(1)
}

/**
 *  App Configuration
 */
app.use(morgan('combined'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes
api(app)

/**
 * Server Activation
 */
app.listen(PORT, async () => {
    await connectDB()
    console.log(`Example app listening on port ${PORT}`)
})
