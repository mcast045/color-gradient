import React from 'react'
import './Colors.scss'
import { useRGBContext, useMenuContext } from '../../Context'
import Menu from '../Menu/Menu'
import ColorDescription from './ColorDescription'

export interface ColorsProps {

}

const Colors: React.FC<ColorsProps> = () => {

    const { background } = useRGBContext()
    const { isShowingMenu } = useMenuContext()

    return (
        <div className='color_container' style={{ background }}>
            <ColorDescription />
            {isShowingMenu && <Menu />}
        </div >
    );
}

export default Colors;