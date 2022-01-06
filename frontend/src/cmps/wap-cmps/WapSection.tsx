import React from 'react'
import { Section } from '../../types/section'
import { DynamicCmp } from '../editor/DynamicCmp'

interface Props {
    section: Section
}

export const WapSection: React.FC<Props> = ({ section }) => {
    console.log('section');

    const styles = section.info.style as React.CSSProperties

    return (
        <div className='wap-section' style={styles}>
            {/* {JSON.stringify(section)} */}
            {section.cmps?.length && section.cmps.map(cmp => <DynamicCmp key={cmp.id} cmp={cmp} />)}
        </div>
    )
}
