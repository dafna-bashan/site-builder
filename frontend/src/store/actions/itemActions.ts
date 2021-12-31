import { ActionType } from './actionTypes'
import {Item} from '../item'

interface LoadItems {
  type: ActionType.LOADED_ITEMS,
  items: Item[]
}

interface LoadItem {
  type: ActionType.LOADED_ITEM,
  item : Item
}

interface RemoveItem {
  type: ActionType.REMOVED_ITEM,
  itemId : String
}

interface AddItem {
  type: ActionType.ADDED_ITEM,
  item : Item
}

interface UpdateItem {
  type: ActionType.UPDATED_ITEM,
  item : Item
}

export type ItemAction = LoadItems | LoadItem | RemoveItem | AddItem | UpdateItem


