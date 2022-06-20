//  To fix "--jsx flag" error. 
//  Press "CTL Shift P", 
//  Search for "Typescript: Select Typescript Version"
//  Select "Use Workspace Version"
import React from 'react'
import './App.scss'
import Colors from './Component/Colors/Colors'
import Header from './Component/Header/Header'
import { RGBContextProvider, MenuContextProvider, IconContextProvider } from './Context'
import { randomRGB } from './Helpers/ColorConverters'

function App() {
  return (
    <div className="App">
      <RGBContextProvider>
        <MenuContextProvider>
          <IconContextProvider>

            <Header randomRGB={randomRGB} />
            <Colors />

          </IconContextProvider>
        </MenuContextProvider>
      </RGBContextProvider>
    </div>
  );
}

export default App;
