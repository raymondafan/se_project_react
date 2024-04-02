import { handleServerResponse } from "./utils";
import { handleToken } from "./token";
const baseUrl = "http://localhost:3001";
const signUp = ({ name, avatar, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      avatar,
      email,
      password,
    }),
  }).then(handleServerResponse);
};
const signIn = ({ email, password }) => {
  return fetch(`${baseUrl}/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(handleServerResponse)
    .then(handleToken);
};
const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const auth = {
  signUp,
  signIn,
  getUserInfo,
};
export default auth;
