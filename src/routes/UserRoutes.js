import { Elysia } from 'elysia'
import { login, register, profile } from '../controllers/UserController.js'

const app = new Elysia()

app
  .post('/login', ({ body: { email, password }, jwt, setCookie }) => login(email, password, jwt, setCookie))
  .post('/register', ({ body: { email, name, password } }) => register(email, name, password))
  .get('/profile', ({ jwt, set, cookie }) => profile(jwt, set, cookie))

export default app
