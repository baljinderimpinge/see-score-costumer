import axios from "axios";
import { API_BASE_URL } from "../lib/constant";

const userId = localStorage.getItem("userId")

export const getAzureToken = async () => {
    
    if (userId) {
        console.log("herer222222")
        let token =  localStorage.getItem("jwttoken")
        const headers = {
            'Authorization': `Bearer ${token}`
        }; 
    const data = await axios.get(
        `${API_BASE_URL}/user/get-azure-token`,
        { headers: headers }
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
