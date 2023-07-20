import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const uploadFile = (newFile) => async (dispatch) => {
    try {
        let {data} = await API.post('/upload', newFile);
        console.log("res",data);
        dispatch({ type: "FILE", payload: data.path })
    } catch (err) {
        console.log(err);
    }
}