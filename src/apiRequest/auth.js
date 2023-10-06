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

  signUpRequest: async function (payload) {
    console.log(payload);
    try {
      const response = await axios.post(
        "http://localhost:3030/users/register",
        payload
      );
      console.log(response);
      return response.data;
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  },
};
