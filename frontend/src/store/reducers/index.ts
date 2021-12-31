import { combineReducers } from "redux";
import {itemReducer} from "./itemReducer"


export const rootReducer = combineReducers({
    itemModule: itemReducer
})


export type RootState = ReturnType<typeof rootReducer>