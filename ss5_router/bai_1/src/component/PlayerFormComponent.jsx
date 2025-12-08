import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addNew, findById, getAllPositions, updatePlayer } from '../service/PlayerService';
import { toast } from 'react-toastify';

const PlayerFormComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [positions, setPositions] = useState([]); // State chứa danh sách vị trí

    const [initialValues, setInitialValues] = useState({
        code: "",
        name: "",
        dob: "",
        transferValue: "",
        position: "" // Formik sẽ lưu chuỗi JSON của object position
    });

    // Load danh sách vị trí và dữ liệu cầu thủ (nếu là edit)
    useEffect(() => {
        const loadData = async () => {
            // 1. Lấy danh sách vị trí
            const positionList = await getAllPositions();
            setPositions(positionList);

            // 2. Nếu có id (Edit) -> Lấy thông tin cầu thủ
            if (id) {
                const player = await findById(id);
                if (player) {
                    // Cần chuyển object position thành chuỗi JSON để gán vào select value
                    setInitialValues({
                        ...player,
                        position: JSON.stringify(player.position)
                    });
                }
            }
        };
        loadData();
    }, [id]);

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

    const handleSubmit = async (values) => {
        // values.position đang là chuỗi JSON, cần parse về object
        const formValues = {
            ...values,
            position: JSON.parse(values.position)
        };

        if (id) {
            await updatePlayer(formValues);
            toast.success("Cập nhật thành công!");
        } else {
            await addNew(formValues);
            toast.success("Thêm mới thành công!");
        }
        navigate("/players");
    };

    return (
        <div className="container mt-4">
            <h2>{id ? "Chỉnh sửa cầu thủ" : "Thêm mới cầu thủ"}</h2>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
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
                        {/* Render danh sách vị trí lấy từ API */}
                        <Field as="select" name="position" className="form-control">
                            <option value="">-- Chọn vị trí --</option>
                            {positions.map((pos) => (
                                <option key={pos.id} value={JSON.stringify(pos)}>
                                    {pos.name}
                                </option>
                            ))}
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

export default PlayerFormComponent;