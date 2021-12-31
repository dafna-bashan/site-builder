import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from '../store/item'

interface Props{
    product: Item
}

export const Preview: React.FC<Props> = ({product}) => {
    return (
        <>
        <Link to={`/app/edit/${product.id}`}>
        <div className="preview">
            <img src={product.imgUrl} alt="" />
          <p>{product.name} </p> 
        </div>
        </Link>
        </>
    )
}
