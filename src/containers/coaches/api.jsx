import {API_URL} from "../config";
import axios from "axios";

export default {

    coaches(url = API_URL + 'coaches/') {
        return {
            fetchById: coachId => axios.get(url + coachId),
        }
    }
}