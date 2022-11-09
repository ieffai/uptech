import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { PageLoader } from 'widgets'
const MainPage = (): ReactElement => {
    const { t } = useTranslation('main')
    return <><div>{t('main_page')}</div>
        <PageLoader/> </>
}

export default MainPage
