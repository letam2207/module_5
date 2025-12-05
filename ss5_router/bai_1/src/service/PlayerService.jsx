// service/PlayerService.jsx
const playerList = [
    { id: 1, code: "001", name: "Nguyễn Tiến Linh", dob: "1997-10-20", transferValue: 350000, position: "Tiền đạo" },
    { id: 2, code: "002", name: "Nguyễn Quang Hải", dob: "1997-04-12", transferValue: 400000, position: "Tiền vệ" },
    { id: 3, code: "003", name: "Quế Ngọc Hải", dob: "1993-05-15", transferValue: 300000, position: "Hậu vệ" },
    { id: 4, code: "004", name: "Đặng Văn Lâm", dob: "1993-08-13", transferValue: 250000, position: "Thủ môn" },
    { id: 5, code: "005", name: "Nguyễn Hoàng Đức", dob: "1998-01-11", transferValue: 500000, position: "Tiền vệ" }
];

export function getAll() {
    return [...playerList];
}

export function addNew(player) {
    // Giả lập tự tăng ID nếu không nhập
    if(!player.id) {
        player.id = Math.max(...playerList.map(p => p.id)) + 1;
    }
    playerList.push(player);
}

export function findById(id) {
    return playerList.find(p => p.id === parseInt(id));
}

export function updatePlayer(player) {
    let index = playerList.findIndex(p => p.id === player.id);
    if (index !== -1) {
        playerList[index] = player;
    }
}

export function deleteById(id) {
    let index = playerList.findIndex(p => p.id === id);
    if (index !== -1) {
        playerList.splice(index, 1);
    }
}

export function searchByNameOrCode(keyword) {
    if (!keyword) return [...playerList];
    return playerList.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase()) ||
        p.code.includes(keyword)
    );
}