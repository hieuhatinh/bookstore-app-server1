import express from 'express'
import { auth } from '../controllers/index.js'

const routerAuth = express.Router()

routerAuth.get('/login', auth.login)
routerAuth.get('/register', auth.register)
    
export default routerAuth
