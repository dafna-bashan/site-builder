import { Dispatch } from 'redux'
import { wapService } from '../../services/wapService'
import { Wap } from '../../types/wap'
// import { Item } from '../item'
import { ActionType } from './actionTypes'
import { WapAction } from './wapActions'

export function loadWaps(filterBy: object) {
  console.log('load waps in actions');
  
    return async (dispatch: Dispatch<WapAction>) => {
      try {
        const waps = await wapService.query(filterBy)
        dispatch({ type: ActionType.LOAD_WAPS, waps })
      } catch (err) {
        console.log('wapActions: err in loadWaps', err)
      }
    }
  }
  
  export function loadWap(wapId : string) {
    return async (dispatch: Dispatch<WapAction>) => {
        try {
            const wap = await wapService.getById(wapId);
            dispatch({ type: ActionType.LOAD_WAP, wap });
            return wap;
        } catch (err) {
            console.log('wapActions: err in loadWap', err);
        }
    };
  }
  
  export function addWap(wap : Wap) {
    return async (dispatch: Dispatch<WapAction>) => {
      try {
        const addedWap = await wapService.add(wap)
        dispatch({ type: ActionType.ADD_WAP, wap: addedWap })
      } catch (err) {
        console.log('wapActions: err in addWap', err)
      }
    }
  }
  
  export function removeWap(wapId : string) {
    return async (dispatch: Dispatch<WapAction>) => {
      try {
        await wapService.remove(wapId)
        dispatch({ type: ActionType.REMOVE_WAP, wapId })
      } catch (err) {
        console.log('wapActions: err in removeWap', err)
      }
    }
  }
  
  export function updateItem(wap : Wap) {
    return async (dispatch: Dispatch<WapAction>) => {
        try {
            const updatedWap = await wapService.update(wap);
            // await socketService.emit('board updated', updatedBoard._id);
            dispatch({ type: ActionType.UPDATE_WAP, wap: updatedWap });
        } catch (err) {
            console.log('wapActions: err in updateWap', err);
        }
    };
  }