import axios from "axios";

const API_KEY = "AIzaSyCBvD-diJ84ScLJ7zOeDzOZdktVUTXrCyU";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data, "this ires resspons da");
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}
export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
