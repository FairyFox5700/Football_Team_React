import {API_URL} from "../config";
import axios from "axios";

export default {

    matches(url = API_URL + 'matches/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: matchId => axios.get(url + matchId),
            fetchNextMatches: matchId => axios.get(url + "next"),
        }
    }
}