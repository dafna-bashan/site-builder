import { Wap } from "../../types/wap";
import { ActionType } from "../actions/actionTypes"
import { WapAction } from "../actions/wapActions"
// import { Item } from "../item";


export interface WapState {
  waps: Wap[];
  currWap: Wap | null;
  isLoading: boolean;
  error: string;
}

// export interface ItemState {
//   items: Item[];
//   item: Item;
//   isLoading: boolean;
//   error: string;
// }

const initialState: WapState = {
  waps: [],
  currWap: null,
  isLoading: false,
  error: ''
};

// const initialState: ItemState = {
//   items: [],
//   item: {id: '', name: '', price: 0, desc: '' },
//   isLoading: false,
//   error: ''
// };

export function itemReducer(state: WapState = initialState, action: WapAction): WapState {
  switch (action.type) {
    // case SET_LOADING: {
    //   const { isLoading } = action;
    //   console.log(`Reducer: Setting isLoading to ${isLoading}`);
    //   return { ...state, isLoading, error: '' };
    // } case SET_ERROR: {
    //   const { error } = action;
    //   console.log(`Reducer: Setting item error`, error);
    //   return { ...state, error, isLoading: false };
    // } 
    case ActionType.LOAD_WAPS: {
      const { waps } = action;
      console.log(`Reducer: Setting loaded waps (${waps.length}) waps`);
      return { ...state, waps, isLoading: false, error: '' };
    } case ActionType.LOAD_WAP: {
      const { wap } = action;
      console.log(`Reducer: Setting loaded item ${wap._id}`);
      return { ...state, currWap: wap, error: '' };
    } case ActionType.REMOVE_WAP: {
      const { wapId } = action;
      console.log('Reducer: Removing item:', wapId);
      const waps = state.waps.filter(wap => wap._id !== wapId)
      return { ...state, waps, error: '' };
    } case ActionType.ADD_WAP: {
      const { wap } = action;
      console.log('Reducer: Adding item:', wap);
      const waps = [...state.waps, wap]
      return { ...state, waps, error: '' };
    } case ActionType.UPDATE_WAP: {
      const { wap } = action;
      console.log('Reducer: Updating item:', wap);
      const waps = state.waps.map(currWap => (currWap._id === wap._id) ? wap : currWap)
      return { ...state, waps, currWap: wap };
    } default:
      return state;
  }
}
