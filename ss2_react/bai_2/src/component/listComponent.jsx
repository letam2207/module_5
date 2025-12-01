import {getAll} from "../service/customerService.jsx";
import React from "react";


function ListComponent(){
    return(
        <>
            <h1>Danh sách khách hàng</h1>

            <table>
                <tr>
                    <td>STT</td>
                    <td>Mã Khách Hàng</td>
                    <td>Tên Khách Hàng</td>
                    <td>Địa Chỉ</td>
                    <td>Loại Khách Hàng</td>
                </tr>
            </table>

            {
                getAll().map((customer,i)=>(
                        <tr key={customer.id}>
                            <td>{i+1}</td>
                            <td>{customer.code}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.type}</td>
                        </tr>
                ))
            }
        </>
    )
}
export default ListComponent;