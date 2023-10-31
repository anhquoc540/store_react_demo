//import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import { Button } from "../style/Button";
import { Cloudinary } from "@cloudinary/url-gen";
import { AiFillStar } from 'react-icons/ai';
import { RxReset } from 'react-icons/rx';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../action/features/cart/cartSlice";

import { Card, Space, Tag, Button } from 'antd';


const SpecialDetailForm = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let { id, materials, name, store, details, feedback, imageBanner, isStandard, cloth, description } = props;

    const [inputValues, setInputValue] = useState({
        id,
        name,
        imageBanner,
        price: details.price,
        storeId: store.id,
        isStandard,
    });


    const handleAddToCart = (product) => {

        dispatch(addToCart(product));
        // navigate('/cart');
    };


    // const { name, image } = myData;

    function starRating(params) {
        const stars = [];
        for (let index = 0; index < params; index++) {
            stars.push(<AiFillStar className='checked' key={index} />);
        }

        return stars;
    }






    details.price = details.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });


    return (

        <Wrapper>

            <div class="container-fluid">
                <div class="row">

                    <div>

                        <div className="">
                            <div class="row">

                                <div class="col-lg-4 d-flex justify-content-center py-5">
                                    <figure>
                                        <img src='https://pos.nvncdn.net/778773-105877/ps/20230713_WcskjVVYHE.jpeg' alt={name} />


                                    </figure>
                                </div>

                                <div class="col-lg-8">
                                    <div className="card mb-4">
                                        <div className="card-body px-5">
                                            <h2 className="fw-bolder">{name}</h2>
                                            {materials.map(item => <Space size={[0, 8]} wrap>
                                                <Tag key={item.id} color='blue'>{item}</Tag>
                                            </Space>)
                                            }

                                            <Tag key={cloth.id} color='blue'>{cloth.name}</Tag>

                                            <p className="h4 py-3 fw-bold">Mô tả: </p>
                                            <p>{description}
                                            </p>

                                            <br />
                                            <p className="mx-2 display-1 fw-bold" style={{ color: 'green' }}>Giá: {details.price}</p>


                                            <Button type="primary" htmlType="submit" size='large' className="my-4 col-12" onClick={() => handleAddToCart(inputValues)}>
                                                Thêm vào giỏ hàng
                                            </Button>


                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>











                        {/* <div class="card mb-4" style={{ background: '#00A9FF', borderRadius: '10px' }}>
                            <div class="card-body py-5">
                                <h3 class="h3 fw-bold" style={{ color: 'white' }} >Đánh giá từ khách hàng  : </h3>

                                {feedback.map(item =>
                                    <Card
                                        key={item.id}
                                        style={{ marginTop: 16 }}
                                        title={item.username}
                                        type="inner"
                                        bordered={false}
                                        extra={item.createDate}

                                    >
                                        {starRating(item.stars)}


                                        <p className="my-2">{item.content}</p>
                                    </Card>
                                )
                                }


                            </div>
                        </div> */}
                    </div>



                </div>
            </div>


        </Wrapper >




    );
};

const Wrapper = styled.section`
  padding: 10px;


  .ant-table-thead .ant-table-cell {
    background-color:#00A9FF;
    color:white;
    border-radius: 0;
  }

  


  .checked {  
    color :#Ffee21 ;  
    font-size : 20px;  
}  
.unchecked {  
    font-size : 20px;  
}  

  img {
    max-width: 30rem;
    height: 50rem;
    border-radius: 1rem;
  }
`;

export default SpecialDetailForm;