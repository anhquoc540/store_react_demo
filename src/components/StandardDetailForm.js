
import styled from "styled-components";


import { AiFillStar } from 'react-icons/ai';
import React, { useState } from 'react';
import { Table, Card, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../action/features/cart/cartSlice";
const StandardDetailForm = () => {
  // const { name, image } = myData;


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const standardLaundries =useSelector((state) => state.laundry.standardLaundries);

  const {id, name,description ,imageBanner,isStandard, store, details, feedbacks} = standardLaundries;

  const [inputValues, setInputValue] = useState({
    id,
    name,
    isStandard,
    storeId: store?.id,
  


  });



  function starRating(params) {
    const stars = [];
    for (let index = 0; index < params; index++) {
      stars.push(<AiFillStar className='checked' key={index} />);
    }

    return stars;
  }



  function generateCurrency(params) {
    return params.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
    },
    {
      title: 'Từ',
      dataIndex: 'from',
    },
    {
      title: 'Đến',
      dataIndex: 'to',

    },
    {
      title: 'Đơn vị',
      dataIndex: 'unit',

    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',

    },

  ];


  const data = [];
 
  for (let i = 0; i < details?.length; i++) {
    data.push({

      key: details[i].id,

      to: details[i].to,
      from: details[i].from,
      price: generateCurrency(details[i].price),
      unit: details[i].unit,

    });
}
  const handleAddToCart = (product) => {

    dispatch(addToCart(product));
    //navigate('/cart');
    
  };

  return (
    <Wrapper>

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">



            <div class="card mb-4">
              <div class="card-body">
                <div class="row">

                  <img src={imageBanner}  alt={name}/>



                </div>
              </div>
            </div>



            <h3 className="px-5 fw-bold">Bảng Giá : </h3>



            <Table
              columns={columns} key={data.key} dataSource={data} size="middle" bordered
              className="my-4"
              pagination={false}
            >




            </Table>


            <div class="card mb-4" style={{ background: '#00A9FF', borderRadius: '10px' }}>
              <div class="card-body py-5">
                <h3 class="h3 fw-bold" style={{ color: 'white' }} >Đánh giá từ khách hàng  : </h3>
                {feedbacks?.map(item =>
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
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body px-5">
                <h2 class="fw-bolder">{name}</h2>
                <p> </p>
                <p class="h4 fw-bold">Mô tả: </p>
                <p>{description}
                </p>
                <Button type="primary" htmlType="submit" size='large' className="my-4 col-12" onClick={() => handleAddToCart(inputValues)}>
                  Thêm vào giỏ hàng
                </Button>
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

  .ant-table-thead .ant-table-cell {
    background-color:#00A9FF;
    color:white;
    border-radius: 0;
    text-align:center;
  }
  .ant-table-tbody .ant-table-cell {
    text-align:center;
  }

  .img-logo-section {
    
    min-width: 50rem;
    height: 350px;
   
  }

  .checked {  
    color :#Ffee21 ;  
    font-size : 20px;  
}  
.unchecked {  
    font-size : 20px;  
}  

  img {
    min-width: 200px;
    height: 20rem;
    border-radius: 1rem;
  }

  .hero-section-data {

    

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-left: 10%;
      
    }
  }

  .hero-section-image {
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default StandardDetailForm;