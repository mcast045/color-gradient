//  To fix "--jsx flag" error. 
//  Press "CTL Shift P", 
//  Search for "Typescript: Select Typescript Version"
//  Select "Use Workspace Version"
import React, { useState, useEffect } from 'react'
import './App.scss'
import Colors from './Component/Colors/Colors'
import Header from './Component/Header/Header'
import { RGBContext } from './Context/RGBContext'

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

  useEffect(() => {
    setBackground(`linear-gradient(to right, rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 1), rgba(${rgbValues[3]}, ${rgbValues[4]}, ${rgbValues[5]}, 1))`)
  }, [rgbValues])

  return (
    <div className="App">
      <RGBContext.Provider value={{ rgbValues, setRgbValues, background, copyIconClass, setCopyIconClass, isShowingMenu, setIsShowingMenu, slideMenu, setSlideMenu }}>
        <Header randomRGB={randomRGB} />
        <Colors />
      </RGBContext.Provider>
    </div>
  );
}

export default App;
