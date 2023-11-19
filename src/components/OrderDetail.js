import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { Button, Timeline } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { config } from "../axios/auth-header";

export default function OrderDetails() {
  let { id } = useParams();
  id = Number(id);
  const [order, setOrder] = useState([]);
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");
  React.useEffect(() => {
    axios
      .get(`https://magpie-aware-lark.ngrok-free.app/api/v1/user/order/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access_token")
          )}`,
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        setOrder(response.data);
        setItem(response.data.items);
      })
      .catch((error) => {
        console.error(error);
        setError(error.toJSON().message);
      });
  }, []);
  console.log(error);
  const handleButtonClick = async () => {
    try {
      const response = await axios.delete(
        `https://magpie-aware-lark.ngrok-free.app/api/v1/user/order/cancel/${id}`,
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
      if (response.status === 200) {
        setOrder((prevOrder) => ({ ...prevOrder, status: 0 }));
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error(
        "An error occurred while updating the order status:",
        error
      );
    }
  };

  const statusMap = {
    1: "Chờ xác nhận",
    2: "Chờ lấy hàng từ khách hàng",
    3: "Vận chuyển đến cửa hàng",
    4: "Đang xử lý bởi cửa hàng" /*shop xác nhận số kg, status 4->5*/,
    5: "Đơn sẵn sàng vận chuyển" /*đã có số kg*/,
    6: "Đơn đang được giao đến khách hàng",
    7: "Đơn đã hoàn thành",
  };

  let statusArray = [];
  for (let i = 1; i < order.status; i++) {
    statusArray.push({ children: statusMap[i] });
  }
  if (order.status === 7) {
    statusArray.push({ children: statusMap[order.status] });
  } else if (order.status === 0) {
    statusArray.push({ children: "Đơn đã huỷ" });
  }
  let pendingStatus = statusMap[order.status];
  let navigate = useNavigate();
  return (
    <>
      {error.length > 0 ? (
        <h2>Không thể truy cập</h2>
      ) : (
        <section className="h-100 h-custom">
          <Link to={`/profilelayout/history`}>
            <button className="back-button" type="button">
              <span style={{ marginLeft: "5px" }}>Quay về </span>
              <AiIcons.AiOutlineRollback
                style={{ width: "20px", marginLeft: "10px" }}
              />
            </button>
          </Link>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="8" xl="6">
                <MDBCard className="border-3 border-color-custom MDBCard">
                  <MDBCardBody className="p-5">
                    <p
                      className="lead fw-bold mb-5"
                      style={{ color: "#f37a27" }}
                    >
                      Purchase Receipt
                    </p>
                    <MDBRow>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Tên cửa hàng</p>
                        <p>{order.store?.name}</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Ngày đặt đơn</p>
                        <p>{order.orderDate}</p>
                      </MDBCol>
                      <MDBCol className="mb-3">
                        <p className="small text-muted mb-1">Mã đơn</p>
                        <p>{order?.orderCode}</p>
                      </MDBCol>
                    </MDBRow>

                    <div
                      className="mx-n5 px-5 py-4"
                      style={{ backgroundColor: "#f2f2f2" }}
                    >
                      {item.map((item, index) => (
                        <MDBRow>
                          <MDBCol md="8" lg="9">
                            <p>{item.laundryService.name}</p>
                          </MDBCol>
                          <MDBCol md="4" lg="3">
                            <p>{item.total.toLocaleString()}₫</p>
                          </MDBCol>
                        </MDBRow>
                      ))}
                    </div>
                    <MDBRow className="my-4">
                      <MDBCol
                        md="4"
                        className="offset-md-8 col-lg-3 offset-lg-9"
                      >
                        <p
                          className="lead fw-bold mb-0"
                          style={{ color: "#f37a27" }}
                        >
                          {order.total?.toLocaleString()}₫
                        </p>
                      </MDBCol>
                    </MDBRow>

                    <p
                      className="lead fw-bold mb-4 pb-2"
                      style={{ color: "#f37a27" }}
                    >
                      Theo dõi đơn hàng
                    </p>

                    <div>
                      <Timeline
                        pending={order.status < 7 ? pendingStatus : null}
                        items={statusArray}
                      />
                    </div>
                    {order.status === 1 && (
                      <Button
                        type="primary"
                        onClick={handleButtonClick}
                        size="large"
                      >
                        Huỷ đơn hàng
                      </Button>
                    )}
                    {order.status === 5 && order.isPaid === 0 && (
                      <Button type="primary" size="large">
                        Thanh toán
                      </Button>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </>
  );
}
