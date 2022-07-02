import getUser from "../getUser";
import setData from "../setData";

const setNewScore = (score) => {
    let user = getUser();
    if (user.point < score) {
        user.point = score
    }
    setData(user);
}

export default setNewScore;