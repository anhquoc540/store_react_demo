

import React, { useFormik } from "formik";
import { useEffect, useState } from 'react';
import MultipleSelect from './MultipleSelect';
import { getMaterials } from '../action/features/materials/materialSlice';
import { useDispatch, useSelector } from "react-redux";
import { Divider, Select } from 'antd';
import { getClothes, resetState } from "../action/features/clothes/clothSlice";
import { getFilter } from "../action/features/filter/filterSlice";
import styled from "styled-components";

import SingleSelect from "./SingleSelect";



import { Button, Form, Affix } from 'antd';
import { opacity } from "@cloudinary/url-gen/actions/adjust";
import { color } from "@cloudinary/url-gen/qualifiers/background";



const FilterForm = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState);
        dispatch(getMaterials());
        dispatch(getClothes());

    }, []);

    const districts = [
        {
            value: 'Quan 1'
        },
        {
            value: 'Quan 2'
        },
        {
            value: 'Quan 3'
        },
        {
            value: 'Quan 4'
        },
        {
            value: 'Quan 5'
        },
        {
            value: 'Quan 6'
        },
        {
            value: 'Quan 7'
        },
        {
            value: 'Quan 8'
        },
        {
            value: 'Quan 9'
        }
    ]

    const materials = useSelector((state) => state.material.materials);
    const data1 = [];
    for (let i = 0; i < materials.length; i++) {
        data1.push({

            value: materials[i].id,
            label: materials[i].name

        });
    }

    const clothes = useSelector((state) => state.cloth.clothes);


    const data2 = [];
    for (let i = 0; i < clothes.length; i++) {
        data2.push({

            value: clothes[i].id,
            label: clothes[i].name

        });
    }

    const [inputValues, setInputValue] = useState({
        materials: [],
        clothId: '',
        district: ''
    });


    const handleMaterialInput = (e) => {
        setInputValue({ ...inputValues, materials: e });
    }

    const handleClothInput = (e) => {
        setInputValue({ ...inputValues, clothId: e });
    }

    const handleDistrictInput = (e) => {
        setInputValue({ ...inputValues, district: e });
    }

    const handleSubmit = (e) => {
        dispatch(getFilter(inputValues));
        dispatch(resetState);
    }


    return (
        <Wrapper>
            <Affix offsetTop={60} onChange={(affixed) => console.log(affixed)}>
                <h1 className="px-3 py-1" style={{fontSize:'40px'}}>
                    Tìm kiếm cửa hàng :
                </h1>
              <br/>
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    labelCol={{ lg: 16 }}
                    labelWrap
                  
                    className="py-3"
                    

                >   <Form.Item className="px-3 h6" >
                         <h1>Theo giặt hấp:</h1>
                        <Form.Item label="Chất liệu vải" style={{opacity: 0.75, fontSize: '20px'}}>

                            <Form.Item
                                name={'materials'}
                                noStyle

                            >
                                <MultipleSelect name="materials" options={data1} onChange={handleMaterialInput} value={inputValues.materials} ></MultipleSelect>
                            </Form.Item>



                        </Form.Item>
                        <Form.Item label="Loại quần áo"  style={{opacity: 0.75, fontSize: '20px'}}>
                            <Form.Item
                                name={'clothId'}
                                noStyle
                            >
                                <SingleSelect name='clothId' options={data2} onChange={handleClothInput} value={inputValues.clothId}></SingleSelect>
                            </Form.Item>
                        </Form.Item>
                    </Form.Item>


                    <Form.Item className="px-3" >
                        <h1>Theo quận:</h1>
                        <Form.Item
                            name={'district'}
                            noStyle
                        >
                            <SingleSelect name='district' options={districts} onChange={handleDistrictInput} value={inputValues.district}></SingleSelect>
                        </Form.Item>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" className="my-5 col-sm-10 mx-4">
                        Tìm kiếm
                    </Button>

                </Form>

            </Affix>
        </Wrapper>
        
    );

}

export default FilterForm;
const Wrapper = styled.section`
.my-5{
    hight: 45px !important;
}
`