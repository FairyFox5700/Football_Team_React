import {API_URL} from "../config";
import axios from "axios";

export default {

    seasones(url = API_URL + 'seasons/') {
        return {
            fetchAllByClubId:clubId => axios.get(url+ "club/"+clubId),
            fetchById: seasonId => axios.get(url +seasonId),
        }
    }
}