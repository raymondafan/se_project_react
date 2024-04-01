const TOKEN_KEY = "jwt";

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const handleToken = (res) => {
  if (res.token) {
    localStorage.setItem(TOKEN_KEY, res.token);
    return res;
  } else {
    return;
  }
};
export { handleToken };
