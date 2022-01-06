import React from 'react'
import { Cmp } from '../../types/cmp'
import { WapBtn } from '../wap-cmps/WapBtn'
import { WapImg } from '../wap-cmps/WapImg'
import { WapSection } from '../wap-cmps/WapSection'
import { WapTxt } from '../wap-cmps/WapTxt'

interface Props {
    cmp: Cmp
}

export const DynamicCmp: React.FC<Props> = ({ cmp }) => {

    const getCmp = () => {
        console.log('get cmp');
        
        switch (cmp.type) {
            case 'section': return <WapSection section={cmp} />
            case 'txtCmp': return <WapTxt cmp={cmp} />
            case 'imgCmp': return <WapImg cmp={cmp} />
            case 'btnCmp': return <WapBtn cmp={cmp} />
            default: return 'no such cmp'
        }
    }
    
    // console.log('dynamic cmp');
    return (
        <>{getCmp()}</>
    )
}
