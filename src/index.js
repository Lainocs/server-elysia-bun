import { Elysia } from 'elysia'
import { cookie } from '@elysiajs/cookie'
import { jwt } from '@elysiajs/jwt'
import router from './router'

const app = new Elysia()

app.use(
  jwt({
    name: 'jwt',
    secret: process.env.JWT_SECRET,
  })
)
app.use(cookie())
app.use(router)
app.listen(3000)
