import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
// import { config } from "../axios/auth-header";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { Tag } from "antd";

const URL = "https://magpie-aware-lark.ngrok-free.app/api/v1/user/order/all";

const columns = [
  {
    title: "Mã đơn hàng",
    dataIndex: "orderCode",
  },
  {
    title: "Ngày đặt",
    dataIndex: "date",
    sorter: (b, a) => {
      const dateA = Date.parse(
        a.date.split(" ")[0].split("-").reverse().join("-") +
          "T" +
          a.date.split(" ")[1]
      );
      const dateB = Date.parse(
        b.date.split(" ")[0].split("-").reverse().join("-") +
          "T" +
          b.date.split(" ")[1]
      );
      return dateA - dateB;
    },
  },
  {
    title: "Tên cửa hàng",
    dataIndex: "name",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Tổng Giá",
    dataIndex: "total",

    render: (text, record) => record.formattedTotal,
  },
  {
    title: "Thao tác",
    dataIndex: "action",
  },
];
const statusMap = {
  0: "Đã huỷ",
  1: "Chờ xác nhận",
  2: "Chờ lấy hàng",
  3: "Vận chuyển đến cửa hàng",
  4: "Xử lý bởi cửa hàng",
  5: "Đơn sẵn sàng vận chuyển",
  6: "Đơn đang được giao",
  7: "Đơn đã hoàn thành",
};

const colorMap = {
  0: "red",
  1: "gold",
  2: "lime",
  3: "cyan",
  4: "blue",
  5: "geekblue",
  6: "purple",
  7: "green",
};

const HistoryOrders = () => {
  const { userInfoDTO } = useSelector((state) => state.auth);
  const [state, setState] = useState([]);
  const [error, setError] = useState("");

  const getHistoryOrders = async (id) => {
    const res = await axios
      .get(`${URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("access_token")
          )}`,
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        setState(res.data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.toJSON().message);
      });
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Call the function once when the component mounts
    getHistoryOrders(userInfoDTO.id).finally(() => setLoading(false));

    const interval = setInterval(() => {
      getHistoryOrders(userInfoDTO.id);
    }, 1500); // Changed to 2 seconds as per your requirement

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const data1 = [];

  for (let i = 0; i < state.length; i++) {
    // Format the total value as needed
    let formattedTotal =
      new Intl.NumberFormat("en-US").format(state[i].total) + "$";

    data1.push({
      orderCode: state[i].orderCode,
      date: state[i].orderDate,
      name: state[i].store.name,
      status: (
        <Tag color={colorMap[state[i].status]}>
          {statusMap[state[i].status]}
        </Tag>
      ),
      total: state[i].total,
      formattedTotal: formattedTotal, // Add the formatted total value

      action: (
        <>
          <Link to={`${state[i].id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
        </>
      ),
    });
  }

  console.log(data1);
  return (
    <>
      {error.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
            height: " 50vh",
          }}
        >
          <h2 style={{ color: "#6c757d", fontFamily: "Arial, sans-serif" }}>
            Không tìm thấy bất kỳ đơn hàng nào
          </h2>
        </div>
      ) : loading ? (
        <Spin
          style={{ marginTop: "15px" }}
          tip="Đang lấy dữ liệu..."
          size="large"
        >
          <div className="content" />
        </Spin>
      ) : (
        <div>
          <h3 className="mb-4 title">Order History</h3>

          <div>
            <Table columns={columns} dataSource={data1.reverse()} />
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryOrders;
