// components/PlayerForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addNew, findById, updatePlayer } from '../service/PlayerService';
import { toast } from 'react-toastify';

const PlayerForm = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Lấy ID từ URL nếu đang Edit

    const [initialValues, setInitialValues] = useState({
        code: "",
        name: "",
        dob: "",
        transferValue: "",
        position: ""
    });

    useEffect(() => {
        if (id) {
            // Nếu có ID, đây là chức năng Sửa
            const player = findById(id);
            if (player) {
                setInitialValues(player);
            }
        }
    }, [id]);

    // Validate Schema
    const validationSchema = Yup.object({
        code: Yup.string().required("Mã cầu thủ không được để trống"),
        name: Yup.string()
            .required("Tên không được để trống")
            .matches(/^[a-zA-ZÀ-ỹ\s]+$/, "Tên chỉ chứa chữ cái"),
        dob: Yup.date().required("Ngày sinh không được để trống"),
        transferValue: Yup.number()
            .required("Giá trị chuyển nhượng là bắt buộc")
            .min(1000, "Giá trị phải lớn hơn 1000"),
        position: Yup.string().required("Vui lòng chọn vị trí")
    });

    const handleSubmit = (values) => {
        if (id) {
            updatePlayer(values);
            toast.success("Cập nhật thành công!");
        } else {
            addNew(values);
            toast.success("Thêm mới thành công!");
        }
        navigate("/players");
    };

    return (
        <div className="container mt-4">
            <h2>{id ? "Chỉnh sửa cầu thủ" : "Thêm mới cầu thủ"}</h2>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true} // Cho phép load lại data khi edit
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label className="form-label">Mã Cầu Thủ</label>
                        <Field type="text" name="code" className="form-control" />
                        <ErrorMessage name="code" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tên Cầu Thủ</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ngày Sinh</label>
                        <Field type="date" name="dob" className="form-control" />
                        <ErrorMessage name="dob" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giá Trị Chuyển Nhượng</label>
                        <Field type="number" name="transferValue" className="form-control" />
                        <ErrorMessage name="transferValue" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Vị Trí</label>
                        <Field as="select" name="position" className="form-control">
                            <option value="">-- Chọn vị trí --</option>
                            <option value="Thủ môn">Thủ môn</option>
                            <option value="Hậu vệ">Hậu vệ</option>
                            <option value="Tiền vệ">Tiền vệ</option>
                            <option value="Tiền đạo">Tiền đạo</option>
                        </Field>
                        <ErrorMessage name="position" component="div" className="text-danger" />
                    </div>

                    <button type="submit" className="btn btn-primary me-2">Lưu</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate("/players")}>Hủy</button>
                </Form>
            </Formik>
        </div>
    );
};

export default PlayerForm;