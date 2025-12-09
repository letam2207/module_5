import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/AccountService';

const LoginComponent = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: ""
    };

    const validationSchema = Yup.object({
        username: Yup.string().required("Tên đăng nhập không được để trống"),
        password: Yup.string().required("Mật khẩu không được để trống")
    });

    const handleSubmit = async (values) => {
        const result = await login(values);

        if (result) {

            localStorage.setItem("user", JSON.stringify(result));

            toast.success(`Chào mừng ${result.name} quay trở lại!`);
            navigate("/players");

            window.location.reload();
        } else {
            toast.error("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Đăng Nhập Hệ Thống</h3>
                        </div>
                        <div className="card-body">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label">Tên đăng nhập</label>
                                        <Field type="text" name="username" className="form-control" placeholder="Nhập: admin" />
                                        <ErrorMessage name="username" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Mật khẩu</label>
                                        <Field type="password" name="password" className="form-control" placeholder="Nhập: 123" />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Đăng Nhập</button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;