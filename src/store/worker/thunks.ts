import {getAll} from "../../services/worker";
import {getAllWorkersAction} from "./actions";

export const getAllWorkers = () => async (dispatch: any) => {
    const response = await getAll();

    console.log(response);

    dispatch(getAllWorkersAction(response.data))
};
