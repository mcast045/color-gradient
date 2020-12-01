//  To fix "--jsx flag" error. 
//  Press "CTL Shift P", 
//  Search for "Typescript: Select Typescript Version"
//  Select "Use Workspace Version"
import React, { useState, useEffect } from 'react'
import './App.scss'
import Colors from './Component/Colors/Colors'
import Header from './Component/Header/Header'

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

  const [value, setValue] = useState(randomRGB())
  const [background, setBackground] = useState('')

  const [copyIconClassOne, setCopyIconClassOne] = useState('fas fa-copy')
  const [copyIconClassTwo, setCopyIconClassTwo] = useState('fas fa-copy')

  useEffect(() => {
    setBackground(`linear-gradient(to right, rgba(${value[0]}, ${value[1]}, ${value[2]}, 1), rgba(${value[3]}, ${value[4]}, ${value[5]}, 1))`)
  }, [value])

  return (
    <div className="App">
      <Header randomRGB={randomRGB} value={value} setValue={setValue} background={background} setCopyIconClassOne={setCopyIconClassOne} setCopyIconClassTwo={setCopyIconClassTwo} />
      <Colors value={value} background={background} copyIconClassOne={copyIconClassOne} setCopyIconClassOne={setCopyIconClassOne} copyIconClassTwo={copyIconClassTwo} setCopyIconClassTwo={setCopyIconClassTwo} />
    </div>
  );
}

export default App;
