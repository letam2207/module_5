const playerList = [
    {
        id: 1,
        code: "001",
        name: "Nguyễn Tiến Linh",
        dob: "1997-10-20",
        transferValue: 350000,
        position: "Tiền đạo"
    },
    {
        id: 2,
        code: "002",
        name: "Nguyễn Quang Hải",
        dob: "1997-04-12",
        transferValue: 400000,
        position: "Tiền vệ"
    },
    {
        id: 3,
        code: "003",
        name: "Quế Ngọc Hải",
        dob: "1993-05-15",
        transferValue: 300000,
        position: "Hậu vệ"
    },
    {
        id: 4,
        code: "004",
        name: "Đặng Văn Lâm",
        dob: "1993-08-13",
        transferValue: 250000,
        position: "Thủ môn"
    },
    {
        id: 5,
        code: "005",
        name: "Nguyễn Hoàng Đức",
        dob: "1998-01-11",
        transferValue: 500000,
        position: "Tiền vệ"
    }
];

export function getAll() {
    return [...playerList];
}

export function addNew(player) {
    playerList.push(player);
}

export function deleteById(id) {
    for (let i = 0; i < playerList.length; i++) {
        if (playerList[i].id == id) {
            playerList.splice(i, 1);
            break;
        }
    }
}
export function searchById(searchId) {
    if (!searchId) {
        return [...playerList];
    }

    let result = [];

    for (let i = 0; i < playerList.length; i++) {
        if (playerList[i].id == searchId) {
            result.push(playerList[i]);
        }
    }
    return result;
}
