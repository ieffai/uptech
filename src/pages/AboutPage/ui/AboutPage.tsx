import { useTranslation } from 'react-i18next'

const AboutPage = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'aboutPage' })
    return <div>{t('title')}</div>
}

export default AboutPage
