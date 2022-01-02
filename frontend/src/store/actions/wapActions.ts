import { ActionType } from './actionTypes'
// import {Item} from '../item'
import { Wap } from '../../types/wap'

interface LoadWaps {
  type: ActionType.LOAD_WAPS,
  waps: Wap[]
}

interface LoadWap {
  type: ActionType.LOAD_WAP,
  wap : Wap
}

interface RemoveWap {
  type: ActionType.REMOVE_WAP,
  wapId : String
}

interface AddWap {
  type: ActionType.ADD_WAP,
  wap : Wap
}

interface UpdateWap {
  type: ActionType.UPDATE_WAP,
  wap : Wap
}

export type WapAction = LoadWaps | LoadWap | RemoveWap | AddWap | UpdateWap


