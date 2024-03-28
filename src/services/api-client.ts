import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '904e1cd057de4e6db9d8159f5d48a455'
    }
})