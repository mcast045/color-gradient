import React from 'react'
import './Header.scss'
import HeaderColorSelector from './HeaderColorSelector'
import HeaderUtils from './HeaderUtils'

export interface HeaderProps {
    randomRGB: () => number[]
}

const Header: React.FC<HeaderProps> = ({ randomRGB }) => {
    return (
        <div className='header'>
            <div className='header_container'>
                <HeaderColorSelector randomRGB={randomRGB} />
                <HeaderUtils />
            </div>
        </div>
    );
}

export default Header;