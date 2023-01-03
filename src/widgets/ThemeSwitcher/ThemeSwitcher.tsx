import { Theme, useTheme } from 'app'
import { ReactElement } from 'react'
import { Button, classNames, ICON_THEME_DARK, ICON_THEME_LIGHT, ThemeButton } from 'shared'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): ReactElement => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ICON_THEME_DARK /> : <ICON_THEME_LIGHT />}
        </Button>
    )
}
