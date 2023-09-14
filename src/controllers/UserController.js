import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const login = async (email, password, jwt, setCookie) => {
	let user = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (!user) {
		throw new Error('User not found')
	}

	let isPasswordCorrect = await Bun.password.verify(password, user.password)

	if (!isPasswordCorrect) {
		throw new Error('Incorrect password')
	}

	let params = {
		id: user.id,
		email: user.email,
		name: user.name,
	}

	setCookie('auth', await jwt.sign(params), {
		httpOnly: true,
	})

	return user
}

const register = async (email, name, password) => {
	let hashedPass = await Bun.password.hash(password, {
		algorithm: 'bcrypt',
		saltRounds: 10,
	})

	let user = await prisma.user.create({
		data: {
			email,
			name,
			password: hashedPass,
		},
	})

	login(email, password)

	return user
}

const profile = async (jwt, set, cookie) => {
	let user = await jwt.verify(cookie.auth)
	console.log(user)

	if (!user) {
		set.status = 401
		throw new Error('Unauthorized')
	}

	return user
}

export { login, register, profile }
