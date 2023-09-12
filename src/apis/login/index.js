import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}

export const loginAPI = async (email, password) => {
  try {
      const response = await axios.post("/login", {
          email: email,
          password: password
      });

      const token = response.data.token;

      // Token을 Axios 헤더에 설정
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', token);
      localStorage.setItem('parent', response.data.parent);

      return response.data;
  } catch (error) {
      console.error("Login error", error);
      throw error;
  }
};