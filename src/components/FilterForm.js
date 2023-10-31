

import React, { useFormik } from "formik";
import { useEffect, useState } from 'react';
import MultipleSelect from './MultipleSelect';
import { getMaterials } from '../action/features/materials/materialSlice';
import { useDispatch, useSelector } from "react-redux";
import { Divider, Select } from 'antd';
import { getClothes, resetState } from "../action/features/clothes/clothSlice";
import { getFilter } from "../action/features/filter/filterSlice";


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
        <>
            {/*
            <form onSubmit={handleSubmit}>
                <div className=" row px-1 py-2">

                    <MultipleSelect name="materials" options={data1} onChange={handleMaterialInput} value={inputValues.materials} ></MultipleSelect>

                </div>

                <div className="row px-1">


                    <SingleSelect name='clothId' options={data2} onChange={handleClothInput} value={inputValues.clothId}></SingleSelect>


                </div>
                <div className="row px-5 ">
                    <button
                        className="btn btn-success border-0 rounded-3 my-5 float-end"
                        type="submit"
                    >
                        Filter
                    </button>
                </div>
            </form> */}
            <Affix offsetTop={100} onChange={(affixed) => console.log(affixed)}>
                <h4 className="px-3 py-1">
                    Tìm kiếm cửa hàng :
                </h4>
              <br/>
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                    labelCol={{ lg: 12 }}
                    labelWrap
                    style={{ backgroundColor:'white', borderRadius:'10px' }}
                    className="py-3"
                    

                >   <Form.Item className="px-3 h6" >
                         <p className="display-6">Theo giặt hấp:</p>
                        <Form.Item label="Chất liệu vải" style={{opacity:'65%'}}>

                            <Form.Item
                                name={'materials'}
                                noStyle

                            >
                                <MultipleSelect name="materials" options={data1} onChange={handleMaterialInput} value={inputValues.materials} ></MultipleSelect>
                            </Form.Item>



                        </Form.Item>
                        <Form.Item label="Loại quần áo"  style={{opacity:'65%'}}>
                            <Form.Item
                                name={'clothId'}
                                noStyle
                            >
                                <SingleSelect name='clothId' options={data2} onChange={handleClothInput} value={inputValues.clothId}></SingleSelect>
                            </Form.Item>
                        </Form.Item>
                    </Form.Item>


                    <Form.Item className="px-3" >
                        <p className="display-6">Theo quận:</p>
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



        </>










    );




}

export default FilterForm;