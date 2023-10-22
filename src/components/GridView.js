

import React from "react";
import styled from "styled-components";
import Store from "./Store";
import { Col, Divider, Row } from 'antd';


const GridView = ({ data }) => {
    // const { singleServiceStore} = useStoreContext();

    if (!Array.isArray(data) || data.length === 0) {

        return (
            <div >
                <p>Không tìm được dữ liệu</p>
            </div>
        );
    }
    //  console.log(
    //   "~ file: grid.js", singleServiceStore
    // );

    return (


        <Row gutter={[10, 24]}>
            {data.map((curElem) => {
                return <Col className="gutter-row" span={8}>
                    <Wrapper className="section">
                        <Store key={curElem.id} {...curElem} />

                    </Wrapper>


                </Col>
            })}
        </Row>




    );

};
const Wrapper = styled.section`
  padding: 2rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 1rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;


export default GridView;