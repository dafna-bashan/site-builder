import { Item } from '../store/item';
import { storageService } from './asyncStorageService'

export const itemService = {
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
async function add(item: Item) {
  const addedItem = storageService.post('item', item)
  return addedItem
}

async function update(item: Item) {
  return storageService.put('item', item);
}
