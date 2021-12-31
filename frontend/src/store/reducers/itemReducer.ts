import { ActionType } from "../actions/actionTypes"
import { ItemAction } from "../actions/itemActions"
import { Item } from "../item";


export interface ItemState {
  items: Item[];
  item: Item;
  isLoading: boolean;
  error: string;
}


const initialState: ItemState = {
  items: [],
  item: {id: '', name: '', price: 0, desc: '' },
  isLoading: false,
  error: ''
};

export function itemReducer(state: ItemState = initialState, action: ItemAction): ItemState {
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
    case ActionType.LOADED_ITEMS: {
      const { items } = action;
      console.log(`Reducer: Setting loaded items (${items.length}) items`);
      return { ...state, items, isLoading: false, error: '' };
    } case ActionType.LOADED_ITEM: {
      const { item } = action;
      console.log(`Reducer: Setting loaded item ${item.id}`);
      return { ...state, item, error: '' };
    } case ActionType.REMOVED_ITEM: {
      const { itemId } = action;
      console.log('Reducer: Removing item:', itemId);
      const items = state.items.filter(item => item.id !== itemId)
      return { ...state, items, error: '' };
    } case ActionType.ADDED_ITEM: {
      const { item } = action;
      console.log('Reducer: Adding item:', item);
      const items = [...state.items, item]
      return { ...state, items, error: '' };
    } case ActionType.UPDATED_ITEM: {
      const { item } = action;
      console.log('Reducer: Updating item:', item);
      const items = state.items.map(currItem => (currItem.id === item.id) ? item : currItem)
      return { ...state, items, item: {id:'', name: '', price: 0, desc: '' } };
    } default:
      return state;
  }
}
