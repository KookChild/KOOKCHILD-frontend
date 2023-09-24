import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080';

if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const getDailyQuiz = async () => {
  const response = await axios.get('/quiz');
  return response.data;
};

export const getDailyQuizDetail = async (quidId) => {
  const response = await axios.get(`/quiz/${quidId}`)
  return response.data;
};

export const submitQuizAnswer = async (quizId, answer) => {
  const response = await axios.post('/quiz', {
    id: quizId,
    answer
  });
  return response.data;
};

export const getQuizExplanation = async (quizId) => {
  const response = await axios.get(`/quiz/${quizId}/explanation`);
  return response.data;
};

export const getQuizHistory = async (keyword) => {
  const endpoint = keyword ? `/quiz/history?search=${keyword}` : '/quiz/history';
  const response = await axios.get(endpoint);
  return response.data;
};

export const getQuizHistoryDetail = async (quizId) => {
  const response = await axios.get(`/quiz/history/${quizId}`);
  return response.data;
};

export const getChildQuizList = async (childId = 0) => {
  const response = await axios.get(`/quiz/parent?child=${childId}`);
  return response.data;
};

export const sendQuestionToAPI = async (question) => {
  const response = await axios.post('/quiz/question', {
    question
  });
  return response.data;
};
