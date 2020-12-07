﻿﻿﻿﻿import axios from "axios";

const baseUrl = process.env.API_URL

export default {

    seasones(url = baseUrl + 'seasons/') {
        return {
            fetchAllByClubId:clubId => axios.get(url+ "club/"+clubId),
            fetchById: seasonId => axios.get(url +seasonId),
        }
    }
}