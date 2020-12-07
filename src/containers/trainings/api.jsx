import {API_URL} from "../config";

﻿﻿﻿﻿﻿﻿﻿import axios from "axios";

const baseUrl = API_URL

export default {

    trainings(url = baseUrl + 'trainings/') {
        return {
            fetchAllByCoachId:coachId => axios.get(url+"coach/"+coachId),
            fetchById: trainingId => axios.get(url +trainingId),
        }
    }
}