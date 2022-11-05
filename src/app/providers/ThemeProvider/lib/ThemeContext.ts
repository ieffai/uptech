import { createContext } from 'react'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export const ThemeContext = createContext<ThemeContextProps>({})

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'
