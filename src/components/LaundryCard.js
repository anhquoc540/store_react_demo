import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const LaundryCard = (curElem) => {
    const { id, name, details, imageBanner, isStandard } = curElem;
    const data = {

    }

    function generateCurrency(params) {
        return params.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
      }

    

   

    return (
        //<NavLink to={`/single-service/${id}`}>
        <div className="card">
            <figure>
                <img src={imageBanner} alt={name} />

            </figure>

            <div className="card-data">
            <h3>Dịch vụ {name}</h3>
                <div className="card-data-flex float-end">
                   
                    <div className="card-data">
                        {!isStandard ? (<>
                            
                             
                                <div className="display-6">{generateCurrency(details[0].price)} /  {details[0].unit}</div>
                       
                        </>) : (<><Button>

                            Xem chi tiết giá dịch vụ
                        </Button></>)}



                    </div>


                </div>
            </div>
        </div>
        //</NavLink>
    );
};
export default LaundryCard;