import { Elysia } from 'elysia'
import { login, register } from '../controllers/UserController.js'

const app = new Elysia()

app
  .post('/login', () => login())
  .post('/register', () => register())

export default app
