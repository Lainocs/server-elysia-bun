import { Elysia } from 'elysia'
import router from './router'

const app = new Elysia()

app.use(router)
app.listen(3000)
