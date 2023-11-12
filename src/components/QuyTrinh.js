import styled from "styled-components";
import Header from './Header';
import { MdLaptopMac } from 'react-icons/md';
import { FaMoneyBillWave, FaTshirt, FaMotorcycle  } from 'react-icons/fa';
import { Layout } from 'antd';


const QuyTrinh = () => {
    const {  Footer } = Layout;

    return (
        <Wrapper>
        <Header/>
        <div className="container">
            <h1 style={{ textAlign: 'center', margin: '50px' }}>Quy Trình Vận Hành</h1>
        <div className="grid grid-four-column">
            <div className="about-data1">
                <div className="icon">
                <MdLaptopMac />
                </div>
                <h1 className="h2-fix">Đặt dịch vụ</h1>
                <h4 style={{fontSize:'20px'}}>
                    Dễ dàng trong vài giây với Website 
                    & Hotline (0936.277.993) của chúng tôi
                </h4>
            </div>
            <div className="about-data1">
            <div className="icon">
                <FaMotorcycle />
                </div>
                <h1 className="h2-fix">Nhận Đồ</h1>
                <h4 style={{fontSize:'20px'}}> 
                    Chúng tôi nhận đồ tận nơi, vào thời 
                    gian tiện nhất cho bạn - 8AM-9PM 
                    mỗi ngày tại TpHCM
                </h4>
            </div>
            <div className="about-data1">
            <div className="icon">
                <FaTshirt />
                </div>
                <h1 className="h2-fix">Giặt & Làm Sạch</h1>
                <h4 style={{fontSize:'20px'}}>
                    Không chỉ giặt & làm sạch chất lượng
                    cao cấp, chúng tôi chăm sóc cẩn 
                    thận từng món đồ của bạn
                </h4>
            </div>
            <div className="about-data1">
            <div className="icon">
                <FaMoneyBillWave />
                </div>
                <h1 className="h2-fix">Giao Đồ & Thanh Toán</h1>
                <h4 style={{fontSize:'20px'}}>
                    Những món đồ sạch thơm của bạn sẽ 
                    được giao lại tận nơi - 8AM-9PM 
                    mỗi ngày tại TpHCM
                </h4>
            </div>
            
            </div>

        
        </div>
        <Footer style={{ textAlign: 'center', background: '#1874fc', color: 'white', width: "100%", bottom: '10', marginTop: '10%' }}>Ant Design ©2023 Created by Ant UED</Footer>

        </Wrapper>
    )
};

export default QuyTrinh;
const Wrapper = styled.section`
.img-style1 {
    width: 190%;
    height: 90%;
    justify-content: center;
    padding-top:30px;
    padding-right:60px;
    margin-left: -100px;
  }
.about-data1{
    width:300px;
    padding-top: 100px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-radius:10px;
    border: 2px dashed  #000;
    padding:10px;
    background-color: rgba(248, 173, 61, 0.723);

}
.h2-fix{
    padding-top: 30px;
    font-size:26px;
}

.icon{
    padding-left:100px;
    font-size:70px;
}
`;
