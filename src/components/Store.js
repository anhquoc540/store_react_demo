import React from "react";
import { NavLink } from "react-router-dom";

const Store = (curElem) => {
    const { id, name, address, phone, image, district } = curElem;

    return (
 <NavLink to={`/single-store/${id}`}>
        <div className="card">
        <figure>
    <img src="https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675" alt="Ảnh du lịch Anh Quốc" style={{height:'auto',width:'auto'}}/>
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