//  To fix "--jsx flag" error. 
//  Press "CTL Shift P", 
//  Search for "Typescript: Select Typescript Version"
//  Select "Use Workspace Version"
import React, { useState, useEffect } from 'react'
import './App.scss'
import Colors from './Component/Colors/Colors'
import Header from './Component/Header/Header'
import { RGBContext } from './Context/RGBContext'
import { MenuContext } from './Context/MenuContext'
import { IconContext } from './Context/IconContext'
import { rgbToHex } from './Helpers/ColorConverters'

interface IRandomRGB {
  (): number[]
}

const randomRGB: IRandomRGB = () => {
  const redOne = Math.floor(Math.random() * 256)
  const greenOne = Math.floor(Math.random() * 256)
  const blueOne = Math.floor(Math.random() * 256)
  const redTwo = Math.floor(Math.random() * 256)
  const greenTow = Math.floor(Math.random() * 256)
  const blueTwo = Math.floor(Math.random() * 256)
  return [redOne, greenOne, blueOne, redTwo, greenTow, blueTwo]
}

function App() {

  const [rgbValues, setRgbValues] = useState(randomRGB())
  const [background, setBackground] = useState('')
  const [isShowingMenu, setIsShowingMenu] = useState(false)
  const [copyIconClass, setCopyIconClass] = useState({ color_1: 'fas fa-copy', color_2: 'fas fa-copy', save: 'far fa-save' })
  const [slideMenu, setSlideMenu] = useState('slideIn')
  const [colorOneHex, setColorOneHex] = useState('')
  const [colorTwoHex, setColorTwoHex] = useState('')

  useEffect(() => {
    setBackground(`linear-gradient(to right, rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 1), rgba(${rgbValues[3]}, ${rgbValues[4]}, ${rgbValues[5]}, 1))`)
    setColorOneHex(rgbToHex(rgbValues[0], rgbValues[1], rgbValues[2]))
    setColorTwoHex(rgbToHex(rgbValues[3], rgbValues[4], rgbValues[5]))
  }, [rgbValues])

  return (
    <div className="App">
      <RGBContext.Provider value={{ rgbValues, setRgbValues, colorOneHex, colorTwoHex, background }}>
        <MenuContext.Provider value={{ slideMenu, isShowingMenu, setSlideMenu, setIsShowingMenu }}>
          <IconContext.Provider value={{ copyIconClass, setCopyIconClass }}>

            <Header randomRGB={randomRGB} />
            <Colors />

          </IconContext.Provider>
        </MenuContext.Provider>
      </RGBContext.Provider>
    </div>
  );
}

export default App;
