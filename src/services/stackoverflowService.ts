import axios from "axios";

export const getUsers = async () => {
    const baseURL= "http://api.stackexchange.com";

    return axios.get(`${baseURL}/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`, {maxRedirects: 0})
}