import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { deleteById } from "../service/PlayerService.jsx";
import { toast } from 'react-toastify';

const DeleteComponent = ({ closeModal, deletePlayer, showModal }) => {

    const handleClose = () => {
        closeModal(false);
    };

    const handleDelete = () => {
        deleteById(deletePlayer.id);
        toast.success(`Đã xóa cầu thủ ${deletePlayer.name} thành công!`);
        closeModal(true);
    };

    return (
        <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có chắc chắn muốn xoá cầu thủ <span className="text-danger fw-bold">{deletePlayer.name}</span> không?
                <br/>
                <small className="text-muted">Hành động này không thể hoàn tác.</small>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Hủy bỏ
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Xóa
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteComponent;