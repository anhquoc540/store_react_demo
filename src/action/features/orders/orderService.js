import axios from 'axios';
import {base_url} from '../../../axios/baseUrl';
import { config } from '../../../axios/auth-header';



const createOrder= async (order) => {

    const response = await
        axios.post(`${base_url}base/order/create`,order,
        config)
     
        return response.data;
}
const orderService = {
   createOrder
    // createBlogCategory,
    // deleteBlogCategory,
    // getBlogCategory,
    // deleteBlogCategory,
    // updateBlogCategory,
  };
  
  export default orderService;