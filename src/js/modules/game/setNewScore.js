import getMode from "../command/getMode";
import getUser from "../command/getUser";
import setData from "./setData";

const setNewScore = (score) => {
    const user = getUser();
    const mode = getMode();

    if (user[mode] < score) {
        user[mode] = score
    }
    setData(user);
}

export default setNewScore;