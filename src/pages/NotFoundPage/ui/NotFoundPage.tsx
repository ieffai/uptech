import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps): ReactElement => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div>{t('Page not found')}</div>
        </div>
    )
}
