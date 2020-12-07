﻿﻿﻿﻿﻿import axios from "axios";

const baseUrl = process.env.API_URL

export default {

    sponsores(url = baseUrl + 'seasons/') {
        return {
            fetchAllByClubId:clubId => axios.get(url+"club/"+clubId),
            fetchById: sponsorId => axios.get(url +sponsorId),
        }
    }
}