

import GridView from "./GridView";


import { useDispatch, useSelector } from "react-redux";
const StoreList = () => {


    const stores = useSelector((state) => state.filter.filters);

    return (
        <>

            <h5 style={{ marginLeft: '5rem' }} className="py-3">Danh sách cửa hàng: </h5>
            <br />
            <GridView data={stores} />

        </>



    );
}


export default StoreList;