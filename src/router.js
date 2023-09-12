import { Elysia } from 'elysia'
import PostRoutes from './routes/PostRoutes.js'
import UserRoutes from './routes/UserRoutes.js'

const app = new Elysia()

app.use(PostRoutes)
app.use(UserRoutes)

export default app
