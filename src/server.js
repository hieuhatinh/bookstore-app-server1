/**
 * Required External Modules
 */
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'

import routes from './routes/index.js'

/**
 * App Variables
 */
dotenv.config()

const PORT = process.env.PORT
const app = express()
const Router = express.Router()

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
// Router.use('api/v1/', routes(app))
routes(app)

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
