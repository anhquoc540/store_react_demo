import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
// import { config } from "../axios/auth-header";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";

const URL = "https://magpie-aware-lark.ngrok-free.app/api/v1/user/order/all";

const columns = [
  {
    title: "NO",
    dataIndex: "key",
  },
  {
    title: "Ngày đặt",
    dataIndex: "date",
    sorter: (a, b) => new Date(a.orderDate) - new Date(b.orderDate),
  },
  {
    title: "Tên cửa hàng",
    dataIndex: "name",
    sorter: (a, b) => a.store?.name - b.store?.name,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Tổng Giá",
    dataIndex: "total",
    sorter: (a, b) => a.total - b.total,
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

const HistoryOrders = () => {
  const { userInfoDTO } = useSelector((state) => state.auth);
  const [state, setState] = useState([]);

  const getHistoryOrders = async (id) => {
    const res = await axios.get(`${URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("access_token")
        )}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "ngrok-skip-browser-warning": "69420",
      },
    });
    if (res.status === 200) {
      setState(res.data);
    }
  };

  useEffect(() => {
    getHistoryOrders(userInfoDTO.id);
  }, []);

  const data1 = [];

  for (let i = 0; i < state.length; i++) {
    data1.push({
      key: state[i].id,
      date: state[i].orderDate,
      name: state[i].store.name,
      status: statusMap[state[i].status],
      total: state[i].total,

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
    <div>
      <h3 className="mb-4 title">Lịch Sử Đơn Hàng</h3>

      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default HistoryOrders;
