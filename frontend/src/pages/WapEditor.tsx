import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SectionList } from '../cmps/editor/SectionList';
import { loadWap, loadWaps } from '../store/actions/wapActionsCreators';
import { RootState } from '../store/reducers';
import { RouteComponentProps } from 'react-router';
import { RouteParams } from '../types/routeParams';
import { Wap } from '../types/wap';


export const WapEditor: React.FC<RouteComponentProps<RouteParams>> = (props) => {

    const dispatch = useDispatch()
    const wap = useSelector((state: RootState) => state.wapModule.currWap)

    const [wapToSave, setWapToSave] = useState<Wap | null>(null)

    useEffect(() => {
        const { id } = props.match.params
        console.log(props);

        if (id?.length) {
            console.log(id);
            dispatch(loadWap(id))
            console.log(wap);
        }
        setWapToSave(wap)
    }, [])

    useEffect(() => {
        setWapToSave(wap)
        console.log(wap);

    }, [wap])

    return (
        <div className='wap-editor'>
            {/* <div>{JSON.stringify(waps)}</div> */}
            {!wap && <div>create your own web app</div>}
            {wap && <SectionList props={wap} />}
        </div>

    )
}