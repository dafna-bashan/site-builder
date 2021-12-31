import React, { useState } from 'react'
import { useEffect } from 'react'
import { Item } from '../store/item'
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { addItem, loadItem, removeItem, updateItem } from '../store/actions/itemActionsCreators';
import { RouteParams } from '../types/routeParams';

export const Edit: React.FC<RouteComponentProps<RouteParams>> = (props) => {

    const dispatch = useDispatch()
    const item = useSelector((state: RootState) => state.itemModule.item)

    const [itemToSave, setItemToSave] = useState<Item>({ id: '', name: '', price: 0, desc: '' })

    useEffect(() => {
        const { id } = props.match.params
        console.log(props);

        if (id?.length) {
            console.log(id);
            dispatch(loadItem(id))
            console.log(item);
        }
        // setItemToSave(item)
    }, [])

    useEffect(() => {
        setItemToSave(item)
    }, [item])

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(ev);
        const { name, value } = ev.target
        setItemToSave({ ...itemToSave, [name]: value })
    }

    const onSaveItem = (ev: React.FormEvent) => {
        ev.preventDefault()
        const { id } = props.match.params
        if (id) {
            dispatch(updateItem(itemToSave))
        } else {
            dispatch(addItem(itemToSave))
        }
        setItemToSave({ id: '', name: '', price: 0, desc: '' })
        window.location.hash = '/app'
    }

    const onRemoveItem = (id: string) => {
        dispatch(removeItem(id))
        window.location.hash = '/app'
    }

    return (
        <div className="edit ">
            <form className="flex column" onSubmit={onSaveItem}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={itemToSave.name} onChange={handleChange} />
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" value={itemToSave.price} onChange={handleChange} />
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" cols={30} rows={10} value={itemToSave.desc} onChange={handleChange}></textarea>
                <button>Save</button>
            </form>
            {itemToSave.id.length > 0 && <button onClick={() => onRemoveItem(itemToSave.id)}>Delete</button>}

        </div>
    )
}
