import React from 'react';
import { Layout } from 'antd';
import FilterForm from '../FilterForm';

import StoreList from '../StoreList';
import styled from "styled-components";
import HeroSection from '../HeroSection';
import { Affix } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const MainLayout = () => {

    const [top, setTop] = React.useState(100);
    const data = {
        name: "The Laundry",
    }



    return (

        <Layout>

            <Affix offsetTop={-1} onChange={(affixed) => console.log(affixed)}>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" />

                </Header>
            </Affix>

            <Content style={{ padding: '20px 10px'}} className='justify_content'>

                <Layout style={{minHeight:'100vh', position: 'relative'}}>
                    
                        <Sider style={{ background: "white"}} className='d-flex align-items-centers'>
                    
                            <FilterForm></FilterForm>
                          
                        </Sider>
                  
                    <Content>
                        <HeroSection myData={data}></HeroSection>
                        < Wrapper >
                            <div className="container grid grid-filter-column">
                                <section>

                                    <StoreList></StoreList>

                                </section>
                            </div>
                        </Wrapper>

                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center', background:'#3876BF', color:'white', position: 'relative',width:"100%", bottom: '0'}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>

    );



}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 0.5fr;
    }
  }
`;

export default MainLayout;

