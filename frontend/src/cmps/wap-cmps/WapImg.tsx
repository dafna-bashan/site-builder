import React from 'react'
import { ImgCmp } from '../../types/imgCmp'

interface Props {
    cmp: ImgCmp
}

export const WapImg: React.FC<Props> = ({ cmp }) => {

    const styles = cmp.info.style as React.CSSProperties

    return (
        <div className='wap-img' style={styles}>
            <img src={cmp.info.src} alt="" />
        </div>
    )
}
