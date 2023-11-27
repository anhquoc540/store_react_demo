

import { useEffect, useState } from "react";
import GridView from "./GridView";

import { useDispatch, useSelector } from "react-redux";
import { getAllStore } from "../action/features/store/storeSlice";
import storeService from "../action/features/store/storeService";

const StoreList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStore());
       
    }, []);

    const filters = useSelector((state) => state.filter.filters);
    const stores = useSelector((state) => state.store.stores);
    return (
        <>
            {/* <h2 style={{ marginLeft: '1rem' }} className="py-5">List of stores: </h2>
            <br />
            {filters.length > 0 ? (<GridView data={filters} />) : (<GridView data={stores} />)} */}
              <h2 style={{ marginLeft: '1rem' }} className="py-5">List of stores: </h2>
  <br />
  {filters.length > 0 ? (
    <GridView data={filters} />
  ) : (
    <>
      <p style={{ textAlign: 'center', color: 'red', fontSize:'20px' }}>There are no stores that match your filter, please select the store list below</p>
      <GridView data={stores} />
    </>
  )}

        </>

    );
}


export default StoreList;