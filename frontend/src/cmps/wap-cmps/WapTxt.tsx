import React from 'react'
import { TextCmp } from '../../types/textCmp'

interface Props {
    cmp: TextCmp
}

export const WapTxt: React.FC<Props> = ({ cmp }) => {
    console.log('txt');

    const styles = cmp.info.style as React.CSSProperties

    return (
        // <div className='wap-txt' contentEditable={true} style={styles}>
        //     {cmp.info.txt}
        // </div>
        <div className='wap-txt' style={styles}>
            {cmp.info.txt}
        </div>
    )
}
