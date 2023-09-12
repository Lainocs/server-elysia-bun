import { Elysia } from 'elysia'
import { getPosts, getPost } from '../controllers/PostController.js'

const app = new Elysia()

app.group('/post', (router) => {
	return router
		.get('/', () => getPosts())
		.get('/:id', ({ params: { id } }) => getPost(id))
})

export default app
