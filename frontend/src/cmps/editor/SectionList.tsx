import React from 'react'
// import { Cmp } from '../../types/cmp'
import { Section } from '../../types/section'
import { Wap } from '../../types/wap'
import { DynamicCmp } from './DynamicCmp'

interface Props {
    props: Wap | Section | null
}

export const SectionList: React.FC<Props> = ({ props }) => {
    return (
        <div className='section-list'>
            {props?.cmps.map(cmp => <DynamicCmp key={cmp.id} cmp={cmp} />)}
        </div>
    )
}

