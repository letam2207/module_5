import axios from "axios";

const URL_PLAYERS = "http://localhost:8080/players";
const URL_POSITIONS = "http://localhost:8080/positions";

export const getAll = async () => {
    try {
        const response = await axios.get(`${URL_PLAYERS}?_sort=id&_order=desc`); // Sắp xếp giảm dần theo ID
        return response.data;
    } catch (error) {
        console.error("Lỗi khi lấy danh sách cầu thủ:", error);
        return [];
    }
};

export const getAllPositions = async () => {
    try {
        const response = await axios.get(URL_POSITIONS);
        return response.data;
    } catch (error) {
        return [];
    }
}

export const addNew = async (player) => {
    try {
        await axios.post(URL_PLAYERS, player);
    } catch (error) {
        console.error("Lỗi khi thêm mới:", error);
    }
};

export const findById = async (id) => {
    try {
        const response = await axios.get(`${URL_PLAYERS}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi tìm cầu thủ:", error);
        return null;
    }
};

export const updatePlayer = async (player) => {
    try {
        await axios.put(`${URL_PLAYERS}/${player.id}`, player);
    } catch (error) {
        console.error("Lỗi khi cập nhật:", error);
    }
};

export const deleteById = async (id) => {
    try {
        await axios.delete(`${URL_PLAYERS}/${id}`);
    } catch (error) {
        console.error("Lỗi khi xóa:", error);
    }
};

export const searchByNameOrCode = async (keyword) => {
    try {
        const response = await axios.get(`${URL_PLAYERS}?q=${keyword}`);
        return response.data;
    } catch (error) {
        return [];
    }
};