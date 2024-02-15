import axios from "axios";
import { API_BASE_URL } from "../lib/constant";

const userId = localStorage.getItem("userId")

export const getAzureToken = async () => {
    console.log("kkkkkkkkkkkkkkkkkkkkk")
    if (userId) {
    const data = await axios.get(
        `${API_BASE_URL}/user/get-azure-token/${userId}`
    );
    if (data.data.status === 200) {
        localStorage.setItem(
            "azureToken",
            data.data.data.token
        );
        localStorage.setItem("email", data.data.data.email);
    } 
}
}
