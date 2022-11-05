import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared'
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...rest } = props
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    )
}
