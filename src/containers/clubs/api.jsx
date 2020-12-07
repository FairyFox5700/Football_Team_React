import axios from "axios";
import {API_URL} from "../config";


const baseUrl = API_URL

export default {
    clubs(url = baseUrl + 'footballClub/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            fetchByPlayerId: playerId => axios.get(url + "player/"+playerId),
        }
    }
}