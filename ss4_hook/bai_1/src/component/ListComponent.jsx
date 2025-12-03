import {useEffect, useRef, useState} from "react";
import {addNew, getAll, searchById} from "../service/PlayerService.jsx";
import DeleteComponent from "./DeleteComponent.jsx";


const ListComponent = () => {

    const [playerList, setPlayerList] = useState(null);
    const [deletePlayer, setDeletePlayer] = useState({id: 0, name: ""});
    const [showModal, setShowModal] = useState(false);
    const [reloading, setReloading] = useState(false);
    const searchRef = useRef(null);
    const handleSearch = () => {
        const keyword = searchRef.current.value;
        const result = searchById(keyword);
        setPlayerList(result);
    }


    const idRef = useRef(null);
    const codeRef = useRef(null);
    const nameRef = useRef(null);
    const dobRef = useRef(null);
    const transferValueRef = useRef(null);
    const positionRef = useRef(null);

    useEffect(() => {
        setPlayerList(getAll())
    }, [reloading]);

    const handleShowModal = (player) => {
        setDeletePlayer(player);
        setShowModal(true);
    }

    const closeModal = () => {
        setReloading(pre => !pre);
        setShowModal(false);
    }



    const handleAdd = () => {
        const id = idRef.current.value;
        const code = codeRef.current.value;
        const name = nameRef.current.value;
        const dob = dobRef.current.value;
        const transferValue = transferValueRef.current.value;
        const position = positionRef.current.value;
        const newPlayer = {
            id: id,
            code :code,
            name: name,
            dob : dob,
            transferValue : transferValue,
            position : position
        }
        addNew(newPlayer);
        console.log(getAll());
        setReloading(pre => !pre);
    }


    return (
        <>
            <form>
                ID: <input ref={idRef} name={"id"}/><br/>
                Mã Cầu Thủ: <input ref={codeRef} name={"code"}/><br/>
                Tên Cầu Thủ: <input ref={nameRef} name={"name"}/><br/>
                Ngày Sinh: <input ref={dobRef} name={"dob"}/><br/>
                Giá Trị Chuyển Nhược: <input ref={transferValueRef} name={"transferValue"}/><br/>
                Vị Trí: <input ref={positionRef} name={"position"}/><br/>
                <button onClick={handleAdd} type={'button'}>Thêm mới</button>
            </form>

                <label>Tìm kiếm theo ID: </label>
                <input ref={searchRef} placeholder="Nhập ID..." />
                <button onClick={handleSearch} >Tìm kiếm</button>

            <h1 style={{color: "yellow"}}>Danh sách cầu thủ</h1>
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>STT</td>
                    <td>ID</td>
                    <td>Mã Cầu Thủ</td>
                    <td>Tên Cầu Thủ</td>
                    <td>Ngày Sinh</td>
                    <td>Giá Trị Chuyển Nhượng</td>
                    <td>Vị Trí</td>
                    <td>Delete</td>
                </tr>
                </thead>
                <tbody>
                {
                    playerList && playerList.map((player, i) => (
                        <tr key={player.id}>
                            <td>{i + 1}</td>
                            <td>{player.id}</td>
                            <td>{player.code}</td>
                            <td>{player.name}</td>
                            <td>{player.dob}</td>
                            <td>{player.transferValue}</td>
                            <td>{player.position}</td>
                            <td>
                                <button onClick={() => {
                                    handleShowModal(player)
                                }} className={'btn btn-sm btn-danger'}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            {showModal &&
                <DeleteComponent deletePlayer={deletePlayer}
                                 showModal={showModal}
                                 closeModal={closeModal}
                />
            }

        </>
    );

}
export default ListComponent;
