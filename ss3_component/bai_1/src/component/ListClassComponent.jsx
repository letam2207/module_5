import {Component} from "react";
import {getAll} from "../service/customerService.jsx";
import DeleteClassModalComponent from "./DeleteClassModalComponent.jsx";


class ListClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerList: [],
            showModal: false,
            deleteCustomer: {
                id: 0,
                name: ""
            }
        }
    }

    componentDidMount() {
        this.setState({
            customerList: [...getAll()]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.showModal !== this.state.showModal) {
            this.setState({
                customerList: [...getAll()]
            })
        }
    }

    handleShowModal = (customer) => {
        this.setState({
            showModal: true,
            deleteCustomer: {
                ...customer
            }
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false,
        })
    }


    render() {
        return (
            <>
                <h1>Danh sách khách hàng</h1>

                <table>
                    <thead>


                    <tr>
                        <td>STT</td>
                        <td>Mã Khách Hàng</td>
                        <td>Tên Khách Hàng</td>
                        <td>Địa Chỉ</td>
                        <td>Loại Khách Hàng</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.customerList.map((customer, i) => (
                            <tr key={customer.id}>
                                <td>{i + 1}</td>
                                <td>{customer.code}</td>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>{customer.type}</td>
                                <td>
                                    <button onClick={() => {
                                        this.handleShowModal(customer)
                                    }} className={'btn btn-sm btn-danger'}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteClassModalComponent
                    showModal={this.state.showModal}
                    closeModal={this.closeModal}
                    deleteCustomer={this.state.deleteCustomer}
                />

            </>

        );
    }

}

export default ListClassComponent;