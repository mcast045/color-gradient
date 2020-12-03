import React, { useContext } from 'react'
import { RGBContext } from '../../Context/RGBContext'
import { IconContext } from '../../Context/IconContext'
import { hexToRgb, rgbToHex } from '../../Helpers/ColorConverters'

export interface HeaderColorSelectorProps {

}

const HeaderColorSelector: React.FC<HeaderColorSelectorProps> = () => {

    const { rgbValues, setRgbValues } = useContext(RGBContext)
    const { copyIconClass, setCopyIconClass } = useContext(IconContext)

    const [redOne, greenOne, blueOne, redTwo, greenTwo, blueTwo] = rgbValues

    const onChange = (e: React.FormEvent): void => {
        //Get input values
        const hexValue = ((e.target as HTMLInputElement).value)
        const updatedRgbValues = (hexToRgb(hexValue))
        const { r, g, b } = updatedRgbValues!

        //Update a copy of rgbValues and show updated icons
        const rgbValuescopy = [...rgbValues]
        if ((e.target as HTMLInputElement).name === 'colorOne') {
            rgbValuescopy.splice(0, 3, r, g, b)
            setCopyIconClass({ ...copyIconClass, color_1: 'fas fa-copy', save: 'far fa-save' })
        }
        else if ((e.target as HTMLInputElement).name === 'colorTwo') {
            rgbValuescopy.splice(3, 3, r, g, b)
            setCopyIconClass({ ...copyIconClass, color_2: 'fas fa-copy', save: 'far fa-save' })
        }

        //Update rgbValue state
        setRgbValues(rgbValuescopy)
    }

    return (
        <div className='header_colorSelector'>
            <input className='colorPicker pickerOne' type='color' name='colorOne' value={rgbToHex(redOne, greenOne, blueOne)} onChange={e => onChange(e)} />
            <input className='colorPicker pickerTwo' type='color' name='colorTwo' value={rgbToHex(redTwo, greenTwo, blueTwo)} onChange={e => onChange(e)} />
        </div>
    );
}

export default HeaderColorSelector;