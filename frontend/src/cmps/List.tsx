import React from 'react'
// import { Product } from '../product'
import { Item } from '../store/item'
import { Preview } from './Preview'

interface Props{
    products: Item[]
}

export const List: React.FC<Props> = ({products}) => {
    return (
        <div className="list flex">
            {products.map(product => <Preview key={product.id} product={product}/>)}
        </div>
    )
}
