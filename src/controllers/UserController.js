import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const login = async (email, password) => {
  let user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    throw new Error('User not found')
  }

  let isPasswordCorrect = await Bun.password.verify(password, user.password)

  if (!isPasswordCorrect) {
    throw new Error('Incorrect password')
  }

  return user
}

const register = async (email, name, password) => {

  let hashedPass = await Bun.password.hash(password, {
    algorithm: 'bcrypt',
    saltRounds: 10
  })

  let user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPass
    }
  })

  return user
}

export { login, register }