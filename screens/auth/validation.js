export const validateLogin = (userData, setUserData) => {
  let error = { status: false }

  const validateEmail = new RegExp(/^[A-Za-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,15}/)

  const { email, password } = userData

  if (!validateEmail.test(email)) {
    error = {
      ...error,
      status: true,
      email: "Please enter a valid email",
    }
  }
  if (email === null || email === "") {
    error = {
      ...error,
      status: true,
      email: "Please fill out the email address",
    }
  }

  if (password === null || password === "") {
    error = {
      ...error,
      status: true,
      password: "Please fill out the password",
    }
  }

  setUserData((data) => ({ ...data, error }))
  return !error.status
}

export const validateRegister = (userData, setUserData) => {
  let error = { status: false }

  const { email, password } = userData

  const validatePassword = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  )
  const validateEmail = new RegExp(/^[A-Za-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,15}/)

  if (!validatePassword.test(password)) {
    error = {
      ...error,
      status: true,
      password:
        "Password must contain at least one uppercase, one lowercase, one digit, one special character and minimum eight characters in length",
    }
  }

  if (password === null || password === "") {
    error = {
      ...error,
      status: true,
      password: "Please fill out the password",
    }
  }

  if (!validateEmail.test(email)) {
    error = {
      ...error,
      status: true,
      email: "Please enter a valid email",
    }
  }

  if (email === null || email === "") {
    error = {
      ...error,
      status: true,
      email: "Please fill out the email address",
    }
  }

  setUserData((data) => ({ ...data, error }))
  return !error.status
}
