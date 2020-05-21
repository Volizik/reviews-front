import { getAll } from '../../services/worker';
import { getAllWorkersAction } from './actions';

export const getAllWorkersThunk = (name?: string) => async (dispatch: any) => {
    const response = await getAll(name);

    console.log(response);

    dispatch(getAllWorkersAction(response.data));
};
