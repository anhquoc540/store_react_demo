//import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Input, Form, Button, Select } from "antd";
import UploadImage from "./Form/UploadImage";
import { config } from "../axios/auth-header";

const initialState = {
  id: "",
  email: "",
  phone: "",
  fullName: "",
  address: "",
  image: "",
  status: "",
  role: "",
};

export default function ProfileDetailForm() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const user = useParams();
  const [open, setOpen] = useState(false);
  const putUserUrl = `https://magpie-aware-lark.ngrok-free.app/api/v1/user/profile/${user.id}`;
  const [state, setState] = useState(initialState);
  const { id, fullName, email, phone, address, image, status, role } = state;
  const { userInfoDTO } = useSelector((state) => state.auth);
  //const [APIData, setAPIData] = useState([]);
  const getUsersUrl = `https://magpie-aware-lark.ngrok-free.app/api/v1/base/profile/2`;
  // const getProfile = async () => {
  //   const res = await axios.get(getUsersUrl, config);
  //   if (res.status === 200) {
  //     setState(res.data);
  //   }
  // };

  useEffect(() => {
    // await axios.get(getUsersUrl, config).then(
    //     response => {
    //         setState(response.data)
    //     })
    //     // .then(data => { setAPIData(data) })
    //     .catch(error => console.log(error.message));
    // getProfile();
    form.setFieldsValue({
      fullName: userInfoDTO.fullName,
      phone: userInfoDTO.phone,
      address: userInfoDTO.address,
    });
  }, []);

  console.log("Dữ liệu từ API:", state);
  const layout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const validateMessages = {
    required: "${label} đang trống, Vui lòng nhập thông tin ! ",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.put(
        `https://magpie-aware-lark.ngrok-free.app/api/v1/user/profile/update/${user.id}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("access_token")
            )}`,
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log("Update successful", response.data);
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  // const onCreate = (values) => {
  //     console.log('Received values of form: ', values);
  //     setOpen(false);
  // };
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  return (
    <Wrapper>
      <div class="container">
        <h1>Thông tin cá nhân</h1>
        <div className="card">
          <div className="card-body p-5">
            <div class="row">
              <div className="col-sm-2 p-5">
                <UploadImage className="m-2"></UploadImage>
              </div>
              <div className="col-sm-10">
                <Form
                  form={form}
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                  style={{
                    maxWidth: 600,
                  }}
                >
                  <Form.Item
                    name="fullName"
                    label="Name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      defaultValue={userInfoDTO.fullName}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                  <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      defaultValue={userInfoDTO.address}
                      onChange={handleInputChange}
                    />
                  </Form.Item>
                  <Form.Item label="Email">{userInfoDTO.email}</Form.Item>
                  <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      name="phone"
                      defaultValue={userInfoDTO.phone}
                      onChange={handleInputChange}
                      addonBefore={prefixSelector}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      ...layout.wrapperCol,
                      offset: 8,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Lưu Thông Tin
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 10px;
  img {
    width: 10rem;
    height: 20rem;
    border-radius: 1rem;
  }
`;
