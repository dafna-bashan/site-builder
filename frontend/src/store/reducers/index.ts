import { combineReducers } from "redux";
import {wapReducer} from "./wapReducer"


export const rootReducer = combineReducers({
    wapModule: wapReducer
})


export type RootState = ReturnType<typeof rootReducer>