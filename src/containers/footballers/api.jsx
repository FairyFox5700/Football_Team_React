import {API_URL} from "../config";
import axios from "axios";
export default {

    footballers(url = API_URL + 'footballers/') {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        return {
            fetchAll: () => axios.get(url,axiosConfig),
            fetchById: footballerId => axios.get(url + footballerId,axiosConfig),
            fetchByRoleName: roleName => axios.get(url + "name/" + roleName,axiosConfig),
            fetchAllWithRoles: () => axios.get(url + "roles",axiosConfig),
            fetchAllFilterBy: (name, surName, nationality) => axios.get(url + "filter/?name=" + name + "&surname=" + surName + "&nationality=" + nationality),
            fetchAllOrderAndSearchBy: (search, orderBy) => axios.get(url + "order/search/?search=" + search + "&ascending=" + orderBy),
            addFootballer: (postData) => axios.post(url, postData, axiosConfig),
            updateFootballer: (playerId,putData) => axios.put(url+playerId,  putData, axiosConfig),
            deleteFootballer: (playerId) => axios.delete(url + playerId),
        }
    }
}