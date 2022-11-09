import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme, classNames } from 'shared'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactElement => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={classNames(cls.mainLink)}
                >
                    {t('Main page')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('About page')}
                </AppLink>
            </div>
        </div>
    )
}
