import axios from "axios";
// This  is the authentication api requests

export const ApiRequests = {
  loginRequest: async function ({ email, password }) {
    try {
      const response = await axios.post("http://localhost:3030/users/login", {
        email,
        password,
      });
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  },

  signUpRequest: async function ({ payload }) {
    try {
      const response = await axios.post("/users/register", payload);
      return response.success;
    } catch (error) {
      console.log(error);
      throw new Error(err);
    }
  },
};
