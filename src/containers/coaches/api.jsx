import {API_URL} from "../config";

﻿﻿import axios from "axios";

const baseUrl = API_URL

export default {

    coaches(url = baseUrl + 'coaches/') {
        return {
            fetchById: coachId => axios.get(url + coachId),
        }
    }
}