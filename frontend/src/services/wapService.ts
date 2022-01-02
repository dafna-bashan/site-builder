// import { Item } from '../store/item';
import { Wap } from '../types/wap';
import { storageService } from './asyncStorageService'

export const wapService = {
  add,
  query,
  remove,
  getById,
  update
}

function query(filterBy: object) {
  return storageService.query('item', filterBy);
}

async function getById(itemId: string) {
  return storageService.get('item', itemId)
}

function remove(itemId: string) {
  return storageService.remove('item', itemId)

}
async function add(item: Wap) {
  const addedItem = storageService.post('item', item)
  return addedItem
}

async function update(item: Wap) {
  return storageService.put('item', item);
}
