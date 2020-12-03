import { createContext } from 'react'

interface IContext {
    slideMenu: string,
    isShowingMenu: boolean,
    setSlideMenu: React.Dispatch<React.SetStateAction<string>>,
    setIsShowingMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<IContext>({
    slideMenu: '',
    isShowingMenu: false,
    setSlideMenu: () => { },
    setIsShowingMenu: () => { }
})