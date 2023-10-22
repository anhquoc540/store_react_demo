

import GridView from "./GridView";


import { useDispatch, useSelector } from "react-redux";
const StoreList = () => {


     const stores = useSelector((state) => state.filter.filters);

        return <GridView data={stores} className="d-flex justify-content-center"/>;
    }


export default StoreList;