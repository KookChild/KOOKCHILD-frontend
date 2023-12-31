import axios from 'axios';

// axios.defaults.baseURL = 'http://10.3.3.116:8000';

if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const getParentGraphData = async (childId, period, type) => {

  // const response = await axios.get(`http://10.3.3.116:8000/management/graph/parent?child_id=${childId}&period=${period}&type=${type}`);
  const response = await axios.get(`http://10.10.222.104:8000/management/graph/parent?child_id=${childId}&period=${period}&type=${type}`);

  return response.data;
};

export const getChildGraphData = async (period, type) => {
  const response = await axios.get(`/management/graph/child?period=${period}&type=${type}`);
  return response.data;
};

export const getStatistics = async (childId, period) => {
  const response = await axios.get(`http://10.10.222.104:8000/management/statistic?child_id=${childId}&period=${period}`);
  // const response = await axios.get(`http://10.3.3.116:8000/management/statistic?child_id=${childId}&period=${period}`);

  return response.data;
};