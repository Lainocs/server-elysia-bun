const getPosts = async () => {
	return [
		{ id: 1, title: 'Hello World' },
		{ id: 2, title: 'Hello World 2' },
		{ id: 3, title: 'Hello World 3' },
	]
}

const getPost = async (id) => {
	return `Hello World ${id}`
}

export { getPosts, getPost }
