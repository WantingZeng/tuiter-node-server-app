import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service";
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
);
export const createTuitThunk = createAsyncThunk()

export const deleteTuitThunk = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return tuit;
}
export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
)