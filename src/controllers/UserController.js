const login = async () => {
  let { email, password } = {
    email: 'lainocs@test.fr',
    password: '123soleil'
  }

  let hashedPass = await Bun.password.hash(password, {
    algorithm: 'bcrypt',
    saltRounds: 10
  })

  let isSame = await Bun.password.verify("123soleil", hashedPass)

  if (!isSame) {
    return 'Wrong password'
  }

  return { email, hashedPass }
}

const register = async () => {
  let { email, password } = {
    email: 'lainocs@test.fr',
    password: '123soleil'
  }

  let hashedPass = await Bun.password.hash(password, {
    algorithm: 'bcrypt',
    saltRounds: 10
  })

  return { email, hashedPass }
}

export { login, register }