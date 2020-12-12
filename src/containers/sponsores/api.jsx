import {API_URL} from "../config";
import axios from "axios";

export default {

    sponsores(url = API_URL + 'seasons/') {
        return {
            fetchAllByClubId:clubId => axios.get(url+"club/"+clubId),
            fetchById: sponsorId => axios.get(url +sponsorId),
        }
    }
}