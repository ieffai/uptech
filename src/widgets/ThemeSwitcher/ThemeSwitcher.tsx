import { Theme, useTheme } from 'app'
import { ReactElement } from 'react'
import { classNames, ICON_THEME_DARK, ICON_THEME_LIGHT } from 'shared'
import { Button, ThemeButton } from '../../shared/ui/Button'

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
