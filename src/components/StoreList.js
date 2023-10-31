

import { useEffect } from "react";
import GridView from "./GridView";


import { useDispatch, useSelector } from "react-redux";
import { getAllStore } from "../action/features/store/storeSlice";
const StoreList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllStore());
    },[]);

    const filters = useSelector((state) => state.filter.filters);
    const stores =  useSelector((state) => state.store.stores);
    return (
        <>

            <h3 style={{ marginLeft: '1rem' }} className="py-5">Danh sách cửa hàng: </h3>
            <br />
            {filters.length > 0 ? ( <GridView data={filters} />) : ( <GridView data={stores} />)}
           

        </>



    );
}


export default StoreList;