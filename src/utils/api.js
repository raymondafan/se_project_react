import { handleServerResponse } from "./utils";
const baseUrl = process.env.NODE_ENV === "production"
? "https://api.raymondafanwtwr.strangled.net"
: "http://localhost:3001";

// const handleServerResponse = (res) => {
//   return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
// };
const getItemList = (token) => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const addItem = ({ name, weather, imageUrl }, token) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
    }),
  }).then(handleServerResponse);
};

const removeItem = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
const addCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const removeCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

const api = {
  getItemList,
  addItem,
  removeItem,
  addCardLike,
  removeCardLike
};
export default api;
