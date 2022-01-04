import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { loadWaps } from '../store/actions/wapActionsCreators';
import { RootState } from '../store/reducers';


export const WapApp: React.FC = () => {
    // const [item, setItem] = useState([])
    const dispatch = useDispatch()
    const waps = useSelector((state: RootState) => state.wapModule.waps)

    useEffect(() => {
        dispatch(loadWaps({}))
    }, [])
    return (
        <div>
            wap app <br />
            <Link to={`/editor/5e28393890dd7201a06d4e44`}>edit</Link>
            {/* <div>{JSON.stringify(waps)}</div> */}
        </div>
    )
}
