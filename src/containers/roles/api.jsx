import {API_URL} from "../config";
import axios from "axios";

export default {

    roles(url = API_URL + 'roles/') {
        return {
            fetchAllByName:(roleName) => axios.get(url+roleName),
            fetchAll:()=>axios.get(url)
        }
    }
}