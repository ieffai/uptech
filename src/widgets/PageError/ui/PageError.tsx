import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, classNames } from 'shared'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps): ReactElement => {
    const { t } = useTranslation()
    const reloadPage = (): void => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('An unexpected error happened')}</p>
            <Button onClick={reloadPage}>
                {t('refresh page')}
            </Button>
        </div>
    )
}
