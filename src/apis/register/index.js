import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}

export const checkEmailAvailabilityAPI = async (email) => {
  try {
    const response = await axios.get(`/check-email-availability?email=${email}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Email availability check error", error);
    throw error;
  }
};

export const registerAPI = async (data) => {
  try {
      const response = await axios.post("/register", data);
      console.log(response)

      const token = response.data.token;

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      localStorage.setItem('token', token);
      localStorage.setItem('parent', response.data.parent);

      return response.data;
  } catch (error) {
      console.error("Registration error", error);
      throw error;
  }
};