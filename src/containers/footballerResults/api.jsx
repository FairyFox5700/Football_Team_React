﻿import {API_URL} from "../config";
import axios from "axios";

export default {
    footballResults(url = API_URL + 'footballersResults/') {
        return {
            fetchAllWithPlayers: () => axios.get( url+"player?playerId=1"),
            fetchAllByMatchId: matchId => axios.get(url +"match/"+ matchId),
            fetchTotalResultsByMatchId: matchId => axios.get(url +"total/match/"+ matchId),
            fetchTotalResultsByPlayerId: playerId=> axios.get(url +"total/player/"+ playerId),
        }
    }
}