import axios from "axios";

const baseDomain = "http://127.0.0.1:8000";
const baseURL = `${baseDomain}/api`;
const token = '';
export default axios.create({
    baseURL,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Authorization": token,
        "Content-Type": "application/json"
    }
});