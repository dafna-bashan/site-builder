import React from 'react'
import { Link } from 'react-router-dom'
import { BtnCmp } from '../../types/btnCmp'

interface Props {
    cmp: BtnCmp
}

export const WapBtn: React.FC<Props> = ({ cmp }) => {
    console.log('btn');

    const styles = cmp.info.style as React.CSSProperties

    if (cmp.info.action?.link?.length) return <Link to={{ pathname: cmp.info.action.link }}><button style={styles}>{cmp.info.txt}</button></Link>

    // return <button contentEditable={true} style={styles}>{cmp.info.txt}</button>
    return <button style={styles}>{cmp.info.txt}</button>


}
