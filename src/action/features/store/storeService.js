
import axios from 'axios';
import {base_url} from '../../../axios/baseUrl';
import { config } from '../../../axios/auth-header';
const getAllStore= async () => {

    const response = await
        axios.get(`${base_url}base/store/all`,
        config)
     
        return response.data;
}

const getStore= async (id) => {

    const response = await
        axios.get(`${base_url}base/store/get/${id}`,
        config)
     
        return response.data;
}


const storeService = {
    getStore,
    getAllStore,
   
}

export default storeService;