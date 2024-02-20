import axios from "axios";
const BASE_URL = process.env.API_BASE_URL;
import { getSession } from "next-auth/react";

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use(async (config) => {
    const session = await getSession();
    console.log('ns', session);
    if (session && !config.headers['Authorization']) {
        console.log('jjj')
        config.headers['Authorization'] = `Bearer ${session?.user.accessToken}`
    }
    console.log('ccc', config);
    return config;
}, (error) => {
    console.log("Error in request",error.message)
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log("Error in res", error.message)
})
export {
    axiosInstance
}