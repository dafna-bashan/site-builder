import React from 'react'
import { Section } from '../../types/section'
import { DynamicCmp } from '../editor/DynamicCmp'

interface Props {
    section: Section
}

export const WapSection: React.FC<Props> = ({ section }) => {

    const styles = section.info.style as React.CSSProperties

    return (
        <div className='wap-section' style={styles}>
            im a section
            {/* {JSON.stringify(section)} */}
            {section.cmps?.length && section.cmps.map(cmp => <DynamicCmp cmp={cmp} />)}
        </div>
    )
}