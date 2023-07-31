import axios from 'axios';


function setAxiosToken() {
    axios.defaults.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2Q4NzNjZDJmMWE2MTFmYmI1ODdjNzk1NTY5MWVjZiIsInN1YiI6IjY0YmU0NzQ0ODVjMGEyMDBhZDYxMDJhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n3KbTKake2FgzGMjp59pg6DmtdpknrVCUmrkwc2xddE";

}

export default {
    setAxiosToken,
};