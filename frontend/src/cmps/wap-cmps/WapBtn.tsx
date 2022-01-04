import React from 'react'
import { Link } from 'react-router-dom'
import { BtnCmp } from '../../types/btnCmp'

interface Props {
    cmp: BtnCmp
}

export const WapBtn: React.FC<Props> = ({ cmp }) => {

    const styles = cmp.info.style as React.CSSProperties
    // const link = cmp.info.action?.link as LocationDescriptor<unknown>

    if (cmp.info.action) return <Link to={{ pathname: cmp.info.action.link }}><button style={styles}>{cmp.info.txt}</button></Link>

    return <button style={styles}>{cmp.info.txt}</button>

}
