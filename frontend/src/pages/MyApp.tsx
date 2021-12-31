import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { RootState } from '../store/reducers';
import { loadItems } from '../store/actions/itemActionsCreators';
import { List } from '../cmps/List';
import { Link, Route } from 'react-router-dom';
import { Edit } from './Edit';
import { RouteComponentProps } from 'react-router';
import { RouteParams } from '../types/routeParams';

export const MyApp: React.FC = () => {

    // const [item, setItem] = useState([])
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.itemModule.items)

    useEffect(() => {
        dispatch(loadItems({}))
    }, [])

    return (
        <div>
            <h1>welcome to my app</h1>
            {/* <div>{JSON.stringify(items)}</div> */}
            <Link to='/app/add'><button>Add</button></Link>
            <List products={items} />

            <Route path="/app/edit/:id" render={(props: RouteComponentProps<RouteParams>) => {
                return <Edit {...props} />
            }} />
            <Route path="/app/add" render={(props: RouteComponentProps<RouteParams>) => {
                return <Edit {...props} />
            }} />
            
        </div>
    );
}
