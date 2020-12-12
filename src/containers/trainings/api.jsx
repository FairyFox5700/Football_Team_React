import {API_URL} from "../config";
import axios from "axios";

export default {

    trainings(url = API_URL + 'trainings/') {
        return {
            fetchAllByCoachId:coachId => axios.get(url+"coach/"+coachId),
            fetchById: trainingId => axios.get(url +trainingId),
        }
    }
}