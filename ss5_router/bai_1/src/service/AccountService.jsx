import axios from "axios";

const URL_ACCOUNTS = "http://localhost:8080/accounts";

export const login = async (account) => {
    try {
        const response = await axios.get(
            `${URL_ACCOUNTS}?username=${account.username}&password=${account.password}`
        );


        if (response.data.length > 0) {
            return response.data[0];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
        return null;
    }
};