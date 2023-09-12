import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8080';
// const YOUR_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGlsZDFAZ21haWwuY29tIiwiaWF0IjoxNjk0MjU2Mjg0LCJleHAiOjE2OTY4NDgyODR9.a_CMXow5NQA4dotYDqwz2rIFRpkTi-VbS-9mAit3pzU";
const YOUR_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQxQGdtYWlsLmNvbSIsImlhdCI6MTY5NDMzNDQ0NywiZXhwIjoxNjk2OTI2NDQ3fQ.P8qo9NC2teX24T9CyDlrS3zdPK20sUx0iLbZna2dHIY";
axios.defaults.headers.common['Authorization'] = `Bearer ${YOUR_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const getMissions = async (sort) => {
    const response = await axios.get(`/mission?sort=${sort}`);
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

export const getParentMissionByChild = async (childId) => {
    const response = await axios.get(`/mission/parent?child=${childId}`);
    return response.data;
};

export const confirmMissionSuccess = async (missionId) => {
    try {
        const response = await axios.post('/mission/confirm', {
            missionId: missionId
        });
        return response.data;
    } catch (error) {
        console.error("Server Response:", error.response.data);
        throw error;
    }
};
