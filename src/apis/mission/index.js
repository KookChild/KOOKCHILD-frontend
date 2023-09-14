import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080';

if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const getMissions = async (sort) => {
    const response = await axios.get(`/mission?sort=${sort}`);
    return response.data;
};

export const getMissionsHistory = async (sort) => {
    const response = await axios.get(`/mission/history?sort=${sort}`);
    return response.data;
};

export const fetchMissionDetail = async (missionId) => {
    const response = await axios.get(`/mission/${missionId}`);
    return response.data;
};

export const completeMission = async (missionId) => {
    const response = await axios.post('/mission/complete', {
        missionId: missionId
    });
    return response.data;
};

export const updateMission = async (missionId, title, content, reward, endDate) => {
    const response = await axios.put('/mission', {
        missionId: missionId,
        title: title,
        content: content,
        reward: reward,
        endDate: endDate
    });
    return response.data;
};

export const deleteMission = async (missionId) => {
    const response = await axios.delete('/mission', {
        data: { missionId: missionId }
    });
    try{
        return response.data;
    }catch(error){
        console.error("Server Response:", error.response.data);
        throw error;
    }
};

export const getParentMissionByChild = async (childId = 0, type = 'ongoing') => {
    const response = await axios.get(`/mission/parent?child=${childId}&type=${type}`);
    return response.data;
};

export const confirmMissionSuccess = async (missionId) => {
    try {
        const response = await axios.post('/mission/confirm', {
            missionId: missionId
        });
        return { data: response, isError: false };
    } catch (error) {
        console.error("Server Response:", error.response.data);
        return { data: error.response, isError: true };
    }
};

