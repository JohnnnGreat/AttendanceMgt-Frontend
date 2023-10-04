import axios from "axios";
// This  is the authentication api requests

export const ApiRequests = {
  loginRequest: async function ({ email, password }) {
    try {
      const response = await axios.post("/users/login", { email, password });
      return response.user;
    } catch (err) {
      throw new Error(err);
    }
  },

  signUpRequest: async function ({ payload }) {
    try {
      const response = await axios.post("/users/register", payload);
      return response.success;
    } catch (error) {
      throw new Error(err);
    }
  },
};
