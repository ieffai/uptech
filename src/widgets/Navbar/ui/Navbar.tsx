import { ReactElement } from 'react'
import { AppLink, AppLinkTheme, classNames } from 'shared'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={classNames(cls.mainLink)}
                >
                    Main page
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    About page
                </AppLink>
            </div>
        </div>
    )
}
