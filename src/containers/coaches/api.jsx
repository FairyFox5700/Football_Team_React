﻿﻿import axios from "axios";

const baseUrl = process.env.API_URL

export default {

    coaches(url = baseUrl + 'coaches/') {
        return {
            fetchById: coachId => axios.get(url + coachId),
        }
    }
}