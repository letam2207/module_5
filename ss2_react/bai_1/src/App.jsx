import React from "react";
import "./App.css";

function App() {


    const item1 = React.createElement("li", null, "Hà Nội");
    const item2 = React.createElement("li", null, "Đà Nẵng");
    const item3 = React.createElement("li", null, "Hải Phòng");
    const item4 = React.createElement("li", null, "Hồ Chí Minh");
    const item5 = React.createElement("li", null, "Cần Thơ");

    const listCity = React.createElement("ul", null,
        item1, item2, item3, item4, item5);

    const container = React.createElement(
        "div",
        null,
        React.createElement("h2", null, "Danh sách thành phố trực thuộc TW"),
        listCity
    );

    return container;
}

export default App;