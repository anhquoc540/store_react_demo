//import { NavLink } from "react-router-dom";
import styled from "styled-components";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { FaLock } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import React, { useState, useEffect} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";


import { Card, Space, Input, Form, Button, InputNumber, message, Upload } from 'antd';
import ModalForm from "./Form/ModalForm";
import UploadImage from "./Form/UploadImage";


export default function ProfileDetailForm() {
    const staff = useParams();
    const [open, setOpen] = useState(false);
    const [defaultName, setDefaultName] = useState('Anh Quoc');

    const [APIData, setAPIData] = useState([]);
    const getUsersUrl = `https://6530c5486c756603295f0271.mockapi.io/api/v1/staffs/${staff.id}`;
    const putUserUrl = `https://6530c5486c756603295f0271.mockapi.io/api/v1/staffs/${staff.id}`;
    useEffect(() => {
        axios.get(getUsersUrl).then(
            response => {
                
                return response.data;
            })
            .then(data => { setAPIData(data) })
            .catch(error => console.log(error.message));

    }, [getUsersUrl])
    

    const formik = useFormik({

        enableReinitialize:true,
        
        initialValues: APIData,

        onSubmit: (values) => {
            values.createdAt = new Date(values.createdAt);
          
            fetch(putUserUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {setOpen(true);})
              .catch(error => {console.log(error.message);});
          },
          validationSchema: Yup.object({
            name: Yup.string().required("Required.").min(3, "Must be more 2 characters"),
            address: Yup.string().required("Required.").typeError("Please enter a address"),
            numberP: Yup.number().integer().required("Required.").typeError("Please enter a valid number"),
            
            
        }),
    });

    const layout = {
        labelCol: {
            span: 3,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const validateMessages = {
        required: '${label} đang trống, Vui lòng nhập thông tin ! ',
        types: {
          
            number: '${label} is not a valid number!',
            
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };


    const onFinish = (values) => {
        console.log(values);
    };

   
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };

    return (

        <Wrapper>
            
            <div class="container">
            <h1>Thông tin cá nhân</h1>
                <div className="card">
                    <div className="card-body p-5">
                        <div class="row">

                            <div className="col-sm-2 p-5">

                                <UploadImage className='m-2'></UploadImage>

                            </div>
                            <div className="col-sm-10">
                              
                                    <Form
                                        {...layout}
                                        name="nest-messages"
                                        onSubmit={formik.handleSubmit}                                        
                                        validateMessages={validateMessages}
                                       
                                    >
                                        <Form.Item
                                            name={['user', 'name']}
                                            label="Họ và tên:"
                                            values={formik.values.name}
                                            onChange={formik.handleChange}
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}

                                        >
                                            <Input className="col-6" />
                                        </Form.Item>

                                        <Form.Item

                                            label="Email"
                                        >
                                            Email
                                        </Form.Item>

                                        <Form.Item
                                            name="phone"
                                            label="Số điện thoại"
                                            values={formik.values.numberP}
                                            onChange={formik.handleChange}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập số điện thoại!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                addonBefore={ +84}
                                                maxLength={10}
                                                className="col-6"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            name="address"
                                            label="Địa chỉ :"
                                            values={formik.values.address}
                                            onChange={formik.handleChange}
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="col-6"
                                            />
                                        </Form.Item>


                                        <Form.Item label="Bảo mật : " colon={false} >
                                            <Button
                                                type="primary"
                                                onClick={() => {
                                                    setOpen(true);
                                                }}
                                            >
                                                <FaLock className="justify-content"></FaLock> <span className="px-4"> Cập nhật mật khẩu </span>
                                            </Button>
                                            <ModalForm
                                                open={open}
                                                onCreate={onCreate}
                                                onCancel={() => {
                                                    setOpen(false);
                                                }}
                                            />
                                        </Form.Item>

                                        <Form.Item label=" " colon={false} >
                                            <Button type="primary" htmlType="submit" size="large">
                                                Lưu thông tin
                                            </Button>

                                        </Form.Item>

                                    </Form>

                                </div>

                            </div>

                        </div>
                    </div>
            </div>
        </Wrapper >

    );
};

const Wrapper = styled.section`
  padding: 10px;
img {
    max-width: 20rem;
    height: 20rem;
    border-radius: 1rem;
  }
`;

