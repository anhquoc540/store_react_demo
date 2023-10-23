import React from 'react';
import { Layout, Row } from 'antd';
import FilterForm from '../FilterForm';

import StoreList from '../StoreList';
import styled from "styled-components";
import HeroSection from '../HeroSection';
import { Affix } from 'antd';
import { color } from '@cloudinary/url-gen/qualifiers/background';

const { Header, Footer, Sider, Content } = Layout;

const MainLayout = (children) => {

    const [top, setTop] = React.useState(100);
    const data = {
        name: "The Laundry",
    }
    const { filter, list } = children



    return (

        <Layout>

            <Affix offsetTop={-1} onChange={(affixed) => console.log(affixed)}>
                <Header style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="demo-logo" />

                </Header>
            </Affix>

            <Content hasSider>

                <Layout style={{ minHeight: '100vh', position: 'relative' }} hasSider>


                    <Sider style={{ background: 'white' }} className='h6'>

                        {/* <FilterForm></FilterForm> */}

                        {filter}


                    </Sider>





                    <Content>



                        < Wrapper >
                            <HeroSection myData={data}></HeroSection>

                            <div className="container">
                                <section>
                                    {list}

                                </section>
                            </div>

                        </Wrapper>



                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center', background: '#3876BF', color: 'white', position: 'relative', width: "100%", bottom: '0' }}>Ant Design ©2023 Created by Ant UED</Footer>
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

