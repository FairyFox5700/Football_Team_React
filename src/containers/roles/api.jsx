﻿﻿﻿import axios from "axios";

const baseUrl = process.env.API_URL

export default {

    roles(url = baseUrl + 'roles/') {
        return {
            fetchAllByName:(roleName) => axios.get(url+roleName),
            fetchAll:()=>axios.get(url)
        }
    }
}