import React from "formik";
import { useEffect, useState } from "react";
import MultipleSelect from "./MultipleSelect";
import { getMaterials } from "../action/features/materials/materialSlice";
import { useDispatch, useSelector } from "react-redux";
import { getClothes, resetState } from "../action/features/clothes/clothSlice";
import { getFilter } from "../action/features/filter/filterSlice";
import styled from "styled-components";

import SingleSelect from "./SingleSelect";

import { Affix, Form, Button, Select } from "antd";

const FilterForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState);
    dispatch(getMaterials());
    dispatch(getClothes());
  }, []);

  const districts = [
    {
      value: "Quận 1",
    },
    {
      value: "Quận 2",
    },
    {
      value: "Quận 3",
    },
    {
      value: "Quận 4",
    },
    {
      value: "Quận 5",
    },
    {
      value: "Quận 6",
    },
    {
      value: "Quận 7",
    },
    {
      value: "Quận 8",
    },
    {
      value: "Quận 9",
    },
    {
      value: "Quận 10",
    },
    {
      value: "Quận 11",
    },
    {
      value: "Quận 12",
    },
  ];

  const materials = useSelector((state) => state.material.materials);
  const data1 = [];
  for (let i = 0; i < materials.length; i++) {
    data1.push({
      value: materials[i].id,
      label: materials[i].name,
    });
  }

  const clothes = useSelector((state) => state.cloth.clothes);

  const data2 = [];
  for (let i = 0; i < clothes.length; i++) {
    data2.push({
      value: clothes[i].id,
      label: clothes[i].name,
    });
  }

  const [inputValues, setInputValue] = useState({
    materials: [],
    clothId: "",
    district: "",
  });

  const handleMaterialInput = (e) => {
    setInputValue({ ...inputValues, materials: e });
  };

  const handleClothInput = (e) => {
    setInputValue({ ...inputValues, clothId: e });
  };

  const handleDistrictInput = (e) => {
    setInputValue({ ...inputValues, district: e });
  };

  const handleSubmit = (e) => {
    dispatch(getFilter(inputValues));
    dispatch(resetState);
  };

  return (
    <Wrapper>
      <Affix offsetTop={100} onChange={(affixed) => console.log(affixed)}>
        <div>
          <h1 className="px-3 py-1" style={{ fontSize: "35px" }}>
            Find the store :
          </h1>
          <br />
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            labelCol={{ lg: 16 }}
            labelWrap
            className="py-3"
          >
            <Form.Item className="px-3 h6">
              <h2>Dry cleaning:</h2>
              <Form.Item
                label="Cloth materials"
                style={{ opacity: 0.75, fontSize: "20px" }}
              >
                <Form.Item name={"materials"} noStyle>
                  <Select
                    mode="multiple"
                    placeholder="Select materials"
                    onChange={handleMaterialInput}
                    value={inputValues.materials}
                  >
                    {data1.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="Type of clothing"
                style={{ opacity: 0.75, fontSize: "20px" }}
              >
                <Form.Item name={"clothId"} noStyle>
                  <Select
                    placeholder="Select clothing type"
                    onChange={handleClothInput}
                    value={inputValues.clothId}
                  >
                    {data2.map((item) => (
                      <Option key={item.value} value={item.value}>
                        {item.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Form.Item>
            </Form.Item>
            <Form.Item className="px-3">
              <h2>District :</h2>
              <Form.Item name={"district"} noStyle>
                <Select
                  placeholder="Select district"
                  onChange={handleDistrictInput}
                  value={inputValues.district}
                >
                  {districts.map((item) => (
                    <Option key={item.value} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="my-5 col-sm-10 mx-4"
            >
              Search
            </Button>
          </Form>
        </div>
      </Affix>
    </Wrapper>
  );
};

export default FilterForm;
const Wrapper = styled.section`
  .my-5 {
    hight: 45px !important;
  }
`;
