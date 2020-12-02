import React, { useContext } from 'react'
import { RGBContext } from '../../Context/RGBContext'
import './Header.scss'
import MenuController from './MenuController'
import { saveGradient } from '../../Helpers/localStorage'

export interface HeaderProps {
    randomRGB: () => number[],
}

const Header: React.FC<HeaderProps> = ({ randomRGB }) => {

    const { rgbValues, background, setRgbValues, copyIconClass, setCopyIconClass, isShowingMenu } = useContext(RGBContext)


    const findNewColors = (): void => {
        setCopyIconClass({ color_1: 'fas fa-copy', color_2: 'fas fa-copy', save: 'far fa-save' })
        setRgbValues(randomRGB())
    }

    const saveClick = (): void => {
        if (copyIconClass.save !== 'fas fa-check') {
            saveGradient(rgbValues)
            setCopyIconClass({ ...copyIconClass, save: 'fas fa-check' })
        }
    }

    return (
        <div className='header'>
            <div className='header_container'>

                <button
                    className='btn pointer'
                    style={{ background }}
                    onClick={() => findNewColors()}
                    disabled={isShowingMenu}>
                    Find New Colors
                </button>

                <div className='header_util'>
                    <button
                        className='btn saveBtn pointer'
                        title='Save Current Gradient'
                        style={{ background }}
                        onClick={() => saveClick()}
                        disabled={isShowingMenu}>
                        <i className={`${copyIconClass.save}`} />
                    </button>

                    <MenuController />
                </div>
            </div>
        </div>
    );
}

export default Header;