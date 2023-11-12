import styled from "styled-components";
import Header from './Header';
import { Layout, Affix } from 'antd';


const AboutUs = () => {
    const {  Footer } = Layout;

    return (
        <Wrapper>
        <Header/>
        <div className="container">
        <div className="grid grid-three-column">
            <div className="about-data1">
                <h1 className="h2-fix">Giá cả hợp lý​</h1>
                <h3 style={{paddingRight: '9px', width:'350px'}}>
                    Giúp khách hàng chủ động chi phí
                    giặt ủi. Ký kết hợp đồng giá, phí 
                    theo năm dựa theo khối lượng từng 
                    tháng.
                </h3>
                
                <h1 className="h2-fix">Tiện ích</h1>
                <h3 style={{paddingRight: '9px', width:'350px'}}>
                    Chỉ cần gọi điện thoại thông báo 
                    với chúng tôi về nhu cầu giặt ủi, 
                    thời gian của bạn sẽ được tiết 
                    kiệm dành cho gia đình và bạn bè.
                </h3>
            </div>
            <div className="about-img">
            <img
                src="images/about.jpg"
                alt="about-photo"
                className="img-style1"
              />
            </div>
            <div className="about-data1">
                <h1 className="h2-fix">Giao hàng nhanh​</h1>
                <h3 style={{paddingRight: '9px', width:'350px'}}>
                    Giao hàng trong vòng 24 tiếng sau 
                    khi nhận hàng. Đặc biệt có khả 
                    năng giặt ủi và trả hàng trong 
                    ngày với số lượng lớn.
                </h3>
                <h1 className="h2-fix">Chất lượng​</h1>
                <h3 style={{paddingRight: '9px', width:'350px'}}>
                    Chúng tôi sử dụng công nghệ tốt 
                    nhất, chất tẩy rửa cao cấp có 
                    nguồn gốc xuất xứ rõ ràng, 
                    an toàn cho sức khỏe.​
                </h3>
            </div>

        </div>
        </div>
        <Footer style={{ textAlign: 'center', background: '#1874fc', color: 'white', width: "100%", bottom: '10',paddingLeft: '12%', marginTop: '10%' }}>Ant Design ©2023 Created by Ant UED</Footer>

        </Wrapper>
    )
};

export default AboutUs;
const Wrapper = styled.section`
.img-style1 {
    width: 150%;
    height: 90%;
    justify-content: center;
    padding-top:30px;
    padding-right:60px;
    margin-left: -100px;
  }
.about-data1{
    padding-top: 100px;
    padding-bottom: 10px;
    padding-left: 20px;
}
.h2-fix{
    padding-top: 30px;
    padding-right: 20px;
    color: rgb(98 84 243);
}
`;
