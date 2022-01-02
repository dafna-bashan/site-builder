import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadWaps } from '../store/actions/wapActionsCreators';
import { RootState } from '../store/reducers';


export const WapApp: React.FC = () => {
    // const [item, setItem] = useState([])
    const dispatch = useDispatch()
    const waps = useSelector((state: RootState) => state.itemModule.waps)

    useEffect(() => {
        dispatch(loadWaps({}))
    }, [])
    return (
        <div>
            <div>{JSON.stringify(waps)}</div>
        </div>
    )
}
