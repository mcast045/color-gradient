import React, { useContext } from 'react'
import { RGBContext } from '../../Context/RGBContext';
import { MenuContext } from '../../Context/MenuContext';

export interface MenuControllerProps {

}

const MenuController: React.FC<MenuControllerProps> = () => {

    const { background } = useContext(RGBContext)
    const { isShowingMenu, setIsShowingMenu, setSlideMenu } = useContext(MenuContext)

    const openMenu = () => {
        setIsShowingMenu(true)
        setSlideMenu('slideIn')
    }

    const closeMenu = () => {
        setSlideMenu('slideOut')
        setTimeout(() => setIsShowingMenu(false), 475)
    }

    return (
        <div>
            {isShowingMenu ?
                <button
                    className='btn pointer'
                    title='Expand Saved Gradients'
                    style={{ background }}
                    onClick={() => closeMenu()}>
                    <i className="fas fa-arrow-right" />
                </button>
                :
                <button
                    className='btn pointer'
                    title='Expand Saved Gradients'
                    style={{ background }}
                    onClick={() => openMenu()}>
                    <i className="fas fa-arrow-left" />
                </button>
            }
        </div>
    );
}

export default MenuController;