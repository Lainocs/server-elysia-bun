const getPosts = async (req, res) => {
	return [
		{ id: 1, title: 'Hello World' },
		{ id: 2, title: 'Hello World 2' },
		{ id: 3, title: 'Hello World 3' },
	]
}

const getPost = async (req, res) => {
	return `Hello World ${req}`
}

export { getPosts, getPost }
