const TOKEN_KEY = "jwt";

const handleToken = (res) => {
  if (res.token) {
    localStorage.setItem(TOKEN_KEY, res.token);
    return res;
  } else {
    return;
  }
};
export { handleToken };
