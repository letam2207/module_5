const customerList = [
    {
        id: 1,
        code: "001",
        name: "Tâm",
        address: "Thanh Hóa",
        type: "VIP"
    },
    {
        id: 2,
        code: "002",
        name: "Thành Bean",
        address: "Quảng Trị",
        type: "Thường"
    },
    {
        id: 3,
        code: "003",
        name: "An",
        address: "Đà Nẵng",
        type: "Thường"
    },
    {
        id: 4,
        code: "004",
        name: "Thành container",
        address: "Quảng Trị",
        type: "Thường"
    },
]

export function getAll() {
    return [...customerList];
}


export function deleteById(id) {
    for (let i = 0; i < customerList.length; i++) {
        if (customerList[i].id == id) {
            customerList.splice(i, 1);
            break;
        }
    }
}