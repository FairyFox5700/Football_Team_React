﻿import {API_URL} from "../config";

﻿﻿﻿import axios from "axios";

const baseUrl = API_URL

export default {
    footballResults(url = baseUrl + 'footballersResults/') {
        return {
            fetchAllWithPlayers: () => axios.get( url+"player"),
            fetchAllByMatchId: matchId => axios.get(url +"match/"+ matchId),
            fetchTotalResultsByMatchId: matchId => axios.get(url +"total/match/"+ matchId),
            fetchTotalResultsByPlayerId: playerId=> axios.get(url +"total/player/"+ playerId),
        }
    }
}