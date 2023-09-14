import { Elysia } from 'elysia'
import { login, register } from '../controllers/UserController.js'

const app = new Elysia()

app
  .post('/login', ({ body: { email, password } }) => login(email, password))
  .post('/register', ({ body: { email, name, password } }) => register(email, name, password))

export default app
