import axios from "axios";
import {API_URL} from "../config";

export default {
    clubs(url = API_URL + 'footballClub/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            fetchByPlayerId: playerId => axios.get(url + "player/"+playerId),
        }
    }
}