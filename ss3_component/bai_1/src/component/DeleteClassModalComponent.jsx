import {Component} from "react";
import {deleteById} from "../service/customerService.jsx";
import {Button, Modal} from "react-bootstrap";


class DeleteClassModalComponent extends Component{

    constructor(props) {
        super(props);

    }
    handleClose =()=>{
        this.props.closeModal();

    }
    handleDelete=()=>{
        deleteById(this.props.deleteCustomer.id);
        this.props.closeModal();
    }

    render() {
        return(
            <>
                <Modal show={this.props.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Bạn muốn xoá sinh viên
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleDelete}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default DeleteClassModalComponent ;