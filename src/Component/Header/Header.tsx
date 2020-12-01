import React from 'react'
import './Header.scss'

export interface HeaderProps {
    background: string,
    value: number[],
    randomRGB: () => number[],
    setCopyIconClassOne: React.Dispatch<React.SetStateAction<string>>,
    setCopyIconClassTwo: React.Dispatch<React.SetStateAction<string>>,
    setValue: React.Dispatch<React.SetStateAction<number[]>>
}

const Header: React.FC<HeaderProps> = ({ randomRGB, value, setValue, background, setCopyIconClassOne, setCopyIconClassTwo }) => {

    //Save gradients as an array of objects in local storage
    const saveGradient = () => localStorage.setItem('colorGradient', value.toString())
    const removeGradient = () => localStorage.removeItem('colorGradient')

    const findNewColors = () => {
        setCopyIconClassOne('fas fa-copy')
        setCopyIconClassTwo('fas fa-copy')
        setValue(randomRGB())
    }

    return (
        <div className='header_container'>
            <button
                className='btn'
                style={{ background }}
                onClick={() => findNewColors()}>
                Find New Colors
                </button>

            <div className='header_util'>
                <button
                    className='btn saveBtn'
                    title='Save current gradient'
                    style={{ background }}
                    onClick={() => saveGradient()}>
                    <i className="far fa-save" />
                </button>

                <button
                    className='btn removeBtn'
                    title='Remove current gradient'
                    style={{ background }}
                    onClick={() => removeGradient()}>
                    <i className="fas fa-trash" />
                </button>
            </div>
        </div>
    );
}

export default Header;