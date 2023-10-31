import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "./HeroSection";
import { getStore, resetState } from "../action/features/store/storeSlice";
import { getAllSpecialServicebyStore, getStandardServicebyStore } from "../action/features/laundry/laundrySlice";
import GridViewLaundry from "./GridViewLaundry";
import StandardDetailForm from "./StandardDetailForm";
import { Tabs } from 'antd';
import { Background } from "@cloudinary/url-gen/qualifiers";


const SingleStore = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {

        dispatch(getStore(id));
        dispatch(getAllSpecialServicebyStore(id))
        dispatch(getStandardServicebyStore(id))
    }, []);

    const singleStore = useSelector((state) => state.store.singleStore);
    const specialLaundries = useSelector((state) => state.laundry.specialLaundries);
    //const standardLaundries = useSelector((state) => state.laundry.standardLaundries);
    const standardLaundries = {
        id: 1,
        name:"Giặt sấy tiêu chuẩn",
        details: [{
            id: 1,
            from: 2,
            to: 3,
            unit: 'kg',
            price: 30000
        }],
        feedback: [],
        store: {
            id: 1,
            name: 'aa'
        },
        isStandard: true,
    }

    const data = [
        {
            key: 1,
            label: 'Dịch vụ giặt sấy',
            children: <StandardDetailForm key={standardLaundries.id} {...standardLaundries} />
        },
        {
            key: 2,
            label: 'Dịch vụ giặt hắp',
            children: <GridViewLaundry data={specialLaundries}></GridViewLaundry>
        }

    ]




    return (
        <>
        <Wrapper>

            <div>
                <section class="bsb-hero-2 px-3 card" style={{ borderRadius: '10px' }}>
                    <div class="container p-4 overflow-hidden">
                        <div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
                            <div class="col-12 col-lg-4 order-1 order-lg-0">
                                <h1 class="display-4 fw-bold mb-3">Chào mừng đến với cửa hàng</h1>
                                <p class="display-3 fw-bold  mb-5" style={{ color: "blue" }}>{singleStore.name}</p>
                                <p class="display-6 mb-5">{singleStore.address}, {singleStore.district}</p>
                                <p class="display-6  mb-5">SĐT: {singleStore.phone}</p>

                            </div>
                            <div class="col-12 col-lg-8 text-center">

                                <img class="img-fluid" loading="lazy" src="https://res.cloudinary.com/df6mibrwv/image/upload/v1698075672/ifcbbfxfbngpkprwr1j8.png" style={{ WebkitMaskImage: 'url(./assets/img/hero-img-blob-1.svg);', maskImage: "url(./assets/img/hero-img-blob-1.svg);" }} />
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="py-5 container grid grid-filter-collumn">
                

                    <section>
                        <Tabs
                            defaultActiveKey="1"
                            type="card"
                            size='large'
                            items={data}


                        />


                    </section>
                

            </div>

            </Wrapper>

        </>







    );




};
const Wrapper = styled.section`
.ant-tabs-content-holder {
    background-color : #ffff;
    border-radius:10px;
    padding: 2rem;
}

`;




export default SingleStore;