import React, { useContext } from 'react'
import './Colors.scss'
import { RGBContext } from '../../Context/RGBContext'
import { MenuContext } from '../../Context/MenuContext'
import Menu from '../Menu/Menu'
import ColorDescription from './ColorDescription'

export interface ColorsProps {

}

const Colors: React.FC<ColorsProps> = () => {

    const { background } = useContext(RGBContext)
    const { isShowingMenu } = useContext(MenuContext)

    return (
        <div className='color_container' style={{ background }}>
            <ColorDescription />
            {isShowingMenu && <Menu />}
        </div >
    );
}

export default Colors;