import { Button, classNames, ThemeButton } from 'shared'
import { useTranslation } from 'react-i18next'
import { ReactElement } from 'react'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps): ReactElement => {
    const { t, i18n } = useTranslation()

    const toggle = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('language')}
        </Button>
    )
}
