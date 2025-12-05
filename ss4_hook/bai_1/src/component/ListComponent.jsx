
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, searchByNameOrCode } from "../service/PlayerService.jsx";
import DeleteComponent from "./DeleteComponent.jsx";
import { toast } from "react-toastify";

const ListComponent = () => {
    const [playerList, setPlayerList] = useState([]);
    const [deletePlayer, setDeletePlayer] = useState({ id: 0, name: "" });
    const [showModal, setShowModal] = useState(false);
    const searchRef = useRef();

    useEffect(() => {
        setPlayerList(getAll());
    }, []);

    const handleSearch = () => {
        const keyword = searchRef.current.value;
        const result = searchByNameOrCode(keyword);
        setPlayerList(result);
    };

    const handleShowModal = (player) => {
        setDeletePlayer(player);
        setShowModal(true);
    };

    const closeModal = (isDeleted = false) => {
        setShowModal(false);
        if (isDeleted) {
            setPlayerList(getAll());
            toast.success("Xóa thành công!");
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary">Danh sách cầu thủ</h1>

            <div className="d-flex justify-content-between mb-3">
                <Link to="/players/create" className="btn btn-success">
                    + Thêm cầu thủ mới
                </Link>
                <div className="d-flex">
                    <input ref={searchRef} className="form-control me-2" placeholder="Tìm tên hoặc mã..." />
                    <button onClick={handleSearch} className="btn btn-outline-primary">Tìm kiếm</button>
                </div>
            </div>

            <table className="table table-striped table-hover table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Tên Cầu Thủ</th>
                    <th>Ngày Sinh</th>
                    <th>Giá Trị</th>
                    <th>Vị Trí</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {playerList.length > 0 ? (
                    playerList.map((player, i) => (
                        <tr key={player.id}>
                            <td>{i + 1}</td>
                            <td>{player.code}</td>
                            <td>{player.name}</td>
                            <td>{player.dob}</td>
                            <td>{player.transferValue}</td>
                            <td>{player.position}</td>
                            <td>
                                <Link to={`/players/edit/${player.id}`} className="btn btn-sm btn-warning me-2">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleShowModal(player)}
                                    className='btn btn-sm btn-danger'
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr><td colSpan="7" className="text-center">Không tìm thấy dữ liệu</td></tr>
                )}
                </tbody>
            </table>

            {showModal && (
                <DeleteComponent
                    deletePlayer={deletePlayer}
                    showModal={showModal}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};
export default ListComponent;