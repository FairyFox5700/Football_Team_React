import {API_URL} from "../config";

﻿﻿﻿import axios from "axios";

const baseUrl = API_URL

export default {

    roles(url = baseUrl + 'roles/') {
        return {
            fetchAllByName:(roleName) => axios.get(url+roleName),
            fetchAll:()=>axios.get(url)
        }
    }
}