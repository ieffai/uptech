import { ReactElement, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared'

interface BugButtonProps {
    className?: string
}
// component for testing error boundary
export const BugButton = ({ className }: BugButtonProps): ReactElement => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const throwError = (): void => {
        setError(true)
    }

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <Button onClick={throwError}>
            {t('Set Error')}
        </Button>
    )
}
