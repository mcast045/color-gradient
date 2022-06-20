import React, { useState, useEffect } from 'react'
import { useMenuContext, useRGBContext } from '../../Context';

export interface MenuControllerProps {

}

const MenuController: React.FC<MenuControllerProps> = () => {

    const { background } = useRGBContext()
    const { isShowingMenu, setIsShowingMenu, setSlideMenu } = useMenuContext()
    const menuCssBreakpoint = window.screen.width
    const [isHorizontalArrow, setIsHorizontalArrow] = useState(true)

    useEffect(() => {
        //If device width <= the menu media query (1350px) 
        //that makes menu '.menuSlideUp', set true
        if (menuCssBreakpoint < 1351)
            setIsHorizontalArrow(false)
    }, [menuCssBreakpoint])

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
                    {isHorizontalArrow ? <i className="fas fa-arrow-right" /> : <i className="fas fa-arrow-down" />}
                </button>
                :
                <button
                    className='btn pointer'
                    title='Expand Saved Gradients'
                    style={{ background }}
                    onClick={() => openMenu()}>
                    {isHorizontalArrow ? <i className="fas fa-arrow-left" /> : <i className="fas fa-arrow-up" />}
                </button>
            }
        </div>
    );
}

export default MenuController;