import axios from "axios"

const url = "http://localhost:3001/birdnest";

const getOffenders = () => {
    return axios
        .get(url)
        .then(res => res.data);
}

export default getOffenders;