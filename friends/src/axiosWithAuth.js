import axios from 'axios';
//Update Branch

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
          Authorization: token
        }
      });
};
/* */