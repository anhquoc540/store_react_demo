import React from "react";
import { NavLink } from "react-router-dom";

const Store = (curElem) => {
    const { id, name, address, phone, image, district } = curElem;
    //onst { price, from, to, unit } = details;

    return (
 <NavLink to={`/single-store/${id}`}>
        <div className="card">
            <figure>
                <img src={image} alt={name} />

            </figure>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>Cửa hàng {name}</h3>
                    <div className="card-data"> 
                    <label className="h3 card-data-inline">Địa chỉ :</label>  {address}, {district} 
                    <br/>
                    <p className="h3" style={{color:'blue'}}>SĐT : {phone} </p>  
                    </div>
                    

                </div>
            </div>
        </div>
    </NavLink>
    );
};
export default Store;