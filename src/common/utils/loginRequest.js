const loginRequest = async (login, password) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  }).then(() => {
    let user = {};
    user.login = `${login}`;
    user.password = `${password}`;
    // Adding userdata to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    // validating credentials
    if (login === 'hruday@gmail.com' && password === 'hruday123') {
      return 'success'; // Mocked Success Token
    } else {
      return 'invalid'; // Mocked Failure Token
    }
  })
}

export default loginRequest;