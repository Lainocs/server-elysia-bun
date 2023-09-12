import { Elysia } from 'elysia'
import PostRoutes from './routes/PostRoutes.js'

const app = new Elysia()

app.use(PostRoutes)

export default app
