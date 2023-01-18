import axios from "axios"

const url = "/birdnest";

const getOffenders = () => {
    return axios
        .get(url)
        .then(res => res.data);
}

export default getOffenders;