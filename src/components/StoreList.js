

import GridView from "./GridView";


import { useDispatch, useSelector } from "react-redux";
const StoreList = () => {


    const stores = useSelector((state) => state.filter.filters);

    return (
        <>

            <h3 style={{ marginLeft: '1rem' }} className="py-5">Danh sách cửa hàng: </h3>
            <br />
            <GridView data={stores} />

        </>



    );
}


export default StoreList;