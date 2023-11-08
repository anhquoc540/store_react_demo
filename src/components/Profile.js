//import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import { Button } from "../style/Button";

import { FaLock } from 'react-icons/fa';

import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';


import { Card, Space, Input, Form, Button, InputNumber, message, Upload } from 'antd';
import ModalForm from "./Form/ModalForm";
import UploadImage from "./Form/UploadImage";


const ProfileDetailForm = (props) => {

    const [open, setOpen] = useState(false);
    const [defaultName, setDefaultName] = useState('Anh Quoc');



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
                                        onFinish={onFinish}
                                        
                                        validateMessages={validateMessages}
                                       
                                    >
                                        <Form.Item
                                            name={['user', 'name']}
                                            label="Họ và tên:"
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

                                        {/*Phone------------------------------------------------------------------------------------------------------------*/}
                                        <Form.Item
                                            name="phone"
                                            label="Số điện thoại"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Vui lòng nhập số điện thoại!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                addonBefore={+84}
                                                maxLength={10}
                                                className="col-6"
                                            />
                                        </Form.Item>

                                        {/*Address------------------------------------------------------------------------------------------------------------*/}
                                        <Form.Item
                                            name="address"
                                            label="Địa chỉ :"
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

                                        {/*Button------------------------------------------------------------------------------------------------------------*/}
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

export default ProfileDetailForm;