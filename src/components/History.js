import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from 'axios';
// import { config } from "../axios/auth-header";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";

const URL = "https://magpie-aware-lark.ngrok-free.app/api/v1/user/order/all";


const columns = [
  {
    title: "ID",
    dataIndex: "key",
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: (a, b) => a.name.length - b.title.name,
  },
  {
    title: "Store Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.title.name,
  },
  {
    title: "Status",
    dataIndex: "status",

  },
  {
    title: "Tổng Giá",
    dataIndex: "total",
    sorter: (a, b) => a.total - b.total,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const HistoryOrders = () => {
  const { userInfoDTO } = useSelector((state) => state.auth);
  const [state, setState] = useState([]);

  

  const getHistoryOrders = async (id) => {
    const res = await axios.get(`${URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('access_token'))}`,
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        'ngrok-skip-browser-warning': '69420'
    
      },
    });
    if (res.status === 200) {
      setState(res.data);
    }
  }

  useEffect(() => {
    getHistoryOrders(userInfoDTO.id);
  }, []);

  if (!state) {
    <div>...loading</div>
  }
  console.log(state);


  const data1 = [];

  for (let i = 0; i < state.length; i++) {
    data1.push({
      key: state[i].id,
      date: state[i].orderDate,
      name: state[i].store.name,
      status: state[i].status,
      total: state[i].total,

      action: (
        <>
          <Link to={`update/${state[i].id}`} className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          {/* <Link onClick={() => handleDelete(productState[i].id)} className="ms-3 fs-3 text-danger">
            <AiFillDelete />
          </Link> */}
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
