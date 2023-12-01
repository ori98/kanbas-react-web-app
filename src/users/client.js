import axios from "axios";

// import for working with sessions
// notice how request is used to create a request object
const request = axios.create({
  withCredentials: true,
});

export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;

// replace all the request references with request

export const signin = async (credentials) => {
  const response = await request.post( `${USERS_API}/signin`, credentials );
  return response.data;
};

// storing and fetching account information
export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};

// updating user
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

// fetch all users
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

// create user
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};

// find user by id
export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

// deleting user
export const deleteUser = async (user) => {
  const response = await request.delete(
    `${USERS_API}/${user._id}`);
  return response.data;
};

// singup a user
export const signup = async (credentials) => {
  const response = await request.post(
    `${USERS_API}/signup`, credentials);
  return response.data;
};

// signout
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};