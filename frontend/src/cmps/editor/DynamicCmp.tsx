import React from 'react'
import { Cmp } from '../../types/cmp'

interface Props {
    cmp: Cmp
}

export const DynamicCmp: React.FC<Props> = ({ cmp }) => {
    return (
        <div className='dynamic-cmp'>
            im a cmp
            {JSON.stringify(cmp)}
        </div>
    )
}
