import { Dispatch } from 'redux'
import { itemService } from '../../services/itemService'
import { Item } from '../item'
import { ActionType } from './actionTypes'
import { ItemAction } from './itemActions'

export function loadItems(filterBy: object) {
  console.log('load items in actions');
  
    return async (dispatch: Dispatch<ItemAction>) => {
      try {
        const items = await itemService.query(filterBy)
        dispatch({ type: ActionType.LOADED_ITEMS, items })
      } catch (err) {
        console.log('itemActions: err in loadItems', err)
      }
    }
  }
  
  export function loadItem(itemId : string) {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            const item = await itemService.getById(itemId);
            dispatch({ type: ActionType.LOADED_ITEM, item });
            return item;
        } catch (err) {
            console.log('itemActions: err in loadItem', err);
        }
    };
  }
  
  export function addItem(item : Item) {
    return async (dispatch: Dispatch<ItemAction>) => {
      try {
        const addedItem = await itemService.add(item)
        dispatch({ type: ActionType.ADDED_ITEM, item: addedItem })
        
      } catch (err) {
        console.log('itemActions: err in addItem', err)
      }
    }
  }
  
  export function removeItem(itemId : string) {
    return async (dispatch: Dispatch<ItemAction>) => {
      try {
        await itemService.remove(itemId)
        dispatch({ type: ActionType.REMOVED_ITEM, itemId })
      } catch (err) {
        console.log('itemActions: err in removeItem', err)
      }
    }
  }
  
  export function updateItem(item : Item) {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            const updatedItem = await itemService.update(item);
            // await socketService.emit('board updated', updatedBoard._id);
            dispatch({ type: ActionType.UPDATED_ITEM, item: updatedItem });
        } catch (err) {
            console.log('BoardActions: err in updateBoard', err);
        }
    };
  }