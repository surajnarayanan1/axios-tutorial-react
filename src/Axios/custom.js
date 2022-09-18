import axios from "axios";

const authFetch = axios.create({
    baseURL: "https://course-api.com",
    Accept : "application/json",
})

export default authFetch;