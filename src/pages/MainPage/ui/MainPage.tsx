import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
const MainPage = (): ReactElement => {
    const { t } = useTranslation('translation', { keyPrefix: 'mainPage' })
    return <div>{t('title')}</div>
}

export default MainPage
