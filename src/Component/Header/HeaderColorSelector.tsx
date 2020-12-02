import React, { useContext } from 'react'
import { RGBContext } from '../../Context/RGBContext'
import { hexToRgb, rgbToHex } from '../../Helpers/ColorConverters'

export interface HeaderColorSelectorProps {
    randomRGB: () => number[]
}

const HeaderColorSelector: React.FC<HeaderColorSelectorProps> = ({ randomRGB }) => {

    const { rgbValues, background, setRgbValues, setCopyIconClass, isShowingMenu } = useContext(RGBContext)

    const [redOne, greenOne, blueOne, redTwo, greenTwo, blueTwo] = rgbValues

    const findNewColors = (): void => {
        setCopyIconClass({ color_1: 'fas fa-copy', color_2: 'fas fa-copy', save: 'far fa-save' })
        setRgbValues(randomRGB())
    }

    const onChange = (e: React.FormEvent): void => {
        //Get input values
        const hexValue = ((e.target as HTMLInputElement).value)
        const updatedRgbValues = (hexToRgb(hexValue))
        const { r, g, b } = updatedRgbValues!

        //Update a copy of rgbValues
        const rgbValuescopy = [...rgbValues]
        if ((e.target as HTMLInputElement).name === 'colorOne') rgbValuescopy.splice(0, 3, r, g, b)
        else if ((e.target as HTMLInputElement).name === 'colorTwo') rgbValuescopy.splice(3, 3, r, g, b)

        //Update rgbValue state
        setRgbValues(rgbValuescopy)
    }

    return (
        <div className='header-colorSelector'>
            <input type='color' name='colorOne' value={rgbToHex(redOne, greenOne, blueOne)} onChange={e => onChange(e)} />

            <button
                className='btn pointer'
                style={{ background }}
                onClick={() => findNewColors()}
                disabled={isShowingMenu}>
                Find New Colors
            </button>

            <input type='color' name='colorTwo' value={rgbToHex(redTwo, greenTwo, blueTwo)} onChange={e => onChange(e)} />
        </div>
    );
}

export default HeaderColorSelector;