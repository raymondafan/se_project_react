import { handleServerResponse } from "./utils";
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
  }).then(handleServerResponse);
};

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
const updateProfile = (token, {name, avatar}) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({name, avatar}),
  }).then(handleServerResponse);
};

const auth = {
  signUp,
  signIn,
  getUserInfo,
  updateProfile
};
export default auth;
