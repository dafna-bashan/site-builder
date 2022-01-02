// import { Item } from "../store/item"
import { Wap } from "../types/wap";

export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    makeId
}


async function query(entityType: string, filterBy?: object): Promise<Wap[]> {
    console.log('load items from storage');
    var entities = JSON.parse(localStorage.getItem(entityType) || 'null') || []
    
    if(!entities || !entities.length){
        console.log('if');
        
        // entities = createItems()
        entities = require('../data/demo.json')
        _save(entityType, entities)
    }
    console.log(entities);
    
        return new Promise((resolve)=> resolve(entities))
    // return entities
}

async function get(entityType: string, entityId: string): Promise<Wap> {
    const entities = await query(entityType)
    const entity = entities.find(entity => entity._id === entityId)
    if (!entity) throw new Error(`Cannot get, Item ${entityId} of type: ${entityType} does not exist`)
    return entity;
}

async function post(entityType: string, newEntity: Wap): Promise<Wap> {
    newEntity = {...newEntity, _id: makeId()}
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function put(entityType: string, updatedEntity : Wap): Promise<Wap> {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities[idx] = updatedEntity
    _save(entityType, entities)
    return updatedEntity
}

async function remove(entityType: string, entityId: string) : Promise<boolean> {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    if (idx !== -1)  entities.splice(idx, 1)
    else throw new Error(`Cannot remove, item ${entityId} of type: ${entityType} does not exist`)
    _save(entityType, entities)
    return true;
}


function _save(entityType: string, entities : Wap[]) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

// function createItems(): Wap[] {
//     return [
//       {
//         name: 'Majesty Palm Ravenea',
//         desc: 'The majesty palm is a popular indoor palm tree that will be an excellent addition to any decor. It makes a first class interior house plant. Majesty palm adds a tropical feel with its beautiful arching fronds.',
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81RCoF9ni0L._AC_SL1500_.jpg',
//         price: 20
//       },
//       {
//         name: 'White Bird',
//         desc: 'Bird of paradise is a stunning tropical plant commonly grown as a houseplant throughout the country and a landscape plant in the frost-free tropics.',
//         imgUrl: 'https://www.plantthefuture.com/wp-content/uploads/2018/10/Bird-of-Paradise.png',
//         price: 54
//       },
//       {
//         name: 'Monstera',
//         desc: 'Monstera deliciosa sometimes also called Swiss cheese plant or split-leaf philodendron, this plant features large, heart-shaped leaves with stunning cuts. It can climb 10 ft. or more over time as it matures.',
//         imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/61wC74yvwBL._SL1500_.jpg',
//         price: 49
//       },
//       {
//         name: 'Sansevieria Zeylanica',
//         desc: 'Sanseveria is the ideal plant for those who have little time. These plants making striking displays in home, office or patio. It produces elegant variegated foliage.',
//         imgUrl: 'https://cdn.shopify.com/s/files/1/1706/1307/products/Sansevieria-zeylanica-Snake-Plant-21x80cm.jpg?v=1619105321',
//         price: 24
//       },
//       {
//         name: 'Golden Pothos',
//         desc: 'The Delray Plants Golden Pothos is a foliage plant with interesting colors. Its long been a staple in interiors cape. The Golden Pothos is a classic broad leaf plant. Delray Plants updated this classic with an upgraded pot fit for a new generation.',
//         imgUrl: 'https://www.ikea.com/in/en/images/products/epipremnum-potted-plant-golden-pothos__0492128_pe625482_s5.jpg',
//         price: 16
//       },
//       {
//         name: 'Rattlesnake Calathea',
//         desc: 'The Rattlesnake Plant is a perfect houseplant for pattern lovers who like to decorate a bit on the wild side. Its bright green, wavy leaves are striped with alternating ovals of dark green and accented by a rich purple underside.',
//         imgUrl: 'https://media.diy.com/is/image/Kingfisher/rattlesnake-calathea-in-14cm-pot~3663602462569_02c_bq?$MOB_PREV$&$width=618&$height=618',
//         price: 41
//       },
//       {
//         name: 'Benjamina Ficus',
//         desc: 'Carefree growth meets a unique braided trunk and weeping foliage, making the Benjamina Ficus Tree a must-have houseplant. and since it requires virtually no maintenance, it\'s perfect for any gardener.',
//         imgUrl: 'https://www.ikea.com/cz/en/images/products/ficus-benjamina-natasja-potted-plant-weeping-fig__0653996_pe708225_s5.jpg?f=s',
//         price: 55
//       },
//       {
//         name: 'Croton Petra',
//         desc: 'Grown by United Nursery, the Croton Petra is native to South Asia and the Western Pacific Islands. This woody-based perennial can grow to 5 ft. tall - 6 ft. tall but will make an excellent container plant to any sun drenched patio.',
//         imgUrl: 'https://www.growjoy.com/store/pc/catalog/croton_petra_plant_741_detail.jpg',
//         price: 24
//       },
//       {
//         name: 'Schefflera Amate',
//         desc: 'Grown by United Nursery, the Schefflera Amate has beautiful large glossy green leaves which grow in clusters and create a large umbrella like canopy.',
//         imgUrl: 'https://static.wixstatic.com/media/7cda53_7fddd5cc74b342a2bc19b9e555fef870~mv2.jpg/v1/fill/w_3000,h_3000,al_c,q_85/7cda53_7fddd5cc74b342a2bc19b9e555fef870~mv2.jpg',
//         price: 21
//       },
//       {
//         name: 'Boston Fern',
//         desc: 'If you have ever seen a plant hanging from the ceiling of a porch or house, it is most likely the Boston Fern. This extremely popular House Plant features unique foliage that is sure to please the eye of anyone in your home.',
//         imgUrl: 'https://media.diy.com/is/image/Kingfisher/boston-fern~3663602039129_02c?$MOB_PREV$&$width=618&$height=618',
//         price: 45
//       }
//     ].map(item => ({ id: makeId(), ...item }))
//   }

//   function getEmptyItem(): Item {
//     return {
//       id: '',
//       name: '',
//       desc: '',
//       imgUrl: 'https://i.pinimg.com/originals/27/78/de/2778de9b07bde42be532f9020be65467.png',
//       price: 0
//     }
//   }

