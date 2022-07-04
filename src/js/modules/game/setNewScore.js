import getUser from "../command/getUser";
import setData from "./setData";

const setNewScore = (score) => {
    const user = getUser();
    if (user.point < score) {
        user.point = score
    }
    setData(user);
}

export default setNewScore;